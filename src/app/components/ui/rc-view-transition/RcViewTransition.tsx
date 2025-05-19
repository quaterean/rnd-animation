"use client";

import React, {
  HTMLAttributes,
  ReactElement,
  Ref,
  useCallback,
  useMemo,
} from "react";
import CSSMotion from "rc-motion";
import styles from "./RcViewTransition.module.scss";

type RenderMotionChildren = Pick<
  HTMLAttributes<unknown>,
  "className" | "style"
>;

interface ChildProps extends RenderMotionChildren {
  ref?: Ref<unknown>;
  [key: string]: any;
}

type AnimationType = "fade-in" | "fade-out";

const animationMap: Record<AnimationType, string> = {
  "fade-in": styles.fadeIn,
  "fade-out": styles.fadeOut,
};

type RcViewTransitionProps = {
  children: ReactElement<ChildProps>;
  default?: AnimationType;
  enter?: AnimationType;
  exit?: AnimationType;
  skipInitial?: boolean;
  onStart?: () => void;
  onReady?: () => void;
  onFinish?: () => void;
  visible?: boolean;
};

export function RcViewTransition(props: RcViewTransitionProps) {
  const {
    children,
    default: defaultCls,
    enter,
    exit,
    skipInitial,
    onStart,
    onReady,
    onFinish,
    visible = true,
  } = props;

  const actualEnter = useMemo(() => enter || defaultCls, [enter, defaultCls]);
  const actualExit = useMemo(() => exit || defaultCls, [exit, defaultCls]);

  const getAnimationClass = useCallback((type?: AnimationType) => {
    return type && type in animationMap ? animationMap[type] : undefined;
  }, []);

  const motionName = useMemo(
    () => ({
      appear: getAnimationClass(actualEnter),
      enter: getAnimationClass(actualEnter),
      leave: getAnimationClass(actualExit),
    }),
    [actualEnter, actualExit, getAnimationClass]
  );

  const renderMotionChildren = useCallback(
    (props: RenderMotionChildren) => {
      const { className, style } = props;

      const currentCls =
        defaultCls && defaultCls in animationMap
          ? animationMap[defaultCls]
          : "";

      const finalClassName = [
        children.props.className,
        currentCls,
        className,
        styles.animationContainer,
      ]
        .filter(Boolean)
        .join(" ")
        .trim();

      const finalStyle = {
        ...(children.props.style || {}),
        ...(style || {}),
      };

      const { ref, className: _, style: __, ...restProps } = children.props;

      return React.cloneElement<ChildProps>(children, {
        ...restProps,
        className: finalClassName,
        style: finalStyle,
      });
    },
    [children, defaultCls]
  );

  const handleStart = useCallback(() => onStart?.(), [onStart]);
  const handleReady = useCallback(() => onReady?.(), [onReady]);
  const handleFinish = useCallback(() => onFinish?.(), [onFinish]);

  return (
    <CSSMotion
      visible={visible}
      motionName={motionName}
      motionAppear={!skipInitial}
      onAppearStart={handleStart}
      onAppearActive={handleReady}
      onAppearEnd={handleFinish}
      onEnterStart={handleStart}
      onEnterActive={handleReady}
      onEnterEnd={handleFinish}
      onLeaveStart={handleStart}
      onLeaveActive={handleReady}
      onLeaveEnd={handleFinish}
      removeOnLeave={false} // Не удаляем элемент сразу (для плавного выхода)
      leavedClassName="" // Очищаем класс после ухода
    >
      {renderMotionChildren}
    </CSSMotion>
  );
}

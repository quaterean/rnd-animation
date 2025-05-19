"use client";

import React, { HTMLAttributes, ReactElement, Ref } from "react";
import CSSMotion from "rc-motion";
import "./RcViewTransition.css"; // Импортируем стили для анимаций

interface ChildProps
  extends Pick<HTMLAttributes<unknown>, "className" | "style"> {
  ref?: Ref<unknown>;
  [key: string]: any;
}

type RcViewTransitionProps = {
  children: ReactElement<ChildProps>;
  default?: string;
  enter?: string;
  exit?: string;
  skipInitial?: boolean;
  onStart?: () => void;
  onReady?: () => void;
  onFinish?: () => void;
  visible?: boolean;
};

export function RcViewTransition(props: RcViewTransitionProps) {
  const {
    children,
    default: defaultClass,
    enter,
    exit,
    skipInitial,
    onStart,
    onReady,
    onFinish,
    visible = true,
  } = props;

  const actualEnter = enter || defaultClass;
  const actualExit = exit || defaultClass;

  const motionName = {
    appear: actualEnter,
    enter: actualEnter,
    leave: actualExit,
  };

  const onAppearStart = () => {
    onStart?.();
  };
  const onAppearActive = () => {
    onReady?.();
  };
  const onAppearEnd = () => {
    onFinish?.();
  };

  // TODO: Проверить, возможно нужны будут не все
  const onEnterStart = onAppearStart;
  const onEnterActive = onAppearActive;
  const onEnterEnd = onAppearEnd;
  const onLeaveStart = onAppearStart;
  const onLeaveActive = onAppearActive;
  const onLeaveEnd = onAppearEnd;

  const renderMotionChildren = (props: {
    className?: string;
    style?: React.CSSProperties;
  }) => {
    const { className, style } = props;

    let finalClassName = "";

    if (children.props.className) {
      finalClassName += children.props.className + " ";
    }

    if (defaultClass) {
      finalClassName += defaultClass + " ";
    }

    if (className) {
      finalClassName += className;
    }

    const finalStyle = {
      ...(children.props.style || {}),
      ...(style || {}),
    };

    // Новые props, совместимые с обеими версиями React 18/19
    const newProps: ChildProps = {};

    const { ref, className: _, style: __, ...restProps } = children.props;
    Object.assign(newProps, restProps);

    newProps.className = finalClassName.trim();
    newProps.style = finalStyle;

    return React.cloneElement<ChildProps>(children, newProps);
  };

  return (
    <CSSMotion
      visible={visible}
      motionName={motionName}
      motionAppear={!skipInitial}
      onAppearStart={onAppearStart}
      onAppearActive={onAppearActive}
      onAppearEnd={onAppearEnd}
      onEnterStart={onEnterStart}
      onEnterActive={onEnterActive}
      onEnterEnd={onEnterEnd}
      onLeaveStart={onLeaveStart}
      onLeaveActive={onLeaveActive}
      onLeaveEnd={onLeaveEnd}
      removeOnLeave={false} // Не удаляем элемент сразу (для плавного выхода)
      leavedClassName="" // Очищаем класс после ухода
    >
      {renderMotionChildren}
    </CSSMotion>
  );
}

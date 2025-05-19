"use client";

import React, { ViewTransitionProps } from "react";
import { unstable_ViewTransition as ViewTransition } from "react";
import "./UiViewTransition.css"; // Автоматически импортируем стили для анимаций

/**
 * Компонент для создания анимированных переходов с использованием React ViewTransition API
 *
 * @link https://react.dev/reference/react/ViewTransition - экспериментальный функционал!!!
 *
 * Доступные классы анимаций:
 * - fade-in / fade-out - плавное появление и исчезновение
 * - zoom-in / zoom-out - увеличение и уменьшение с плавным появлением/исчезновением
 * - smooth-move - плавное перемещение (для переупорядочивания)
 * - slide-in-right / slide-out-right - появление/исчезновение справа
 * - slide-in-left / slide-out-left - появление/исчезновение слева
 *
 * Пример использования:
 * <UiViewTransition enter="fade-in" exit="fade-out">
 *   <YourComponent />
 * </UiViewTransition>
 */
export const UiViewTransition: React.FC<ViewTransitionProps> = (props) => {
  return <ViewTransition {...props} />;
};

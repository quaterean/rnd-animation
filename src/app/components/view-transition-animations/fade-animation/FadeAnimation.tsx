"use client";

import React, { useState, startTransition } from "react";
import { Button, Card } from "antd";
import { UiViewTransition } from "../../ui/view-transition";

export const FadeAnimation: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    startTransition(() => {
      setVisible(!visible);
    });
  };

  return (
    <>
      <Button onClick={toggleVisible}>
        {visible ? "Скрыть карточку" : "Показать карточку"}
      </Button>
      
      {visible && (
        <UiViewTransition enter="fade-in" exit="fade-out">
          <Card title="Информация" style={{ marginTop: 16 }}>
            Этот компонент плавно появляется и исчезает
          </Card>
        </UiViewTransition>
      )}
    </>
  );
};

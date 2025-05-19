"use client";

import React, { useState, startTransition } from "react";
import { Button, Card } from "antd";
import { RcViewTransition } from "../../ui/rc-view-transition/RcViewTransition";

export const RcFadeAnimation: React.FC = () => {
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

      <RcViewTransition enter="fade-in" exit="fade-out" visible={visible}>
        <Card title="Информация" style={{ marginTop: 16 }}>
          Этот компонент плавно появляется и исчезает
        </Card>
      </RcViewTransition>
    </>
  );
};

"use client";

import React, { useState, startTransition } from "react";
import { Image, Button, Space } from "antd";
import { UiViewTransition } from "../../ui/view-transition";

export const SharedElementTransition: React.FC = () => {
  const [fullscreen, setFullscreen] = useState(false);
  const imageUrl =
    "https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*P0S-QIRUbsUAAAAAAAAAAABkARQnAQ";
  const sharedName = "shared-image";

  const toggleFullscreen = () => {
    startTransition(() => {
      setFullscreen(!fullscreen);
    });
  };

  if (fullscreen) {
    return (
      <Space direction="vertical" style={{ width: "100%" }}>
        <Button onClick={toggleFullscreen}>Вернуться</Button>
        <UiViewTransition name={sharedName} share="zoom-out">
          <Image src={imageUrl} preview={false} style={{ width: "100%" }} />
        </UiViewTransition>
      </Space>
    );
  }

  return (
    <Space direction="vertical">
      <Button onClick={toggleFullscreen}>Увеличить</Button>
      <UiViewTransition name={sharedName} share="zoom-in">
        <Image
          src={imageUrl}
          preview={false}
          width={200}
          onClick={toggleFullscreen}
          style={{ cursor: "pointer" }}
        />
      </UiViewTransition>
    </Space>
  );
};

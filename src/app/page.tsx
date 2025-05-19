"use client";

import React from "react";
import { Tabs, Typography, Card } from "antd";
import "./styles.css";
import { RcFadeAnimation } from "./components/rc-view-transition-animations";

const { Title, Paragraph } = Typography;

export default function Home() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <nav>
          <ul style={{ display: "flex", gap: "24px", padding: 0 }}>
            <li style={{ listStyle: "none" }}>
              <a href="/" style={{ color: "#1677ff", fontWeight: "bold" }}>
                RcViewTransition Animations
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a href="/react-transition" style={{ color: "#1677ff" }}>
                ViewTransition Animations
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Title level={1}>
        Пример анимации появления и исчезновения с RcViewTransition
      </Title>
      <Paragraph>
        На этой странице представлен пример использования компонента
        RcViewTransition на основе rc-motion для создания базовой анимации
        появления и исчезновения элементов интерфейса.
      </Paragraph>

      <Tabs
        defaultActiveKey="fade"
        items={[
          {
            key: "fade",
            label: "Анимация появления и исчезновения",
            children: (
              <Card
                title="Появление и исчезновение элементов"
                style={{ marginTop: 16 }}
              >
                <Paragraph>
                  Демонстрация плавного появления и исчезновения компонентов с
                  помощью RcViewTransition.
                </Paragraph>
                <RcFadeAnimation />
              </Card>
            ),
          },
        ]}
      />
    </div>
  );
}

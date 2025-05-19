"use client";

import React from "react";
import { Tabs, Typography, Card } from "antd";
import {
  FadeAnimation,
  SharedElementTransition,
  ListReorderAnimation,
} from "../components/view-transition-animations";
import "./styles.css";

const { Title, Paragraph } = Typography;

export default function ReactTransition() {
  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <nav>
          <ul style={{ display: "flex", gap: "24px", padding: 0 }}>
            <li style={{ listStyle: "none" }}>
              <a href="/" style={{ color: "#1677ff" }}>
                RcViewTransition Animations
              </a>
            </li>
            <li style={{ listStyle: "none" }}>
              <a
                href="/react-transition"
                style={{ color: "#1677ff", fontWeight: "bold" }}
              >
                ViewTransition Animations
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <Title level={1}>Примеры анимаций с использованием ViewTransition</Title>
      <Paragraph>
        На этой странице представлены примеры использования экспериментального
        API React ViewTransition для создания различных типов анимаций
        интерфейса.
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
                  помощью ViewTransition.
                </Paragraph>
                <FadeAnimation />
              </Card>
            ),
          },
          {
            key: "shared",
            label: "Общие элементы",
            children: (
              <Card title="Анимация общих элементов" style={{ marginTop: 16 }}>
                <Paragraph>
                  Анимация перехода одного элемента между разными
                  представлениями (миниатюра → полноразмерное изображение).
                </Paragraph>
                <SharedElementTransition />
              </Card>
            ),
          },
          {
            key: "reorder",
            label: "Переупорядочивание списков",
            children: (
              <Card
                title="Анимация переупорядочивания"
                style={{ marginTop: 16 }}
              >
                <Paragraph>
                  Плавное анимирование изменения порядка элементов в списке с
                  сохранением контекста.
                </Paragraph>
                <ListReorderAnimation />
              </Card>
            ),
          },
        ]}
      />
    </div>
  );
}

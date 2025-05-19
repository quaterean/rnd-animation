"use client";

import React, { useState, startTransition } from "react";
import { Button, Card, Space } from "antd";
import { UiViewTransition } from "../../ui/view-transition";

interface Item {
  id: number;
  title: string;
  content: string;
}

export const ListReorderAnimation: React.FC = () => {
  const [items, setItems] = useState<Item[]>(Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title: `Элемент ${i + 1}`,
    content: `Содержимое элемента ${i + 1}`
  })));

  const reorder = () => {
    startTransition(() => {
      setItems([...items].sort(() => Math.random() - 0.5));
    });
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Button onClick={reorder}>Перемешать список</Button>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {items.map(item => (
          <UiViewTransition key={item.id} update="smooth-move">
            <Card title={item.title}>
              {item.content}
            </Card>
          </UiViewTransition>
        ))}
      </div>
    </Space>
  );
};

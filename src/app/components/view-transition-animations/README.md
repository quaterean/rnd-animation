# ViewTransition Animations

Этот набор компонентов демонстрирует возможности экспериментального API React ViewTransition для создания плавных анимаций при изменении состояния интерфейса.

## Компоненты

### 1. FadeAnimation

Демонстрирует плавное появление и исчезновение элементов с настраиваемыми стилями анимации.

```tsx
<UiViewTransition enter="fade-in" exit="fade-out">
  <YourComponent />
</UiViewTransition>
```

### 2. SharedElementTransition

Создает непрерывную анимацию при переключении между разными представлениями одного элемента.

```tsx
// Миниатюра
<UiViewTransition name="shared-element-id" share="zoom-in">
  <Image />
</UiViewTransition>

// Полноразмерное изображение
<UiViewTransition name="shared-element-id" share="zoom-out">
  <Image />
</UiViewTransition>
```

### 3. ListReorderAnimation

Плавное анимирование изменения порядка элементов в списке.

```tsx
<UiViewTransition key={item.id} update="smooth-move">
  <YourListItem />
</UiViewTransition>
```

## Использование CSS

Стили анимаций автоматически импортируются компонентом `UiViewTransition`, дополнительных импортов не требуется.

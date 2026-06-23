# TextInput Component

A reusable and accessible **Text Input component** built with **React + Tailwind CSS**.
This component is part of a design system challenge and supports multiple states, icons, and accessibility features.

---

## 🚀 Features

* Reusable input component
* Label support
* Hint / helper text
* Error state handling
* Disabled state
* Left and right icons support
* Fully accessible (ARIA support)
* Focus styles with Tailwind
* Responsive design

---

## 📦 Tech Stack

* React (Vite)
* Tailwind CSS
* JavaScript (ES6+)

---

## 📁 Project Structure

```
src/
│
├── components/
│   └── TextInput.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---



## ♿ Accessibility

This component follows basic accessibility best practices:

* `label` is linked to input using `htmlFor` and `id`
* Hint and error messages are connected using `aria-describedby`
* Error state uses `aria-invalid`
* Keyboard navigation supported

---

## 🎨 Design System

The component follows a consistent design system:

### Colors

* Primary text: neutral-900
* Hint text: neutral-500
* Border default: neutral-200
* Focus border: indigo-600
* Error: red-600

### Spacing

* Based on 4px grid system
* Tailwind spacing utilities used (`p-2`, `p-3`, etc.)

---

## 📱 Responsive Behavior

The component is fully responsive and works on:

* Mobile (375px)
* Tablet (768px)
* Desktop (1440px)

---

## 🛠️ How to Run Project

```bash
npm install
npm run dev
```

---

## 📌 Notes

* Icons are optional and can be passed as React components
* Component supports multiple states at the same time (e.g. error + disabled handling)
* Built for reuse in larger design systems

---

## 👨‍💻 Author:Tuyisenge Esther

Built as part of a frontend design system challenge using React and Tailwind CSS.

T

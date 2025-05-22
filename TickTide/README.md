# TickTide

A lightweight Expo/React Native to-do app with customizable checkbox and strike-through colors.

---

## Features

- **Add / Delete** tasks
- **Toggle complete** with animated checkboxes
- **Edit mode** to batch-delete items
- **Settings** screen to pick your accent color

---

## Tech Stack

- **Expo** with the new [Router](https://docs.expo.dev/router/introduction/)
- **React Native** (functional components + hooks)
- **React Native Paper** for UI controls
- **Context API** for theming

---

## Getting Started

1. **Clone & install**  
   ```bash
   git clone <your-repo-url>
   cd <project-folder>
   npm install

Run on your device or simulator
npx expo start

Press i to launch the iOS Simulator

Press a to launch an Android emulator

Or scan the QR code with Expo Go

Project Structure
├── app/
│   ├── index.tsx       # “Tasks” tab
│   ├── settings.tsx    # “Settings” tab
│   └── _layout.tsx     # Expo Router root
│
├── components/
│   ├── AddTaskBar.tsx  # Add + Edit buttons
│   ├── TaskItem.tsx    # Single task row with checkbox
│   └── ColorDropdown.tsx  # Accent-color picker
│
└── context/
    └── ColorContext.tsx  # Holds checkbox & strike colors

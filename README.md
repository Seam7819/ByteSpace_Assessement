# ByteSpace

A responsive course discovery frontend built with React, TypeScript, and Vite.

## Getting Started

```bash
npm install
npm run dev
```

## Quality Checks

```bash
npm run lint
npm run build
```

## Project Structure

```text
src/
├── app/                 # Application shell and top-level composition
├── components/          # Shared layout and course components
│   ├── course/
│   └── layout/
├── features/
│   └── home/            # Homepage state, data, types, helpers, and sections
│       └── sections/
├── styles/              # Global reset and site design system
└── main.tsx             # React application entry point
```

The home feature owns course search and category filtering. Shared navigation, footer, newsletter, and course-card components are kept outside the feature so they can be reused by future pages.

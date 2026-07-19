# @eloisallena/web_components

A React component library built with Next.js, TypeScript, and Tailwind CSS, published to npm. Created as an internship mini task. Provides a set of reusable, theme-aware UI components — buttons, forms, cards, tables, modals, navigation, and layout primitives — for building consistent interfaces across projects.

## Installation

```bash
npm install @eloisallena/web_components@latest
```

### Peer dependencies

This package expects the following to already be installed in your project:

```bash
npm install next@^16.2.4 react@19.2.4 react-dom@19.2.4
```

## Setup

Import the component styles once, typically in your root layout:

```tsx
import "@eloisallena/web_components/style.css";
```

## Usage

Import components directly from the package:

```tsx
import {
  Button,
  Cform,
  Ctable,
  Modal,
  Select,
  TableBody,
  TableCell,
  TableHead,
  TextField,
} from "@eloisallena/web_components";
```

### Example — Section with cards

```tsx
<Section id="about" title="About">
  <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
    <Card>
      <CardContent title="Card One" description="Some description text." />
    </Card>
    <Card>
      <CardContent title="Card Two" description="Some description text." />
    </Card>
    <Card>
      <CardContent title="Card Three" description="Some description text." />
    </Card>
  </div>
</Section>
```

## Components

| Component | Description |
|---|---|
| `Button` | Configurable button with `primary`, `secondary`, `restore`, `delete`, and `disabled` variants; supports loading state |
| `Card` / `CardContent` / `CardFooter` / `CardImage` | Card container and its content/footer/image building blocks |
| `Cform` | Styled form wrapper |
| `CheckBox` | Checkbox input with label and helper text |
| `Ctable` / `TableHead` / `TableBody` / `TableRow` / `TableCell` | Table components for displaying tabular data with a scrollable, capped-height container |
| `Select` | Styled select dropdown |
| `TextField` | Styled text input with label and helper text |
| `Modal` | Overlay dialog with title and close button |
| `Section` | Full-width page section wrapper with optional title |
| `Breadcrumbs` | Breadcrumb navigation trail |
| `NavBar` / `Drawer` | Desktop navigation bar and mobile navigation drawer |
| `Icon` | Logo/brand icon with title |
| `SearchBar` | Search input with mobile modal fallback |
| `Cheader` / `Cfooter` / `FooterBottom` / `FooterContact` / `FooterIcon` / `QuickLink` | Header and footer building blocks |
| `LandingLayout` | Full page layout combining header, nav, breadcrumb, content, and footer |
| `Loader` | Small loading spinner |

## Tech Stack

- React 19 / Next.js 16
- TypeScript
- Tailwind CSS v4
- Vitest + Playwright (testing)
- Vite (library build)

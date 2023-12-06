# Next.js Boilerplate

![banner.png](public%2Fbanner.png)

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Add Prisma (optional)](#add-prisma)

## Overview

This is a comprehensive Next.js boilerplate that provides a solid foundation for
starting your web development projects. It includes essential configurations,
tools, and libraries to streamline the development process.

- [Next.js](https://nextjs.org/) - A React framework for building production
  grade applications that scale.
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript
  that compiles to plain JavaScript.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for
  rapidly building custom designs.
- [React Hook Form](https://react-hook-form.com/) - A performant and flexible
  library for building forms.
- [Zod](https://zod.dev/) - A TypeScript-first schema validation library.
- [ESLint](https://eslint.org/docs/latest/) - A pluggable and configurable
  linter tool for identifying and reporting on patterns in JavaScript.
- [Prettier](https://prettier.io/docs/en/) - An opinionated code formatter.
- [Husky](https://typicode.github.io/husky/) - A tool that makes it easy to use
  githooks as if they are npm scripts.
- [React-use](https://streamich.github.io/react-use/) - A collection of
  essential hooks for React.
- [clsx](https://github.com/lukeed/clsx#readme) - A tiny utility for
  constructing className strings conditionally.

## Requirements

- [Node.js](https://nodejs.org/en/) (18.x or later)
- [npm](https://www.npmjs.com/) (9.x or later)

## Getting Started

Clone the repository and navigate to the project folder:

```bash
git clone git@github.com:josserden/nextjs-boilerplate.git
```

Install the dependencies:

```sh
npm install
```

Create new directory for your project:

```sh
mkdir my-project
```

Removing the git history:

```sh
cd my-project
rm -rf .git
```

Install the dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result. Congratulations! You've successfully started your Next.js project.

## Project Structure

### Description of object structure

<details>

<summary><b>Structure: </b></summary>

<br/>

```
├── .husky -> folder with githooks
|-- app -> folder with the main code of the project (pages, layout, etc.)
|-- components -> folder with reusable components
    |-- common -> components that are used in more than one module
    |-- layout -> components that are used in the layout
|-- public -> folder with static files (images, fonts, etc.)
<!-- You can create these folders already in work -->
|-- data -> data for the project ( from graphql, json, etc.)
|-- utils -> helpers, functions, etc.
```

</details>

---

**Create a components folder for each module**

<details>

<summary><b>Example:</b></summary>

<br/>

```
# ✅ Good

├── components
    ├── layout
        ├── Header
            ├── index.ts -> file for re->export
            ├── Header.tsx -> main component
            ├── constants.ts -> constants for this component
            ├── Logo -> folder with component for this module
                ├── index.ts
                ├── Logo.tsx
            ├── Menu -> folder with component for this module
                ├── index.ts
                ├── Menu.tsx
        ├── Footer
            ├── index.ts
            ├── Footer.tsx
```

</details>

---

**Global and reusable css classes should be placed in the
[globals.css](app%2Fglobals.css).**

<details>

<summary><b>Example:</b></summary>

<br/>

```css
/*globals.css */
@layer base {
  html {
    @apply scroll-smooth;
  }
}

@layer components {
  .your-class {
    @apply ...;
  }
}
```

</details>

---

### Common components

This project has a [folder](components) with common components that are used in
more than one module. You can use them in your project or update them if you
don't need them.

## Add Prisma

If you want to add Prisma to your project, you can use this
[guide](https://codevoweb.com/how-to-setup-prisma-orm-in-nextjs-13-app-directory/)
or [official documentation](https://www.prisma.io/nextjs).

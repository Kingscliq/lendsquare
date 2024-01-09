# Lendsqr Web Portal

Lendsqr's web app, serving over half a million users, employs React with TypeScript and SCSS. This powerful stack facilitates rapid and reliable feature development, ensuring a seamless and scalable user experience.

## Table of Contents

- [Project Name](#project-name)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Prerequisites](#prerequisites)
  - [Getting Started](#getting-started)
    - [Installation](#installation)
    - [Configuration](#configuration)
  - [Usage](#usage)
  - [Folder Structure](#folder-structure)
  - [Dependencies](#dependencies)
  - [Contributing](#contributing)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Introduction

The project is a dynamic web application developed with React, TypeScript, and SCSS, catering to a substantial user base. Noteworthy features encompass a robust authentication system, an organized users table for efficient data management, detailed user profiles, and versatile user management capabilities, including activation and blacklisting.

## Features

**Authentication:**

- Allows users to securely log in and access personalized features.

**Users Table:**

- Stores essential user information for efficient data management.
- Filtering users table by orgaisation, username, date, status

**User Details:**

- Provides a comprehensive view of individual user data.

**User Management (Activate/Blacklisting):**

- Ability to activate and blacklist a user

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- npm (Node Package Manager): Typically installed with Node.js
- Git: [Download and install Git](https://git-scm.com/)

#### Technology Stack

This project is built using the following technologies:

- **React:**

  - A JavaScript library for building user interfaces, facilitating the creation of dynamic and responsive components.

- **TypeScript:**

  - A superset of JavaScript that adds static typing, enhancing code quality and developer productivity in large-scale applications.

- **SCSS:**

  - A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS), offering advanced styling features.

- **Redux:**

  - A state management library for JavaScript applications, ensuring a predictable and centralized state.

- **React Table:**

  - A lightweight and extensible library for building dynamic and customizable tables in React applications.

- **RTK (Redux Toolkit):**

  - A set of tools and utilities for simplifying Redux-related tasks, enhancing the development experience.

- **Jest:**

  - A JavaScript testing framework with a focus on simplicity and flexibility, widely used for testing React applications.

- **Faker.js:**
  - A JavaScript library for generating realistic fake data, often used in testing and development scenarios to simulate real-world data.

## Getting Started

After you have installed Nodejs, you can then proceed to follow the installation instructions

### Installation

**Clone the repository:**

```bash
git clone https://github.com/Kingscliq/lendsquare-test
```

Once you clone the project, the first thing you need to do is to install the dependencies using the following command

**Navigate to the project directory:**

```bash
cd lendsquare-test
```

**Install Dependencies:**

```bash
yarn install
```

## Running the Application Locally

After installing you can start the project using the following command

**Start the development server:**

```bash
yarn start
```

This will launch the development server and open the application in your default web browser.

**_Open your web browser and navigate to http://localhost:3000_**

##Building for Production

To build the application for production, use the following command:

```bash
yarn build
```

This will generate a build folder with optimized and minified files ready for deployment.


## Folder Structure


build/                       (Generated build files)
public/                      (Public assets like images, favicons, index.html)
src/                         (Source code)
  assets/                    (Static assets like images, fonts, icons)
  components/                (Reusable UI components)
  features/                  (Subdirectories for feature-specific code)
  hooks/                     (Custom React hooks)
  pages/                     (Top-level views and routes)
  providers/                 (Context providers for global state)
  slices/                    (Redux slices for state management)
  store/                     (Redux store configuration)
  styles/                    (Global and component-specific styles)
  types/                     (TypeScript type definitions)
  utils/                     (Utility functions and helpers)
App.test.tsx                 (App component test file)
App.tsx                      (Root app component)
index.scss                   (Global stylesheet)
index.tsx                    (Entry point of the app)
react-app-env.d.ts           (TypeScript environment definitions)
reportWebVitals.ts           (Web Vitals reporting)
setupTests.ts                (Test environment setup)

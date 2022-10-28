## Table of contents

- [About project](#about-project)
- [Getting started](#getting-started)
- [Envs](#envs)
- [Libraries and Technology Stack](#libraries-and-technology-stack)
- [Project Screenshots](#added-library)

# About project

This project was created for recruitment at IG GROUP as Junior Frontend Developer. The program uses a simple rest API to fetch data and display tables with data. Aplication is full responsive.

# Getting started

1. Download repo

   ```sh
   git clone https://github.com/Hepsko/ig_group_recruitment.git
   ```

2. Install dependencies
   ```sh
   npm i
   ```
3. **_!IMPORTANT_** Create **_.env.local_** in main folder, this file must contain yout API KEY!!

   ```sh
   NEXT_PUBLIC_API_KEY = "API_KEY"
   ```

4. Run tests

   ```sh
   npm run test
   ```

5. Run App
   ```sh
   npm run dev
   ```

# Envs

Although the project is simple, API keys should not be stored in the repository. Therefore, the project requires the creation of its own file env. local

# Libraries and Technology Stack

**_- NextJS_** - Although the project doesn’t need all the technologies that are included in nextjs, I think it’s a good practice to generate a new project with nextjs, it’s much more scaled than a “create-react-app” It might as well be possible to rebuild the whole project from scratch, but it would be more laborious.

**_- Axios_** - Promised-based HTTP client for JavaScript

**_- React Query_** - data-fetching library for React. Makes it easy to manage application state and helps you avoid boilerplate

**_- StyledComponents_** - Component styling library

**_- Antd design_** - Package with components, speeds up work when design is not in the first place

**_- Jest_** - Library for testing

# Project Screenshots

## Desktop

![desktop 1](/public/screenshots/desktop1.png)
![desktop 2](/public/screenshots/desktop2.png)

## Mobile

![mobile 1](/public/screenshots/mobile1.png)
![mobile 2](/public/screenshots/mobile2.png)

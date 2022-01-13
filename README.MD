# nft-frontend-v2

## Available Scripts

```bash
    yarn dev: Start dev server
    yarn build: Build Next
    yarn start: Start Next Build
    yarn storybook: Start Storybook
    yarn build-storybook: Build Storybook
    yarn build:analyze: Analyze bundle
    yarn lint
    yarn prettier
    yarn test: Run unit tests using enzyme and jest
    yarn cypress:open
    yarn cypress:run
    yarn cypress:test: Run E2E tests using cypress
```

## Structure

-   Cypress folder contains integrations tests
-   Pages contains the pages and hence routing as required by next.js
-   Public has the imgaes/locales/etc
-   Src has the main codebase
    -   API contains models, index and requests
        -   Request.ts uses react query and axios to create generic API/error handling. API has advanced features like hooks/caching/retry built into it
        -   Index.ts composes hooks using the basic hooks given in Request.ts, this file can be split based on pages/containers when large enough API endpoints are present
-   Components contains dumb components that do not cause side effects
    -   Are divided into atoms, molecules, organisms. Each level is composed using the earlier layer
-   Containers contains components that do cause side affects
-   definitions/interfaces contains styled-components definitions, example of using styled-components is in header.tsx
-   models contains the data interfaces used in the application
-   redux contains the store definition, slice definition
    -   Example of redux usage is to share the state of sidebar with header which exist in completely different tree nodes
-   styles contains the global styles

## Technologies used

### **Ant Design**

A design system for enterprise-level products. Create an efficient and enjoyable work experience.

[Go To Documentation](https://ant.design/docs/react/introduce)

### **Styled Components**

Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components.

[Go To Documentation](https://styled-components.com/docs)

### **Styled System**

Styled System is a collection of utility functions that add style props to your React components and allows you to control styles based on a global theme object with typographic scales, colors, and layout properties.

[Go To Documentation](https://styled-system.com/getting-started)

### **Storybook**

Storybook is an open source tool for developing UI components in isolation for React, Vue, Angular, and more. It makes building stunning UIs organized and efficient.

[Go To Documentation](https://storybook.js.org/docs/react/get-started/introduction)

### **Environment Variables**

Use environment variables in your next.js project for server side, client or both.

[Go To Documentation](https://github.com/vercel/next.js/tree/canary/examples/environment-variables)

### **Bundle Analyzer**

Use webpack-bundle-analyzer in your Next.js project. Visualize size of webpack output files with an interactive zoomable treemap.

[Go To Documentation](https://github.com/vercel/next.js/tree/canary/packages/next-bundle-analyzer)

### **React Query**

Hooks for fetching, caching and updating asynchronous data in React.

[Go To Documentation](https://react-query.tanstack.com/overview)

### **React Redux**

Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.

[Go To Documentation](https://redux.js.org/introduction/getting-started)

### **next-i18next**

next-i18next is a plugin for Next.js projects that allows you to get translations up and running quickly and easily, while fully supporting SSR, multiple namespaces with codesplitting, etc.

[Go To Documentation](https://github.com/isaachinman/next-i18next)

### **ESLint**

A pluggable and configurable linter tool for identifying and reporting on patterns in JavaScript. Maintain your code quality with ease.

[Go To Documentation](https://eslint.org/docs/user-guide/getting-started)

### **Prettier**

An opinionated code formatter; Supports many languages; Integrates with most editors.

[Go To Documentation](https://prettier.io/docs/en/index.html)

### **lint-staged**

The concept of lint-staged is to run configured linter (or other) tasks on files that are staged in git.

[Go To Documentation](https://github.com/okonet/lint-staged)

### **Enzyme**

Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components&#39; output. You can also manipulate, traverse, and in some ways simulate runtime given the output.

[Go To Documentation](https://enzymejs.github.io/enzyme/)

### **Cypress**

Fast, easy and reliable testing for anything that runs in a browser.

[Go To Documentation](https://docs.cypress.io/guides/overview/why-cypress.html)

### **Docker**

Docker simplifies and accelerates your workflow, while giving developers the freedom to innovate with their choice of tools, application stacks, and deployment environments for each project.

[Go To Documentation](https://www.docker.com/get-started)

### **Github Actions**

GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub.

[Go To Documentation](https://docs.github.com/en/actions)

## License

MIT

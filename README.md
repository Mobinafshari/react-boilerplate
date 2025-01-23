<h1>This is react starter projects for me and our company.</h1>

![banner](https://github.com/user-attachments/assets/5e00cdb3-bb29-43f7-a906-981f26b48ed0)

<p>When you are adding and committing files to git, <strong>lint-staged</strong> will run and it will lint and format changes and then building entire application then allow you to push to git.</p>
<p>use <strong>npm run analyze</strong> to figure out about unused files and packages.</p>
<p><strong>Cypress</strong> for E2E test and <strong>vitest</strong> for unit test prepared.</p>
<p>
<strong>run npx taze</strong> for upgrading packages properly
</p>
<p><strong>PWA is ready</strong>, you can update manifest in vite.config.ts and replace variables that you want also replace icons in public/icons folder. 
</p>
<p>Replace public/favicons.ico for your custom favicon</p>
<p><strong>The default fonts</strong> have been set, to change them just replace your fonts in src/assets/fonts and then change _font.scss file in src/styles/base/_font.scss</p>
<p>For icon handling add your svg to the icon folder in assets and import it in the <strong>Icon.tsx</strong> and use it with CustomIcon and icon prop.</p>
<p>i18n file added also you have two files to define your texts there and consider adding RTL and LTR with your use cases for the project.</p>
<p>For changing version and releasing first run <strong>npx changeset
</strong> and choose your option (Patch , Minor and Major) then run <strong>npx changeset version
</strong> to implement changes.</p>

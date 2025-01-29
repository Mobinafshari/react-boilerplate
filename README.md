# 🚀 React Starter for Raika  

![banner](https://github.com/user-attachments/assets/5e00cdb3-bb29-43f7-a906-981f26b48ed0)  

A powerful and well-structured React boilerplate for our company, designed to streamline development and enforce best practices.  

---

## 📦 Getting Started  
To create a new project using this boilerplate, run:  
```sh
npx react-raika project-name
```  
Then, start coding! 🚀  

---

## 🔧 Features & Setup  

### ✅ **Pre-Commit Linting & Formatting**  
When committing files, **husky** will automatically:  
✔️ Run lint-staged  
✔️ Lint & format changes  
✔️ Build the project  
✔️ Allow pushing only if everything passes  

### 📊 **Analyze Unused Files & Packages**  
Run:  
```sh
npm run analyze
```  
This helps identify **unused files and dependencies**.  

### 🧪 **Testing Setup**  
- **Cypress** → Preconfigured for **E2E testing** 🛠️  
- **Vitest** → Ready for **unit testing** ⚡  

### 🚀 **Upgrade Dependencies**  
Easily upgrade your dependencies with:  
```sh
npx taze
```  

### 📱 **PWA Support**  
- Modify the **manifest and Service Worker** in `public folder`  
- Update icons in `public/icons/`  

### 🎨 **Custom Styling & Fonts**  
- Replace fonts in `src/assets/fonts/`  
- Update `_font.scss` in `src/styles/base/_font.scss`  

### 🖼️ **Icon Handling**  
1. Add your **SVGs** to `src/assets/icons/`  
2. Import them in `Icon.tsx`  
3. Use them with `<CustomIcon icon="your-icon" />`  

### 🌍 **i18n & RTL Support**  
- **Multi-language support** included  
- Configure **RTL/LTR** based on your project’s needs  

### 🔖 **Versioning & Releases**  
Run:  
```sh
npm run release
```  
Select the version type, and let the script handle the rest!  

---

## 📚 Preinstalled Libraries  
This boilerplate includes essential tools and configurations to **boost productivity**.  

---

🎯 Ready to start? **Run the command, set up your project, and build amazing things!** 🚀


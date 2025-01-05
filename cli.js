#!/usr/bin/env node

import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Convert `__dirname` for ES Module compatibility
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectName = process.argv[2];

if (!projectName) {
  console.error('❌ Please specify the project name.');
  console.error('Example: npx @react/rayka my-app');
  process.exit(1);
}

const targetDir = path.resolve(process.cwd(), projectName);

if (fs.existsSync(targetDir)) {
  console.error('❌ Directory already exists. Please choose a different name.');
  process.exit(1);
}

console.log('🚀 Creating your React app...');

try {
  // Clone the boilerplate repository
  execSync(
    `git clone https://github.com/your-repo/react-boilerplate.git ${projectName}`,
    { stdio: 'inherit' }
  );

  // Navigate to the project directory
  process.chdir(targetDir);

  // Remove the .git folder to reset version control
  execSync('rm -rf .git', { stdio: 'inherit' });

  // Install dependencies
  execSync('npm install', { stdio: 'inherit' });

  console.log('✅ Your React app is ready!');
  console.log(`\nTo get started:\n\n   cd ${projectName}\n   npm start\n`);
} catch (error) {
  console.error('❌ Something went wrong:', error.message);
  process.exit(1);
}

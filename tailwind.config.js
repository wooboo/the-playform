const { join } = require('path');
/** @type {import('tailwindcss').Config} */
module.exports = {
  extend: ['./tailwind-workspace-preset.js'],
  content: [
    join(
      __dirname,
      '{pages,layouts,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
safelist: [
  'bg-html',
  'bg-css',
  'bg-javascript',
  'bg-python',
  'bg-java',
  'bg-typescript',
  'bg-php',
  'bg-csharp',
  'bg-c',
  'bg-ruby',
  'bg-markdown',
  'before:text-html',
  'before:text-css',
  'before:text-javascript',
  'before:text-python',
  'before:text-java',
  'before:text-typescript',
  'before:text-php',
  'before:text-csharp',
  'before:text-c',
  'before:text-ruby',
  'before:text-markdown',
],
  theme: {
    extend: {
      fontFamily: {
        title: ['Bebas Neue', 'cursive'],     // pour tes titres
        primary: ['Raleway', 'sans-serif'],    // pour le texte général
        code: ['Fira Code', 'monospace'],      // pour le code
        numeric: ['Inter', 'sans-serif'],      // pour les chiffres
      },
      colors: {
        'blue-primary': '#007ACC',
        'blue-secondary': '#569CD6',
        'purple-primary': '#6A5ACD',
        'white': '#FFFF',
        'black': '#000000',
        'error': '#E06C75',
        'success': '#4CAF50',
        'gray':'#d8d8d8',
        'html': '#e34c26',
        'javascript': '#f1e05a',
        'css': '#663399',
        'python': '#3572A5',
        'java': '#b07219',
        'typescript': '#3178c6',
        'php': '#4F5D95',
        'csharp': '#178600',
        'c': '#555555',
        'ruby': '#701516',
        'markdown': '#083fa1',
      },
      fontSize: {
        'xxs': '0.6rem',    // 10px
        'xs': '0.75rem',    // 12px
        'sm': '0.875rem',   // 14px
        'base': '1rem',     // 16px
        'md': '1.125rem',   // 18px
        'lg': '1.25rem',    // 20px
        'xl': '1.5rem',     // 24px
        '2xl': '2rem',      // 32px
        '3xl': '2.5rem',    // 40px
        '4xl': '3rem',      // 48px
      }
    }
  },
  plugins: [],
}


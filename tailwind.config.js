/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* System */
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        muted: "var(--muted)",

        /* Primary */
        primary: {
          DEFAULT: "var(--primary-500)",
          400: "var(--primary-400)",
          300: "var(--primary-300)",
          200: "var(--primary-200)",
          100: "var(--primary-100)",
        },

        /* Secondary */
        secondary: {
          DEFAULT: "var(--secondary-500)",
          400: "var(--secondary-400)",
          300: "var(--secondary-300)",
          200: "var(--secondary-200)",
          100: "var(--secondary-100)",
        },

        /* Status */
        success: {
          DEFAULT: "var(--success-500)",
          light: "var(--success-100)",
        },
        warning: {
          DEFAULT: "var(--warning-500)",
          light: "var(--warning-100)",
        },
        error: {
          DEFAULT: "var(--error-500)",
          light: "var(--error-100)",
        },
        info: {
          DEFAULT: "var(--info-500)",
          light: "var(--info-100)",
        },

        /* Sidebar */
        sidebar: {
          DEFAULT: "var(--sidebar-bg)",
          bg: "var(--sidebar-bg)",
          text: "var(--sidebar-text)",
          activeItem: "var(--sidebar-text-active)",
          border: "var(--sidebar-border)",
          item: "var(--sidebar-active-item-bg)",
          hover: "var(--sidebar-hover-bg)",
        },
      },
    },
  },
  plugins: [],
};

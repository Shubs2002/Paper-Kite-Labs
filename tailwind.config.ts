import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        surface: {
          DEFAULT: "#FFFFFF",
          alt: "#F8F8F7",
          dark: "#0D0D0D",
        },
        ink: {
          DEFAULT: "#0D0D0D",
          secondary: "#555555",
          muted: "#999999",
        },
        stroke: {
          DEFAULT: "#E5E5E5",
          hover: "#CCCCCC",
        },
      },
      fontSize: {
        display: [
          "72px",
          { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        "display-sm": [
          "56px",
          { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" },
        ],
        heading: [
          "48px",
          { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "heading-sm": [
          "36px",
          { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" },
        ],
        "card-title": [
          "20px",
          { lineHeight: "1.4", fontWeight: "500" },
        ],
        body: [
          "16px",
          { lineHeight: "1.75", fontWeight: "300" },
        ],
        "body-sm": [
          "14px",
          { lineHeight: "1.8", fontWeight: "300" },
        ],
        label: [
          "11px",
          { lineHeight: "1.4", letterSpacing: "0.1em", fontWeight: "500" },
        ],
      },
      borderRadius: {
        card: "12px",
        button: "8px",
        tag: "4px",
      },
      spacing: {
        section: "120px",
        "section-sm": "80px",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
    },
  },
  plugins: [],
};

export default config;

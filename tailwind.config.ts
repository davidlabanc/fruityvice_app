import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      body: 'linear-gradient(180deg, #100B19 0%, rgba(11,8,16,1))',
      bgSecondary: '#100B19',
      bgPrimary: '#0B0810',
      tableRow: '#1C1529',
      success: '#6CE3B8',
      error: '#E85365',
      bgWhite: '#ffffff'
    },
    letterSpacing: {
      mainHeader: '0.005em',
      headerText: '0.3em'
    },
    minWidth: {
      mainHeader: '24px',
      detailCard: '380px'
    }
  },
  plugins: [],
};
export default config;

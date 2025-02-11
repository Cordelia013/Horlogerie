/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './src/**/*.{html,js,jsx,ts,tsx,vue}',
    './public/**/*.html'
  ],
  theme: {
    fontFamily: {
      Akkordeon: ['AKKORDEON-DEMO', 'sans-serif'],
      Monument: ['PPMonumentExtended-Black-iF6702ae8733ec5', 'sans-serif'],
      montreal: ['ppneuemontreal-thin', 'sans-serif'],
    },
    colors: {
      primary: '#151514',
      secondary_light: '#5a664b',
      secondary: '#3E4733',
      slate: '#f1f5f9',
      gray: '#e5e7eb',
      red: '#ef4444',
      blue: '#2563eb',
      emerald: '#34d399',
      text_Primary: '#fff',
      text_Secondary: '#64E2F1',
      textSlate: '#1e293b',
      textAmber: '#f59e0b',
      textPurple: '#7e22ce',
      blacki:'#00000',
    },
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        'xs': '0.75rem', // 12px
        'sm': '0.875rem', // 14px
        'base': '1rem', // 16px
        'lg': '1.125rem', // 18px
        'xl': '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem', // 36px
        '5xl': '3rem', // 48px
        '6xl': '4rem', // 64px
      },
    },

    plugins: [],
  }

}
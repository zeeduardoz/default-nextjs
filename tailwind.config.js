module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'background-primary': 'var(--background)',
        'background-secondary': 'var(--background-secondary)',

        'hr-color': 'var(--hr-color)',

        'text-color-light': 'var(--text-color-light)',
        'text-color-medium': 'var(--text-color-medium)',
        'text-color-dark': 'var(--text-color-dark)',

        'btn-color-success': 'var(--btn-color-success)',
        'btn-color-info': 'var(--btn-color-info)',
        'btn-color-warning': 'var(--btn-color-warning)',
        'btn-color-danger': 'var(--btn-color-danger)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/custom-forms'),],
}

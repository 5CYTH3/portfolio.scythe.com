module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '4s': 'repeat(4, 1fr)',
        '3s': 'repeat(3, 1fr)',
        '2s': 'repeat(2, 1fr)',
        '1s': 'repeat(1, 1fr)'
      },
      colors: {
        'primary-dark-100': '#272727',
        'primary-dark-90': '#2C2C2C',
        'primary-dark-60': '#747474',
        'primary-dark-10': '#ADADAD',
  
        'secondary-100': '#0075FF',
        'secondary-60': '#60A9FF',
        'secondary-10': '#BEDCFF'
      }
    },
  },
  plugins: [],
}

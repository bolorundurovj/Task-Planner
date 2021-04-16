module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.tsx'],
  },
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito']
      },
      gridTemplateRows: {
        'days': 'repeat(6, minmax(5rem, 1fr))',
        'main': 'auto auto 1fr',
      },
      maxWidth: {
        '90p': '90%',
      }
    },
  },
  variants: {},
  plugins: [],
}

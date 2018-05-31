module.exports = ({ env }) => ({
  plugins: {
    'autoprefixer': { 'browsers': ['> 1%', 'last 3 versions'] },
    // 'cssnano': env === 'production' ? { preset: 'default' } : false
  }
})

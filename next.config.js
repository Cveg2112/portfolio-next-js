module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  exportPathMap: async function ( ) {
    return {
      '/': { page: '/home' },
      '/home': { page: '/home' },
      '/about': { page: '/about' },
      '/portfolio': { page: '/portfolio' },
      '/contact': { page: '/contact' },
    }
  },
  images: {
    domains: ['localhost'],
  },
}

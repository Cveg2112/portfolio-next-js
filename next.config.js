module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['localhost', 'images.prismic.io'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
}

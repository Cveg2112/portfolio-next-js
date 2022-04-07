module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    domains: ['images.prismic.io'],
    deviceSizes: [320, 420, 768, 1024, 1200, 1440, 1920, 2560],
    loader: "custom",
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

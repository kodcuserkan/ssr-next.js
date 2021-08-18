const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async headers() {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'app-id',
            value: String(process.env.NEXT_PUBLIC_DUMMY_API_APP_ID),
          }
        ],
      },
    ]
  },
}

module.exports = {
  siteUrl: 'https://alpha-commercial-cleaning-castle-hill.com.au/',
  generateRobotsTxt: true,
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/_next/static/sitemap.xml',
      },
    ];
  },
};

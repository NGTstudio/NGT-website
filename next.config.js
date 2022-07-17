module.exports = {
  src: './src',
  experimental: {
    images: {
        unoptimized: true
    }
},
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.gg/b3ck8sgcwZ',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/EvoVerses',
        permanent: true,
      },
      {
        source: '/medium',
        destination: 'https://evoverses.medium.com/',
        permanent: true,
      },
      {
        source: '/telegram',
        destination: 'https://t.me/EvoVerses',
        permanent: true,
      },
      {
        source: '/docs',
        destination: 'https://docs.evoverses.com/',
        permanent: true,
      },
      {
        source: '/whitepaper',
        destination: 'https://docs.evoverses.com/',
        permanent: true,
      },
      {
        source: '/reddit',
        destination: 'https://www.reddit.com/r/EvoVerses/',
        permanent: true,
      },
      {
        source: '/app',
        destination: 'https://beta.evoverses.com',
        permanent: true
      },
      {
        source: '/beta',
        destination: 'https://beta.evoverses.com',
        permanent: true
      }
    ];
  },
};

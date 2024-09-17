const isProd = process.env.NODE_ENV === 'production';
const repoName = 'Protfolio-Next-app'; // Update with your GitHub repository name

module.exports = {
  assetPrefix: isProd ? `/${Protfolio-Next-app}/` : '',
  images: {
    unoptimized: true,
  },
  output: 'export',
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['jsr-dev-portfolio.s3.eu-north-1.amazonaws.com'],
  },

  webpack: (config, { isServer }) => {
    // Exclude source maps for chrome-aws-lambda
    config.module.rules.push({
      test: /\.map$/,
      type: 'javascript/auto',
      use: 'ignore-loader'
    });

    // Only enable Puppeteer on server-side
    if (!isServer) {
      config.resolve.alias['chrome-aws-lambda'] = false;
      config.resolve.alias['puppeteer-core'] = false;
    }

    return config;
  },
  // Required for serverless deployments
  experimental: {
    serverComponentsExternalPackages: ['chrome-aws-lambda', 'puppeteer-core'],
  }
};

export default nextConfig;

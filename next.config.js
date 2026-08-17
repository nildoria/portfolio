module.exports = {
  images: {
    remotePatterns: [
      // Blog featured images. This is the only remote host the site loads
      // from — the template's Cloudinary and dev.to entries were unused.
      {
        protocol: 'https',
        hostname: 'wpkiddie.com',
        pathname: '**',
      },
    ],
  },
}

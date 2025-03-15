module.exports = ({ env }) => ({
    upload: {
      config: {
        sizeLimit: 5000000, // 5MB (move it here instead of providerOptions)
        mimeTypes: [
          "image/svg+xml", // Allow SVG files
          "image/jpeg",
          "image/png",
          "image/gif",
        ],
      },
    },
  });
  
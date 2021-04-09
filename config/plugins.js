module.exports = ({ env }) => ({
    // ...
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'), // coder007 env('CLOUDINARY_NAME')
        api_key: env('CLOUDINARY_KEY'), // 166624755962755 env('CLOUDINARY_KEY')
        api_secret: env('CLOUDINARY_SECRET'), // env('CLOUDINARY_SECRET')
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
    // ...
});
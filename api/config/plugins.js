module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      endpoint: env('DO_SPACE_ENDPOINT'),
      accessKeyId: env('DO_SPACE_KEY'),
      secretAccessKey: env('DO_SPACE_SECRET'),
      params: {
        Bucket: env('DO_SPACE_NAME'),
      },
    },
  },
  sentry: {
    dsn: env('SENTRY_DSN'),
    init: {
      release: env('SENTRY_RELEASE')
    }
  }
});

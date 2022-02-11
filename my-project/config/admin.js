module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5e07b42b5ec5b2ce9aaa614b475187be'),
  },
});

export function LoggerMiddleware(req, res, next) {
  console.log(`Global Logger Request...`);
  next();
};
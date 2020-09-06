const auth = require ('../external-services/firebase/auth');

async function authMiddleware (req, res, next) {
  try {
    // Bearer token
    const { authorization = '' } = req.headers;
    const [, token] = authorization.split(' '); //  ['bearer', 'token']
    const decodedToken = await auth.verifyToken(token);
    console.log(decodedToken, 'decoded token');
    req.locals = { email: decodedToken.email }; // записали имейл в объект реквеста
    return next();
  } catch (error) {
    return res.status(401).send(error);
  }
}
module.exports = authMiddleware;
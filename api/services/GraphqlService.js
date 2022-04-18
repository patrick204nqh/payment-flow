module.exports = {
    setGqlContext: setGqlContext
}

function setGqlContext(req) {
  let token = getTokenFromHeader(req);
  let currentUser = AuthService.authJwtToken(token);
  return { currentUser };
}

function getTokenFromHeader(req) {
  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    return req.headers.authorization.split(' ')[1];
  }
  return null;
}

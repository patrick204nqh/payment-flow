module.exports = {
  signup: async function({username, email, password}) {
    try {
      passwordHashed = setHashPassword(password);
      newUser = await User.create({username, email, encryptedPassword: passwordHashed}).fetch();
      return {
        user: newUser,
        jwt: generateJwtToken(newUser.id)
      }
    } catch (e) {
      return e;
    }
  },
  signin: async function({username, email, password}) {
    try {
      var currentUser = null;
      if (username) {
        currentUser = await User.findOne({username});
      } else if (email) {
        currentUser = await User.findOne({email});
      }
      if (currentUser && checkHashPassword(password, currentUser.encryptedPassword)) {
        return {
          user: currentUser,
          jwt: generateJwtToken(currentUser.id)
        }
      } else {
        return null
      }
    } catch (e) {
      return e;
    }
  },
  authJwtToken: authJwtToken,
  signout: function({user}) {
    // code here...
  },
  // forgotPassword: function({email}) {},
  // resetPassword: function({token, newPassword}) {},
  // changePassword: function({user, oldPassword, newPassword}) {},
  // changeEmail: function({user, newEmail}) {},
  // sendVerifyEmail: function({email}) {},
  // verifyEmail: function({token}) {},
}

function setHashPassword(password) {
  const crypto = require('crypto');
  const secret = 'PTK';
  const sha256Hasher = crypto.createHmac('sha256', secret);
  return sha256Hasher.update(password).digest("hex");
}

function checkHashPassword(password, hash) {
  return hash == setHashPassword(password);
}

function generateJwtToken(user_id) {
  const jwt = require('jsonwebtoken');
  const secret = 'PTK';
  return jwt.sign({ user_id: user_id }, secret, { algorithm: 'HS256'});
}

function authJwtToken(token) {
  const jwt = require('jsonwebtoken');
  const secret = 'PTK';
  return jwt.verify(token, secret, { algorithms: ['HS256'] }, async function(err, { user_id }) {
    if (err) {
      return null;
    } else {
      return await User.findOne(user_id);
    }
  });
}

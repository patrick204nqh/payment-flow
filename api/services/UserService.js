module.exports = {
  signup: async function({username, email, password}) {
    try {
      passwordHashed = setHashPassword(password);
      return await User.create({username, email, encryptedPassword: passwordHashed}).fetch();
    } catch (e) {
      return null
    }
  },
  signin: function({username, email, password}) {
    // code here...
  },
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

function checkHashPassword(hash, password) {
  return hash == setHashPassword(password);
}

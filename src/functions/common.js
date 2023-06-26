const bcrypt = require('bcrypt');


exports.checkValidEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

exports.comparePasswords = async (enteredPassword, storedHashedPassword) => {

  try {
    const match = await bcrypt.compare(enteredPassword, storedHashedPassword);

    return match;
  } catch (error) {
    throw new Error('Error while comparing passwords');
  }
};

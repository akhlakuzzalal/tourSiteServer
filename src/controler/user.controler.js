const { ERROR, OK } = require("../utils/responseHelper");
const UserService = require("../service/userService");

exports.createUser = async (req, res) => {
  try {
    const user = await UserService.createUser(req.body);
    if (user.message) return ERROR(res, [], user.message);
    return OK(res, user, "User created Successfully");
  } catch (err) {
    ERROR(res, [], "Error while creating user");
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await UserService.getUserByEmail(req.params.email);
    if (!Boolean(user.length)) return ERROR(res, [], "User not found");
    return OK(res, user, "User found Successfully");
  } catch (err) {
    ERROR(res, [], "Error while getting user");
  }
};

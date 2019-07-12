const Action = require("../data/helpers/actionModel");
const { ErrorHandler } = require("../helpers");
//get all actions
const getAllActions = async (req, res, next) => {
  try {
    const actions = await Action.get();
    if (actions.length) {
      res.status(200).json({
        status: "OK",
        actions
      });
    } else {
      throw new ErrorHandler(404, "No Actions found in the database");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllActions
};

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

const createNewAction = async (req, res, next) => {
  try {
    req.body.project_id = req.project.id
    const action = await Action.insert(req.body);
    if(action) {
      return res.status(201).json({
        status: 'OK',
        action
      })
    } else {
      throw new ErrorHandler(500, 'Error occurred trying to save action')
    }
  } catch (error) {
    next(error)
  }
}


module.exports = {
  getAllActions,
  createNewAction 
};

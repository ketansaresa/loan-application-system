import Application from '../models/application.model.js';

/* Create new application */
const create = async (data) => {
  return Application.create(data);
};

export {
  create
};

const CategoriesServices = require('../services/categories.service');
const HTTPStatus = require('../helpers/HTTP.status');

const getCategories = async (req, res) => {
  const response = await CategoriesServices.getCategories();
  return res.status(HTTPStatus.OK).json(response);
}

const getOneCategory = async (req, res) => {
  const { id } = req.params;
  const response = await CategoriesServices.getOneCategory(id);

  return res.status(HTTPStatus.OK).json(response);
}

const createCategory = async (req, res) => {
  const payload = req.body;
  const response = await CategoriesServices.createCategory(payload);

  return res.status(HTTPStatus.CREATED).json(response);
}

const updateCategory = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const response = await CategoriesServices.updateCategory(id, payload);

  return res.status(HTTPStatus.OK).json(response);
}

const updateCategoryStatus = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const response = await CategoriesServices.updateCategoryStatus(id, payload);

  return res.status(HTTPStatus.OK).json(response);
}

const deleteCategory = async (req, res) => {
  const { id } = req.params;
  await CategoriesServices.deleteCategory(id);

  return res.status(HTTPStatus.NO_CONTENT).end();
}

module.exports = {
  getCategories,
  getOneCategory,
  createCategory,
  updateCategory,
  updateCategoryStatus,
  deleteCategory,
}

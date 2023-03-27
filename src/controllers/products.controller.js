const ProductsServices = require('../services/products.service');
const HTTPStatus = require('../helpers/HTTP.status');

const getProducts = async (req, res) => {
  const response = await ProductsServices.getProducts();
  return res.status(HTTPStatus.OK).json(response);
}

const getOneProduct = async (req, res) => {
  const { id } = req.params;
  const response = await ProductsServices.getOneProduct(id);

  return res.status(HTTPStatus.OK).json(response);
}

const createProduct = async (req, res) => {
  const payload = req.body;
  const response = await ProductsServices.createProduct(payload);

  return res.status(HTTPStatus.CREATED).json(response);
}

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const payload = req.body;

  const response = await ProductsServices.updateProduct(id, payload);

  return res.status(HTTPStatus.OK).json(response);
}

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  await ProductsServices.deleteProduct(id);

  return res.status(HTTPStatus.NO_CONTENT).end();
}

module.exports = {
  getProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
}

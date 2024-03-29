import axios from "axios";

export const FetchProductList = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/products`
  );
  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/products/${id}`
  );

  return data;
};

export const CategoryTerlik = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/products`
  );
  const terlikData = data.filter((item) => item.category === 1);

  return terlikData;
};

export const CategoryBot = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/products`
  );
  const botData = data.filter((item) => item.category === 2);
  return botData;
};

export const CategorySporAyakkabi = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/products`
  );
  const sporAyakkabiData = data.filter((item) => item.category === 3);

  return sporAyakkabiData;
};

export const ClassicAyakkabi = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/products`
  );
  const ClassicAyakkabiData = data.filter((item) => item.category === 4);

  return ClassicAyakkabiData;
};

export const fetchMe = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users`
  );
  return data;
};

export const getAllUsers = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users`
  );
  return data;
};

export const EmailControl = async (email) => {
  const data = await getAllUsers();
  return data.find((item) => item.email === email);
};

export const PasswordControl = async (password) => {
  const data = await getAllUsers();
  return data.find((item) => item.password === password);
};

export const fetchRegister = async (input) => {
  const data = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users`,
    input
  );
  return data;
};

export const fetchLogin = async (email) => {
  const allUser = await getAllUsers();
  const user = allUser.find((item) => item.email === email);

  return user;
};

export const fetchLogout = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/users`
  );

  return data;
};

export const fetchOrder = async (adress, userName, basket) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/orders`,
    adress,
    userName,
    basket
  );

  return data;
};

export const GetAllOrders = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/orders`
  );

  return data;
};

export const deleteProduct = async (product_id) => {
  const { data } = await axios.delete(
    `${process.env.REACT_APP_BASE_ENDPOINT}/products/${product_id}`
  );

  return data;
};

export const updateProduct = async (input, product_id) => {
  const { data } = await axios.put(
    `${process.env.REACT_APP_BASE_ENDPOINT}/products/${product_id}`,
    input
  );

  return data;
};

export const postProduct = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/products/`,
    input
  );

  return data;
};

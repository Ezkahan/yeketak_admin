import api from "common/config/api.service";

export const getMarkets = (page, searchTerm) => {
  return api.get(`markets?page=${page}&search=${searchTerm}`);
};

export const editMarket = (market) => {
  return api.put(`markets/${market.id}`, market);
};

export const showMarket = (id) => {
  return api.get(`markets/${id}`);
};

export const getMarketImages = (id, page) => {
  return api.get(`markets/${id}/images?page=${page}`);
};

export const deleteMarket = (id) => {
  return api.delete(`markets/${id}`);
};

export const updateMarketImage = (image) => {
  return api.put(`markets/image/${image.id}`, image);
};

export const deleteMarketImage = (id) => {
  return api.delete(`markets/image/${id}`);
};

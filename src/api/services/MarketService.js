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

export const deleteMarket = (id) => {
  return api.delete(`markets/${id}`);
};

export const deleteMarketImage = (id) => {
  return api.delete(`markets/${id}/image`);
};

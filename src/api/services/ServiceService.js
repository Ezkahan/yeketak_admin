import api from "common/config/api.service";

export const getServices = () => {
  return api.get(`services`);
};

export const editService = (service) => {
  return api.put(`services/${service.id}`, service);
};

export const showService = (id) => {
  return api.get(`services/${id}`);
};

export const getServiceImages = (id, page) => {
  return api.get(`services/${id}/images?page=${page}`);
};

export const deleteService = (id) => {
  return api.delete(`services/${id}`);
};

export const updateServiceImage = (image) => {
  return api.put(`services/image/${image.id}`, image);
};

export const deleteServiceImage = (id) => {
  return api.delete(`services/image/${id}`);
};

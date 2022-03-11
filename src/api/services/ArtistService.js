import api from "common/config/api.service";

export const getArtists = (page, searchTerm) => {
  return api.get(`artists?page=${page}&search=${searchTerm}`);
};

export const deleteArtist = (slug) => {
  return api.delete(`artists/${slug}`);
};

export const editArtist = (artist) => {
  return api.put(`artists/${artist.id}`, artist);
};

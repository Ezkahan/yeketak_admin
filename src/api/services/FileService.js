import api from "common/config/api.service"


export const getFiles = (page, searchTerm) => {
    return api.get(`files?page=${page}&search=${searchTerm}`)
}

export const getUncheckedFiles = () => {
    return api.get("files/new/unchecked")
}

export const getFile = (slug) => {
    return api.get(`files/${slug}`)
}

export const deleteFile = (slug) => {
    return api.delete(`files/${slug}`)
}
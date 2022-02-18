import api from "common/config/api.service"


export const getFiles = (page) => {
    return api.get(`files?page=${page}`)
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
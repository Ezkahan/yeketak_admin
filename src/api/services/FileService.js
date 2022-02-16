import api from "common/config/api.service"


export const getFiles = (page) => {
    return api.get(`files?page=${page}`)
}

export const getFile = (slug) => {
    return api.get(`file/${slug}`)
}
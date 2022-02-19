import api from "common/config/api.service"

export const getUsers = (page) => {
    return api.get(`users?page=${page}`)
}
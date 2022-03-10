import api from "common/config/api.service"

export const getUsers = (page, searchTerm) => {
    return api.get(`users?page=${page}&search=${searchTerm}`)
}

export const deleteUser = (id) => {
    return api.delete(`users/${id}`)
}
export const editUser = (user) => {
    return api.put(`users/${user.id}`, user)
}
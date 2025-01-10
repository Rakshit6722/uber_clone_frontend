const BASE_URL = import.meta.env.VITE_BASE_URL

export const userApi = {
    login: `${BASE_URL}/users/login`,
    register: `${BASE_URL}/users/register`,
    logout: `${BASE_URL}/users/logout`,
}

export const captainApi = {
    register: `${BASE_URL}/captains/register`,
    login: `${BASE_URL}/captains/login`,
    logout: `${BASE_URL}/captains/logout`,
}

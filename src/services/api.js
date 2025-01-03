const BASE_URL = import.meta.env.VITE_BASE_URL

export const userApi = {
    login: `${BASE_URL}/users/login`,
    register: `${BASE_URL}/users/register`,
}

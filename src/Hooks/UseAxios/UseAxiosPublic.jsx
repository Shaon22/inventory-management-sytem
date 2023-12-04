import axios from 'axios'
export const axiosPublic=axios.create({
    baseURL:'https://inventory-management-server-ten.vercel.app'
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;
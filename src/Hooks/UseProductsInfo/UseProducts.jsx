import { useQuery } from "@tanstack/react-query";
import useAuth from "../UseAuth/UseAuth";
import useAxiosPublic from "../UseAxios/UseAxiosPublic";

const UseProducts = () => {
    const axiosPublic=useAxiosPublic()
    const {user}=useAuth()
    const {refetch, data: productInfo = [] } = useQuery({
        queryKey: ['shops',user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/products?email=${user.email}`)
            return res.data
        }
    })
    return [productInfo,refetch]
};

export default UseProducts;
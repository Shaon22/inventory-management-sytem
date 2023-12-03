import { useQuery } from "@tanstack/react-query";
import useAuth from "../UseAuth/UseAuth";
import useAxiosPublic from "../UseAxios/UseAxiosPublic";

const UseManager = () => {
    const {user}=useAuth()
    const axiosPublic=useAxiosPublic()
    const {data:isManager}=useQuery({
        queryKey:[user?.email,'isManager'],
        queryFn:async()=>{
            const res= await axiosPublic.get(`/user/manager/${user.email}`)
            return res.data?.manager
        }
    })
    return [isManager]
};

export default UseManager;
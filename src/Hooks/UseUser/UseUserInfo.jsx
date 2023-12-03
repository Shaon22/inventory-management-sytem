import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../UseAxios/UseAxiosPublic";
import useAuth from "../UseAuth/UseAuth";

const UseUserInfo = () => {

    const axiosPublic = useAxiosPublic()
    const {user,loading}=useAuth()
    if(loading){
        <span className="loading loading-ring loading-lg"></span>
    }
    const { data: userInfo = [] } = useQuery({
        queryKey: ['users',user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users?email=${user.email}`)
            return res.data
        }
    })
    return [userInfo]
};

export default UseUserInfo;
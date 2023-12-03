import useAxiosPublic from '../UseAxios/UseAxiosPublic';
import useAuth from '../UseAuth/UseAuth';
import { useQuery } from '@tanstack/react-query';

const UsecheckOut = () => {
    const axiosPublic = useAxiosPublic()
    const {user,loading}=useAuth()
    if(loading){
        <span className="loading loading-ring loading-lg"></span>
    }
    const { data: checkOutInfo = [] } = useQuery({
        queryKey: ['checkOuts',user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/checkOuts?email=${user.email}`)
            return res.data
        }
    })
    return [checkOutInfo]
};

export default UsecheckOut;
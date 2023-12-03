import { Navigate} from "react-router-dom";
import useAuth from "../../Hooks/UseAuth/UseAuth";

const PrivateRoute = ({children}) => {
const{user,loading}=useAuth()
console.log(user)

if(loading){
    return <span className="loading loading-spinner text-success"></span>
}
if(user){
    return children;
}

    return <Navigate  to={'/login'}></Navigate>
};

export default PrivateRoute;
import { useContext } from "react";
import { myContext } from "../../Provider/AuthProvider";

const useAuth = () => {
   const auth=useContext(myContext)
   return auth
};

export default useAuth;
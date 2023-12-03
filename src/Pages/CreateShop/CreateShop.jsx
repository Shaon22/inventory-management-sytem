import UseUserInfo from "../../Hooks/UseUser/UseUserInfo";
import CreateShopForm from "./CreateShopForm";

const CreateShop = () => {
   
    const[userInfo]=UseUserInfo()
   
    console.log(userInfo)
    return (
        <div>
            {
                userInfo.map(item=><CreateShopForm item={item} key={item._id}></CreateShopForm>)
            }
            
        </div>
    );
};

export default CreateShop;
import UseUserInfo from "../../Hooks/UseUser/UseUserInfo";
import AddProductForm from "./AddProductForm";
const AddProduct = () => { 
    const [userInfo]=UseUserInfo()
    
    return (
       
        <div>
 

           {
            userInfo.map(item=><AddProductForm item={item} key={item._id}></AddProductForm>)
           }
        </div>
    );
};

export default AddProduct;
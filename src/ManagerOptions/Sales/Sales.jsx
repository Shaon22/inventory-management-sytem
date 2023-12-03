import useAuth from "../../Hooks/UseAuth/UseAuth";
import useAxiosPublic from "../../Hooks/UseAxios/UseAxiosPublic";
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const Sales = ({ item,index }) => {
    console.log(item)
    const { _id, productName,productImage,quantity,discount,sellingPrice } = item
    const axiosPublic=useAxiosPublic()
    const {user}=useAuth()
    const handleAdd=id=>{
console.log(id)
const checkOutInfo={
    id,productName,productImage,quantity,discount,sellingPrice,email:user.email
}
console.log(checkOutInfo)
axiosPublic.post('/checkOuts',checkOutInfo)
.then(res=>{
    console.log(res.data)
    if(res.data.insertedId){
        toast('Added for checkout successfully!!!')
    }
})
    }
 return (
       
            <tr>
              <th>{index+1}</th>
              <td>{_id}</td>
              <td>{productName}</td>
              <td>{productImage}</td>
              <td>{quantity}</td>
              <td>{discount}</td>
              <td>{sellingPrice}</td>
              <td><button onClick={()=>handleAdd(_id)}>Add to Checkout</button></td>
              <ToastContainer />
            </tr>
    );
};

export default Sales;

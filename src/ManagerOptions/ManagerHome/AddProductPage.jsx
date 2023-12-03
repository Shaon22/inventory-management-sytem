import { Link, useNavigate } from "react-router-dom";
import UseProducts from "../../Hooks/UseProductsInfo/UseProducts";
import Swal from "sweetalert2";

const AddProductPage = () => {
    const [productInfo]=UseProducts()
    const navigate=useNavigate()
    const handleAddError=()=>{
        if(productInfo.length >=3){
            Swal.fire({
                position: "top",
                icon: "error",
                title: "You cant add",
                showConfirmButton: false,
                timer: 1500
            })
            return navigate('/dashboard/subscriptions')
        }
        navigate('/dashboard/addProducts')
    }
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-20">Add Products</h1>
        {productInfo.length===0?
        <>
         <div className="border boerder-2 p-3 m-5 w-[50%] mx-auto text-center">
           <Link > <button onClick={handleAddError} className="btn btn-sm bg-cyan-400">Add Product</button> </Link>
           </div>
         </>:
           <>
           <div className="border boerder-2 p-3 m-5 w-[50%] mx-auto flex justify-between">
           <h1>Total products {productInfo.length} </h1>
           <Link > <button onClick={handleAddError} className="btn btn-sm bg-cyan-400">Add Product</button> </Link>
           </div>
           </>
         
        }
   </div>
    );
};

export default AddProductPage;

import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/UseAxios/UseAxiosPublic";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import moment from "moment/moment";
import UseProducts from "../../Hooks/UseProductsInfo/UseProducts";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddProduct = ({item}) => {
    const [productInfo,refetch]=UseProducts()
    console.log(productInfo)
    const navigate=useNavigate()
    const addingDate=moment().format('MMMM Do YYYY, h:mm:ss a');
    const {shopId,shopName}=item
    const axiosPublic=useAxiosPublic()
    const {user}=useAuth()
    const { register, handleSubmit,reset, formState: { errors }, } = useForm()

    const onSubmit = data => {
        
        const sellingPrice=Math.round(data.productionCost+(0.075 * data.productionCost)+data.profitMargin)
        const productInformations={
            productName:data.productName,
            productImage:data.productImage,
            quantity:data.quantity,
            location:data.location,
            productionCost:data.productionCost,
            profitMargin:data.profitMargin,
            discount:data.discount,
            description:data.description,
            email:user.email,
            shopId,
            shopName,
            sellingPrice,
            addingDate,
            salecount:'0'
}
console.log(productInformations)
console.log(productInfo.length)
refetch()
if(productInfo.length >=3){
     Swal.fire({
        position: "top",
        icon: "error",
        title: "You cant add",
        showConfirmButton: false,
        timer: 1500
      });  
      return navigate('/dashboard/subscriptions')
}
    
    
      
       axiosPublic.post('/products',productInformations)
       .then(res=>{
        console.log(res.data)
        reset() 
        refetch()
        Swal.fire({
            position: "top",
            icon: "success",
            title: "Product Added",
            showConfirmButton: false,
            timer: 1500
          });
       }) 
      
      
    }
    return (
        <div className="p-20 w-[80%] mx-auto">
            <h1 className="text-2xl font-bold text-center mb-20">Add Products</h1>
            <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

                <div>
                    <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="text" {...register("productName", { required: true })} id="" placeholder='Product Name' />
                    {errors.productName && <span>This field is required</span>}
                </div>

                <div>
                    <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="text" {...register("productImage", { required: true })} id="" placeholder='Product Image' />
                    {errors.productImage && <span>This field is required</span>}
                </div>
                <div>

                    <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="text" {...register("quantity", { required: true })} id="" placeholder='Quantity' />
                    {errors.quantity && <span>This field is required</span>}

                </div>
               <div>
               <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="text" {...register("location", { required: true })}  id="" placeholder='Location' />
                {errors.location && <span>This field is required</span>}
               </div>
               
               <div>
               <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="text" {...register("productionCost", { required: true })}  id="" placeholder='Production Cost' />
                {errors.productionCost && <span>This field is required</span>}
               </div>
               <div>
               <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="text" {...register("discount", { required: true })}  id="" placeholder='Discount(%)' />
                {errors.discount && <span>This field is required</span>}
               </div>
               
               <div>
               <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="text" {...register("profitMargin", { required: true })}  id="" placeholder='Profit Margin (%)' />
                {errors.profitMargin && <span>This field is required</span>}
               </div>
               
               <div>

               <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="text" {...register("description", { required: true })}  id="" placeholder='Description' />
                {errors.description && <span>This field is required</span>}
               </div>
                <button className='btn w-full text-white bg-cyan-400 '>Add Product</button>

            </form>
        </div>
    );
};

export default AddProduct;
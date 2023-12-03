import { Navigate, useLoaderData, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/UseAxios/UseAxiosPublic";
import Swal from "sweetalert2";
import UseProducts from "../../Hooks/UseProductsInfo/UseProducts";

const UpdateProducts = () => {
    const [,refetch]=UseProducts()
   const axiosPublic=useAxiosPublic()
   const navigate=useNavigate()
    const product=useLoaderData()
    const{_id,productName,productImage,quantity,productionCost,discount,profitMargin,description,location}=product
    
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = data => {
        const updatedInfo = {
            productName: data.productName,
            productImage: data.productImage,
            quantity: data.quantity,
            location: data.location,
            productionCost: data.productionCost,
            profitMargin: data.profitMargin,
            discount: data.discount,
            description: data.description,
        }
        console.log(updatedInfo)
axiosPublic.patch(`/update/products/${_id}`,updatedInfo)
.then(res=>{
    if(res.data.modifiedCount>0){
        refetch()
    Swal.fire({
        position: "top",
        icon: "success",
        title: "Product Info Updated",
        showConfirmButton: false,
        timer: 1500
      }); 
      navigate('/dashboard/allProducts')
    }
   
})
    }
    return (
        <div>
            <div className="p-20 w-[80%] mx-auto">
                <h1 className="text-2xl font-bold text-center mb-20">Update Products</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>

                    <div>
                        <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="text" {...register("productName", { required: true })} id="" placeholder='Product Name' defaultValue={productName} />
                        {errors.name && <span>This field is required</span>}
                    </div>

                    <div>
                        <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="text" {...register("productImage", { required: true })} id="" placeholder='Product Image' defaultValue={productImage} />
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div>

                        <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="text" {...register("quantity", { required: true })} id="" placeholder='Quantity' defaultValue={quantity} />
                        {errors.password && <span>This field is required</span>}

                    </div>
                    <div>
                        <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="text" {...register("location", { required: true })} id="" placeholder='Location' defaultValue={location} />
                        {errors.photoURL && <span>This field is required</span>}
                    </div>

                    <div>
                        <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="text" {...register("productionCost", { required: true })} id="" placeholder='Production Cost' defaultValue={productionCost} />
                        {errors.photoURL && <span>This field is required</span>}
                    </div>

                    <div>
                        <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="text" {...register("profitMargin", { required: true })} id="" placeholder='Profit Margin (%)' defaultValue={profitMargin} />
                        {errors.photoURL && <span>This field is required</span>}
                    </div>
                    <div>
                        <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="text" {...register("discount", { required: true })} id="" placeholder='Discount (%)' defaultValue={discount} />
                        {errors.photoURL && <span>This field is required</span>}
                    </div>

                    <div>

                        <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="text" {...register("description", { required: true })} id="" placeholder='Description' defaultValue={description} />
                        {errors.photoURL && <span>This field is required</span>}
                    </div>
                    <button className='btn w-full text-white bg-cyan-400 '>Update</button>

                </form>
            </div>
        </div>

    );
};

export default UpdateProducts;
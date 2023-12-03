import { Link } from "react-router-dom";
import UseProducts from "../../Hooks/UseProductsInfo/UseProducts";
import useAxiosPublic from "../../Hooks/UseAxios/UseAxiosPublic";
import Swal from "sweetalert2";
import { RiDeleteBin5Line } from "react-icons/ri";

const AllProducts = () => {
    const [productInfo, refetch] = UseProducts()
    const axiosPublic = useAxiosPublic()
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.delete(`/products/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
console.log(productInfo)
    return (
        <div>
            <h1 className="text-4xl text-bold text-center mt-5">All Products</h1>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Quantity</th>
                            <th>Sales</th>
                            <tr className="flex justify-center">
                                <th >actions</th>
                            </tr>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            productInfo.map((item,index) =>
                                <tr key={item._id}>
                                    <th>{index+1}</th>
                                    <td><img className="w-[100px]" src={item.productImage} alt="" /></td>
                                    <td>{item.productName}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.salecount}</td>
                                    <td><button onClick={() => handleDelete(item._id)}><RiDeleteBin5Line  className="text-xl text-red-600"/></button></td>
                                    <td><Link  to={`/dashboard/updateProducts/${item?._id}`}>Update</Link></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;
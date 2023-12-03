import useAxiosPublic from "../../Hooks/UseAxios/UseAxiosPublic";
import UsecheckOut from "../../Hooks/useCheckOut/UsecheckOut";
import useAuth from "../../Hooks/UseAuth/UseAuth";

const CheckOut = () => {
    const [checkOutInfo]=UsecheckOut()
    const axiosPublic=useAxiosPublic()
    const {user}=useAuth()
    const email=user.email
    console.log(checkOutInfo)
    const handleGetPaid=(email)=>{
axiosPublic.delete(`/checkOuts/delete/${email}`)
.then(res=>{
    console.log(res.data)
})
    }
    return (
        <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Id</th>
              <th>Product Name</th>
              <th>Product productImage</th>
              <th>Quantity</th>
              <th>Discount</th>
              <th>Selling Price</th>


            </tr>
          </thead>
          <tbody>
            {
                checkOutInfo.map((item,index)=>
                  <tr key={item._id}>
              <th>{index+1}</th>
              <td>{item._id}</td>
              <td>{item.productName}</td>
              <td>{item.productImage}</td>
              <td>{item.quantity}</td>
              <td>{item.discount}</td>
              <td>{item.sellingPrice}</td>
            </tr>  
                    )
            }
            
          </tbody>
        </table>
       <div className="text-center my-10">
       <button  className="btn btn-sm bg-cyan-400 " onClick={()=>handleGetPaid(email)}>Get Paid</button>
       </div>
      </div>
    );
};

export default CheckOut;
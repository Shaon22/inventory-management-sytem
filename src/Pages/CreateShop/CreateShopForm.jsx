import Swal from "sweetalert2";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import useAxiosPublic from "../../Hooks/UseAxios/UseAxiosPublic";
// import { useNavigate } from "react-router-dom";
// import UseUserInfo from "../../Hooks/UseUser/UseUserInfo";

const CreateShopForm = ({item}) => {
    const{_id}=item
    const {user,loading}=useAuth()
    if(loading){
        <span className="loading loading-ring loading-lg"></span>
    }
    const axiosPublic=useAxiosPublic()
    // const navigate=useNavigate()

    const handleCreateShop = event => {
        event.preventDefault()
        const form = event.target;
        const shopName = form.shopName.value
        const shopLogo = form.shopLogo.value
        const ownerName = form.ownerName.value
        const location = form.location.value
        const email = form.email.value
        const shopDes = form.shopDes.value

        const shopInfo = {
            shopName, shopLogo, ownerName, email, shopDes, location, limit: 3
        }
        console.log(shopInfo)

        axiosPublic.post('/shops', shopInfo)
            .then(res => {
                console.log(res.data)
                if(res.data.insertedId===null){
                    Swal.fire({
                        position: "top",
                        icon: "error",
                        title: "You already have a shop",
                        showConfirmButton: false,
                        timer: 1500
                    });  
                }
                if (res.data.insertedId) {
                    form.reset()
                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Shop Created successfull,ReLoad to Get Dashboard Option",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    
                    const extraInfo = {
                        shopId: res.data.insertedId,
                        user_role: "shop_manager",
                        shopName,
                        shopLogo
                    }
                    console.log(extraInfo)
                    axiosPublic.patch(`/users/${_id}`,extraInfo)
                    .then(res=>{
                        console.log(res.data)
                    })
                }
               

            })

    }
    return (
        <div className="">
        <h1 className="text-4xl font-bold text-center  my-5">Create Shop</h1>

        <div className="w-[80%] mx-auto p-10">
            <form onSubmit={handleCreateShop} className="grid grid-cols-2 gap-5 ">
                <input className="rounded outline-none border-b-2 focus:border-cyan-400 p-2" type="text" name="shopName" placeholder="Shop Name" id="" />

                <input className="rounded outline-none border-b-2 focus:border-cyan-400 p-2" type="text" name="shopLogo" placeholder="Shop Logo URL" id="" />

                <input className="rounded outline-none border-b-2 focus:border-cyan-400 p-2" type="text" name="ownerName" placeholder="Your Name" value={user?.displayName} id="" />

                <input className="rounded outline-none border-b-2 focus:border-cyan-400 p-2" type="text" name="email" placeholder="Email" value={user?.email}  id="" />

                <input className="rounded outline-none border-b-2 focus:border-cyan-400 p-2" type="text" name="location" placeholder="Shop Location" id="" />

                <textarea className="rounded focus:border-cyan-400 outline-none border-b-2 col-span-2 p-2 " name="shopDes" placeholder="Shop Description" id="" cols="30" rows="10"></textarea>

                <input className="w-full rounded text-white bg-cyan-400 p-3 col-span-2" type="submit" value="Create Shop
" />
            </form>
        </div>
    </div>
    );
};

export default CreateShopForm;
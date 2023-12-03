import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import useAxiosPublic from "../../Hooks/UseAxios/UseAxiosPublic";
import Swal from "sweetalert2";
const Register = () => {
    const axiosPublic=useAxiosPublic()
    const navigate=useNavigate()
    const {register,handleSubmit,reset ,formState: { errors },} = useForm()

    const {createUser,updateUserProfile}=useAuth()
    const onSubmit=data=>{

        createUser(data.email,data.password)
        .then(result=>{
            const registeredUser=result.user
            console.log(registeredUser)
            updateUserProfile(data.name,data.photoURL)
            .then(()=>{
                console.log('updated')
                const userInfo={
                    name:data.name,
                    email:data.email,
                }
                console.log(userInfo)
                axiosPublic.post('/users',userInfo)
                .then(res=>{
                    if(res.data.insertedId){
                       Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Registration Successfull",
                        showConfirmButton: false,
                        timer: 1500
                      });  
                    }
                   navigate('/')
                })
            })
            reset()
        })
        console.log(data)
    }
    return (
        <div className='flex mb-28 flex-col lg:flex-row h-screen'>
        <div className='w-[80%] mx-auto lg:w-[50%] mt-16 '>
            <h1 className="text-2xl font-bold text-center text-orange-500 my-5">Register your account</h1>
            <div className='w-full lg:w-[50%] mx-auto '>
                <form onSubmit={handleSubmit(onSubmit)}  className='space-y-5'>
                    
                    <input className='block w-full rounded outline-none border-b-2 focus:border-orange-500 p-2' type="text" {...register("name",{ required: true })} name="name" id="" placeholder='Name' />
                    {errors.name && <span>This field is required</span>}
                    
                    <input className='block w-full rounded outline-none border-b-2 focus:border-orange-500 p-2' type="email" {...register("email",{ required: true })} name="email" id="" placeholder='Email'  />
                    {errors.email && <span>This field is required</span>}

                    <input className='block w-full rounded outline-none border-b-2 focus:border-orange-500 p-2' type="password" {...register("password",{ required: true })} name="password" id="" placeholder='Password'  />
                    {errors.password && <span>This field is required</span>}
                    
                    <input className='block w-full rounded outline-none border-b-2 focus:border-orange-500 p-2' type="text" {...register("photoURL",{ required: true })} name="photoURL" id="" placeholder='Profile Picture URL'  />
                    {errors.photoURL && <span>This field is required</span>}
                    
                    <button className='btn w-full text-white bg-orange-500 '>Register</button>
                    
                </form>
                </div>
                
                <h1 className="font-medium text-center mt-3">Do not have account ? <Link className="text-blue-500 font-semibold" to={'/login'}>log In</Link> </h1>
                
        </div>
        <div className='w-[80%] mx-auto lg:w-[50%] mt-10'>
            <img className="lg:pr-5" src="https://i.ibb.co/4Z4Rmc7/User-Registration-1-7-0-New-Field-Icons-Multi-Part-and-Style-Customizer-Add-ons.png" alt="" />
        </div>

    </div>
    );
};

export default Register;
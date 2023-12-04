import { FcGoogle, FcHome } from "react-icons/fc";
import { FiLogIn } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/UseAuth/UseAuth";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/UseAxios/UseAxiosPublic";
const Login = () => {
    const { signIn, googleLogIn } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors }, } = useForm()
    const onSubmit = (data) => {
        console.log(data)

        signIn(data.email, data.password)
            .then(res => {
                console.log(res)
                if (res) {

                    Swal.fire({
                        position: "top",
                        icon: "success",
                        title: "Logged In Succesfully !!!",
                        showConfirmButton: false,
                        timer: 1500
                    })
                    navigate('/')
                }
            })
    }
    const handleGoogle = () => {
        googleLogIn()
            .then(result => {
                console.log(result.user)
                const userInfo = {
                    name: result.user?.displayName, 
                    email: result.user?.email
                   
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: "top",
                                icon: "success",
                                title: "Registration Successfull",
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
                navigate('/')

            })
            .catch(error => {
                console.error(error)

            })
    }

    return (
        <div>
            <div className="flex items-center gap-3 text-xl">
                <Link to={'/'}><h1><FcHome /></h1></Link>
                <Link to={'/'}><h1>Home</h1></Link>


            </div>
            <div className='flex mb-52 flex-col lg:flex-row h-screen'>

                <div className='w-[80%] mx-auto lg:w-[50%] mt-16 '>
                    <h1 className="text-2xl font-bold text-center text-cyan-400 my-5">Log in to your account</h1>
                    <div className='w-full lg:w-[50%] mx-auto '>
                        <form onSubmit={handleSubmit(onSubmit)} className='space-y-10'>

                            <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="email" {...register("email")} name="email" id="" placeholder='Email' />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <input className='block w-full rounded outline-none border-b-2 focus:border-cyan-400 p-2' type="password"{...register("password")} name="password" id="" placeholder='Password' />
                            {errors.exampleRequired && <span>This field is required</span>}

                            <button className='btn w-full text-white bg-cyan-400 '>Log in <FiLogIn className='text-xl'></FiLogIn></button>
                        </form>
                        < hr className='my-5' />

                        <button onClick={handleGoogle} className='btn w-full text-white bg-cyan-400'>Log in with <FcGoogle className='text-xl'></FcGoogle></button>
                        <h1 className="font-medium text-center mt-3">Do not have account ? <Link className="text-cyan-400 font-semibold" to={'/register'}>Register</Link> </h1>


                    </div>
                </div>
                <div className='w-[80%] mx-auto lg:w-[50%] mt-10'>
                    <img src="https://i.ibb.co/F05xLCN/istockphoto-1283543880-612x612.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
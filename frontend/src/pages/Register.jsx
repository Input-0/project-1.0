import Button from "../component/Button";
import Input from "../component/Input";
import {useForm} from "react-hook-form"
import toast,{Toaster} from "react-hot-toast"
import { useUserContext } from "../context/authcontext";

const Register = () => {

    let {register,handleSubmit,formState:{errors}} =useForm()
    let {getStart} = useUserContext()
    let doRegister = (data) => {
        getStart(data)
    }
    let errorHandler = (errors) => {
        console.log("data");
        
        
        toast.error(Object.values(errors)[0].message);
        

    }

  return (
    <div className="flex h-screen justify-center  items-center bg-gradient-to-r from-orange-300 to-green-600">
        <Toaster/>
        <div className="flex flex-col justify-center items-center border-2 border-transparent shadow-2xl shadow-olive-600 px-8 py-10 rounded-2xl ">
          <h1 className="text-4xl font-mono font-light opacity-70 tracking-widest">Get Started</h1>

        <form onSubmit={handleSubmit(doRegister,errorHandler)} className="flex flex-col gap-[20px] pt-10">
            {errors?.username&& <h3 className="text-red-800">{errors.username?.message}</h3>}
            <Input lText="username" iType="text" phold="john" className={""} name="email" {...register("username",{
                required:"usernmae required",
                pattern:{
                    value:/^[a-zA-Z0-9-_]{3,}/,
                    message:"not a valid usernmae"
                }
                
            })}/>
            <Input lText="email" phold="john@gmail.com" iType="email" className={""} {...register("email",{
                required:"email must required",
                pattern:{
                    value:/^[a-zA-Z0-9$%.&*$#$]+@[a-zA-Z0-9$%&*$#$]+\.[a-zA-Z0-9]{2,}$/,
                    message:"invalid email"
                }
            })}/>
            <Input lText="password" iType="password" phold="enter stong password" {...register("password")}/>
            <Button bType="submit" bText="Register" className="mt-2"/>
        </form>
        <p>Already haven an account  ? <span className="text-gray-300 cursor-pointer">Login here</span></p>
        </div>
       
    </div>
  );
};

export default Register;




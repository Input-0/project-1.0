import Button from "../component/Button";
import Input from "../component/Input";

const Login = () => {
  return (
    <div className="flex h-screen justify-center  items-center bg-gradient-to-r from-orange-300 to-green-600">
        
        <div className="flex flex-col justify-center items-center border-2 border-transparent shadow-2xl shadow-olive-600 px-8 py-10 rounded-2xl ">
          <h1 className="text-4xl font-mono font-light opacity-70 tracking-widest">Login</h1>

        <div className="flex flex-col gap-[20px] pt-10">
            <Input lText="username" phold="enter your name" className={""}/>
            <Input lText="password" phold="enter stong password"/>
        </div>
        <Button bText="Login"/>
        <p>Forgot password ? <span className="text-gray-300 cursor-pointer">click here</span></p>
        </div>
       
    </div>
  );
};

export default Login;

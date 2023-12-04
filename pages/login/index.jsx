import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
const Login = () => {
  return (
    <div className="w-full h-[80vh] p-5">
      <div className="container mx-auto w-full h-full">
        <div className="flex items-center justify-center w-full h-full">
          <div className="p-5 bg-white shadow-lg rounded-xl flex flex-col text-center gap-5">
            <h3>Login Using</h3>
            <hr />

            <div className="flex flex-col lg:flex-row items-center gap-5">
              <div className="flex items-center gap-3 text-2xl border border-primary p-3 rounded-xl cursor-pointer hover:shadow-xl">
                <FcGoogle size={30}/>
                <p>Google</p>
              </div>

              <div className="flex items-center gap-3 text-2xl border border-primary p-3 rounded-xl cursor-pointer hover:shadow-xl">
                <FaGithub size={30}/>
                <p>GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
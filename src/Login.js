function Login() {
  return (
      <div className="h-screen flex flex-row w-full border-4 border-red-500">
        <div className="w-full border-4 border-green-500">

        </div>
        <div className="w-full flex justify-center items-center border-4 border-purple-500">
            <div className="max-w-2xl flex space-y-4 flex-col justify-center items-start border border-yellow-500">
                <h1 className="text-3xl text-teal-600 font-bold">Hey, hello</h1>
                <p className="text-sm text-gray-300">Silahkan masukkan email anda untuk log masuk ke aplikasi.</p>
                <input className="border p-3 rounded-xl w-full outline-none" type="text" placeholder="Your email..." />
                <button className="bg-teal-700 text-white font-bold rounded-lg outline-none w-full py-3">Login</button>
                <div className="w-full flex flex-row justify-center items-center border border-blue-500">
                    <div className="w-full border border-b-0 border-gray-300"></div>
                    <span className="text-gray-300 mx-5">or</span>
                    <div className="w-full border border-b-0 border-gray-300"></div>
                </div>
                <button className="bg-gray-100 text-gray-400 w-full outline-none py-3 rounded-lg">Sign With Google</button>
            </div>
        </div>
      </div>
  );
}

export default Login;

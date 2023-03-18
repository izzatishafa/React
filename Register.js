function Register() {
  return (
    <div className="h-screen flex flex-col justify-center items-center w-full bg-rose-50">
      <div className="w-2/6 space-y-5 flex flex-col justify-center items-center rounded-xl bg-white p-10">
        <h1 className="text-2xl font-bold">CREATE ACCOUNT</h1>
        <input
          type="text"
          placeholder="Your name"
          className="border p-3 rounded-xl outline-none w-full"
        />
        <input
          type="email"
          placeholder="Your email"
          className="border p-3 rounded-xl outline-none w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-xl outline-none w-full"
        />
        <input
          type="password"
          placeholder="Repeat Your Password"
          className="border p-3 rounded-xl outline-none w-full"
        />
        <p className="text-sm text-left font-bold">I agree all statements in <span><u>Terms of service</u></span></p>
        <button className="bg-red-900 rounded-lg text-white w-full p-2">SIGN UP</button>
        <p className="text-sm text-left font-thin">Have already an account? <span><u>Login here</u></span></p>
      </div>
    </div>
  );
}

export default Register;

function Login() {

  return (
    <section className="login-section">

      <div className="login-box">

        <h2>
          Welcome Back to PULSE AI
        </h2>

        <p>
          Access your personal AI health dashboard.
        </p>


        <input
          type="email"
          placeholder="Enter your email"
        />


        <input
          type="password"
          placeholder="Enter your password"
        />


        <button className="btn">
          Login
        </button>


      </div>

    </section>
  );
}

export default Login;

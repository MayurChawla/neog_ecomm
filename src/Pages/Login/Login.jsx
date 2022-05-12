import "./loginStyle.css";

const Login = () => {
    return(
        <div className="login">
            <div className="login-container">
                <div className="wrapper">
                    <h1 className="title">SIGN IN</h1>
                    <form>
                        <input className="username" placeholder="username"/>
                        <input className="password" placeholder="password"/>
                        <button className="login">LOGIN</button>
                        <a>FORGOT PASSWORD?</a>
                        <a>CREATE A NEW ACCOUNT</a>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;
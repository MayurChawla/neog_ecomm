import "./registerStyle.css";

const Register = () => {
    return(
        <div className="register">
            <div className="register-container">
                <div className="wrapper">
                    <h1 className="title">CREATE AN ACCOUNT</h1>
                    <form>
                        <input className="firstname" placeholder="First Name"/>
                        <input className="lastname" placeholder="Last Name"/>
                        <input className="username" placeholder="username"/>
                        <input className="email" placeholder="email"/>
                        <input className="password" placeholder="password"/>
                        <input className="confirmpassword" placeholder="confirm password"/>
                        <p className="agreement">By creating an account, I consent to the processing of my personal
                            data in accordance with the <b>PRIVACY POLICY</b>
                        </p>
                        <button className="create">CREATE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;
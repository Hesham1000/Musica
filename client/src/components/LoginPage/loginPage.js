import LoginForm from "./login";
import RegisterForm from "./register";

const Login = () => {
    
    return(
        <section className="login">
        <div className="container">
            <LoginForm />
            <RegisterForm />
        </div>
    </section>
    );
}
export default Login;
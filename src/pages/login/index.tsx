import {LoginPage} from "@/components/auth/Login/LoginPage";
import {getLayoutAuth} from "@/layout/LayoutAuth/LayoutAuth";

const Login = () => <LoginPage />


Login.getLayout = getLayoutAuth

export default Login
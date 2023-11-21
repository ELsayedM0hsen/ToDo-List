import axios from "axios";
import { useState } from "react";
import {useCookies} from "react-cookie";
import { useNavigate } from "react-router-dom";

function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
             const response = await axios.post("http://localhost:5000/auth/login",{
                email,
                password
            });
            setCookies("access_token",response.data.token);
            window.localStorage.setItem("userId",response.data.userId);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    }

    return ( 
        <div class="container__form container--signup">
            <form class="form" id="form1">
                <h2 class="form__title">Login</h2>
                <input type="email" value={email} onChange={(e) =>setEmail (e.target.value)} placeholder="Email"  />
                <input type="password" value={password} onChange={(e) =>setPassword (e.target.value)} placeholder="Password" />
                <button class="btn" onClick={handleLogin}>Login</button>
            </form>
	    </div>
    );
}
 
export default Login;
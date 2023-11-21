import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register () {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/auth/register",{
                username,
                email,
                password
            });
            navigate("/login")
        } catch (err) {
            console.log(err);
        }
    }

    return ( 
        <div class="container__form container--signup">
            <form class="form" id="form1">
                <h2 class="form__title">Register</h2>
                <input type="text" value={username} onChange={(e) =>setUserName (e.target.value) } placeholder="Username" />
                <input type="email" value={email} onChange={(e) =>setEmail (e.target.value)} placeholder="Email"  />
                <input type="password" value={password} onChange={(e) =>setPassword (e.target.value)} placeholder="Password" />
                <button class="btn" onClick={handleRegister}>Register</button>
            </form>
	    </div>
    );
}
 
export default Register;
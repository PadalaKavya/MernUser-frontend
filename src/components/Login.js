import {React,useState} from 'react';
const Login = () => {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const loginuser = async(e) => {
        e.preventDefault();

        const res = await fetch('/signin',{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                    email,
                    password
            })
        });

        const data = await res.json();
        if(res.status === 400|| !data){
            window.alert("Invalid credentials");
        }
        else{
            window.alert("Login successfull");
        }
    }
    return(
    <>
    <section className='Login'>
        <div className='container'>
            <form method="POST">
            <input type="email" name="email" id="email" placeholder='Email' value={email} onChange={(e)=> setemail(e.target.value)} ></input>
            <input type="password" name="password" id="password" placeholder='password' value={password} onChange={(e)=> setpassword(e.target.value)}></input>
            <input type="submit" name="Login" id="Login" value="Login" placeholder='Login' onClick={loginuser}></input>
            </form>
        </div>
    </section>

        
    </>
    )}

export default Login
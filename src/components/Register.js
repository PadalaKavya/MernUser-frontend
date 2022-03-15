import {React,useState} from 'react'

const Register = () => {
    const [user,setUser] = useState({
        name:"",
        email:"",
        gender:"",
        age:"",
        password:""
    });
     let name, value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }

    const PostData = async (e) => {
        e.preventDefault();

        const {name,email, gender,age,password} = user;
        const res = await fetch("/register", {
            method:"POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name,email,gender,age,password
            })
        });

        const data = await res.json();
        if(res.status === 422 || !data) {
            window.alert("Invalid Registration");
        }
        else{
            window.alert("Registration successful");

        }
    }

    return(
    <>
    <section className='register'>
        <div className='container'>
            <form method="POST">
            <input type="text" name="name" id="name" placeholder='Username' value={user.name} onChange={handleInput}></input>
            <input type="email" name="email" id="email" placeholder='Email' value={user.email} onChange={handleInput}></input>
            <input type="text" name="gender" id="gender" placeholder='Gender' value={user.gender} onChange={handleInput}></input>
            <input type="number" name="age" id="age" placeholder='age' value={user.age} onChange={handleInput}></input>
            <input type="password" name="password" id="password" placeholder='password' value={user.password} onChange={handleInput}></input>
            <input type="submit" name="Register" id="Register" value="Register" placeholder='Register' onClick={PostData} ></input>
            </form>
        </div>
    </section>
        
    </>
    )}

export default Register
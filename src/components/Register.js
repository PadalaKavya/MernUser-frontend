/*import {React,useState} from 'react'

const Register = () => {
    const [user,setUser] = useState({
        name:"",
        email:"",
        gender:"",
        age:"",
        password:"",
        profilepic:"",
    });
     let name, value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }
    const imageupload = (event) =>{
        setUser({...user,[event.target.profilepic]:event.target.files[0]});
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
            <input type="file" name="myfile" id="myfile" placeholder='photo' value={user.photo} onChange={imageupload}></input>
            <input type="submit" name="Register" id="Register" value="Register" placeholder='Register' onClick={PostData} ></input>
            </form>
        </div>
    </section>
        
    </>
    )}

export default Register*/
import {React,useState} from 'react'
import axios from 'axios';
const Register = () => {
    const [user,setUser] = useState({
        name:"",
        email:"",
        gender:"",
        age:"",
        password:"",
        profilepic:"",
    });
     let name, value;

    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;

        setUser({...user,[name]:value});
    }
    const imageupload = ((event) =>{
        setUser({...user,profilepic: event.target.files[0]});
    });
    const handleSubmit=async(e) =>{
        e.preventDefault()
        console.log("user",user);
        const formData = new FormData();
        formData.append('name', user.name)
        formData.append('email', user.email)
        formData.append('gender', user.gender)
        formData.append('age', user.age)
        formData.append('password', user.password)
        formData.append('profilepic', user.profilepic)
        console.log("name",formData.get("profilepic"));
        console.log("trying th reach backend");
        await axios.post("http://localhost:5000/register", formData).then(res => {
            console.log(res);
            window.alert("Registration  Successful");
        }).catch((err)=>{
            console.log("Failed to reach bacheend")
             console.error(err.response.data);
        })
    }

    return(
    <>
    <section className='register'>
        <div className='container'>
            <form method="POST" encType="multipart/form-data">
            <input type="text" name="name" id="name" placeholder='Username' value={user.name} onChange={handleInput}></input>
            <input type="email" name="email" id="email" placeholder='Email' value={user.email} onChange={handleInput}></input>
            <input type="text" name="gender" id="gender" placeholder='Gender' value={user.gender} onChange={handleInput}></input>
            <input type="number" name="age" id="age" placeholder='age' value={user.age} onChange={handleInput}></input>
            <input type="password" name="password" id="password" placeholder='password' value={user.password} onChange={handleInput}></input>
            <input type="file" name="profilepic" id="profilepic" placeholder='profilepic' onChange={imageupload}></input>
            <input type="submit" name="Register" id="Register" value="Register" placeholder='Register'onClick={handleSubmit} ></input>
            </form>
        </div>
    </section>
        
    </>
    )}

export default Register
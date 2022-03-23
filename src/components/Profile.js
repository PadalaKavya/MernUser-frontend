import React, { useEffect, useState } from 'react';
import Register from './Register';
const axios = require('axios');
const Profile = () => {
    const [userData, setuserData] = useState({});
    const[imagepath,setpath] = useState();
    const callAboutPage = async () =>{
        try{
            const res = await fetch('/profile',{
                method:"GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                credentials:"include"
            });
            const data = await res.json();
            console.log(data);
            setuserData(data);
            setpath('../public/uploads/')
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
            else{
                window.alert("Login successfull");
            }
            
        }catch (err) {
            console.log(err);
            return(
                <h1>Welcome</h1>
            )
        }
    }
    useEffect(() =>{
        callAboutPage();
    }, [])

    //if usernotloggin : return( <h1>Welcome</h1>) else:
    //const [imagepath,setpath ] = useState("");
    //setpath(process.env.imgpath+Record.photo);
    return(
    <>
            <h1>We are in profile</h1>
            <form method='GET'>
                <p>{ userData.name }</p>
                <p>{userData.profilepic}</p>
                <img src={`./public/uploads/${userData.profilepic}`}></img>
                
        </form>
    </>
    )}

export default Profile
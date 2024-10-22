import { useState } from "react";

export default function Form(){
    // let[fullName, setFullName] = useState("");
    // let[username, setUsername] = useState("");

    let[formData, setFormData] = useState({
        fullName:"",
        username:"",
        password:""
    });

    // let handlenameChange = (event) => {
    //     // console.log(event.target.value);
    //     setFullName(event.target.value);
    // } 

    // let handleuserName = (event) => {
    //     setUsername(event.target.value);
    // } 

    let handleInputChange = (event) => {
        // let fieldName = event.target.name;
        // let newValue = event.target.value;
        // console.log(fieldName);
        // console.log(newValue);

        setFormData( (currData) =>{
            return {...currData, [event.target.name] : event.target.value };

        })
    };

    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName:"",
            username:"",
            password:"",
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" 
            placeholder="enter full name" 
            value={formData.fullName} 
            id="fullName"
            name="fullName"
            onChange={handleInputChange}
            />
            <br></br>
            <br></br>
           <label htmlFor="username">UserName</label>
            <input type="text" 
            placeholder="enter username" 
            value={formData.username} 
            id="username"
            name="username"
            onChange={handleInputChange}
            />

            <br></br>
            <br></br>
           <label htmlFor="password">Password</label>
            <input type="password" 
            placeholder="enter password" 
            value={formData.password} 
            id="password"
            name="password"
            onChange={handleInputChange}
            />

            <br></br>
            <button>Submit</button>
        </form>



    );
}
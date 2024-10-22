import { useState } from "react";
import {useFormik} from 'formik';
import "./CommentForm.css";

//Validations Using Formik.
const validate = values =>{
    const errors = {};
    if(!values.username){
        errors.username = 'Username Cannot be Empty';
    }else if(values.username.length > 15){
        errors.username = 'Must be 15 characters or less';
    }

    if(!values.remarks){
        errors.remarks = 'Remarks Cannot be Empty';
    }else if(values.remarks.length > 150){
        errors.username = 'Must be 150 characters or less';
    }

    if(!values.rating){
        errors.rating = 'Required';
    }else if(values.rating.length > 5){
        errors.username = 'Must be 5 or less';
    }

    return errors;


};



export default function CommentsForm({addNewComment}) {
//   let [formData, setFormData] = useState({
//     username: "",
//     remarks: "",
//     rating: 5,
//   });

     const formik = useFormik({
        initialValues:{
            username:'',
            remarks:'',
            rating:5,
        },
        validate,
        onSubmit: values =>{
            alert(JSON.stringify(values, null, 2));
        },
     });

//   let handleInputChange = (event) => {
//     setFormData((currData) => {
//       return { ...currData, [event.target.name]: event.target.value };
//     });
//   };

//   let handleSubmit = (event) => {
   
//     console.log(formData);
//     addNewComment(formData);
//     event.preventDefault();
//     setFormData({
//         username: "",
//         remarks: "",
//         rating: 5,
//       });
//   };

  return (
    <div className="commentform">
      <h4>Give A Comment..</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username :</label>
        <input
          type="text"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          name="username"
        />
        {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p>:null}
       
        <br></br>
        <br></br>

        <label htmlFor="remarks">Remarks :</label>
        <textarea
          value={formik.values.remarks}
          placeholder="Add Few Remarks"
          onChange={formik.handleChange}
          id="remarks"
          name="remarks"
        ></textarea>
        {formik.errors.remarks ? <p style={{color:"red"}}>{formik.errors.remarks}</p>:null}
        <br></br>
        <br></br>

        <label htmlFor="rating">Ratings :</label>
        <input
          type="number"
          placeholder="rating"
          value={formik.values.rating}
          min={1}
          max={5}
          onChange={formik.handleChange}
          id="rating"
          name="rating"
        />
        {formik.errors.rating ? <p style={{color:"red"}}>{formik.errors.rating}</p>:null}
        <br></br>
        <button type="submit">AddComment</button>
      </form>
    </div>
  );
}

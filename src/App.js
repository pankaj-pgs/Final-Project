import React from "react";
import { useForm } from "react-hook-form";
import react,{useState,useEffect} from 'react';
import "./App.css";

function App() {
  const {register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit (data) {
      
  } 
  
  return (
    <div className="App">
      <div class="form">
        <h1>Sign Up</h1>

        <form   action='../../SignUp'method="post">
          <input type="text" name="name" id="name" placeholder="Name" {...register("name",{ required: true })}onClick={handleSubmit()} required/>
          <br></br>
          {errors.name && <span style={{ color: "red" }}>
          *Name* is mandatory </span>}
          <br></br>
          <input type="email" name="email" placeholder="Email" {...register("email", { required: true })} required/>
          <br></br>
          {errors.email && <span style={{ color: "red" }}>
          *Email* is mandatory </span>}
          <br></br>
          <input type="tel" pattern='[0-9]+' maxlength="10" minlength='10' name="phone" placeholder="Phone" {...register("phone", { required: true })} required />
          <br></br>
          {errors.phone && <span style={{ color: "red" }}>
          *phone number* is mandatory </span>}
          <br></br>
          <input type="password" name="password" placeholder="Password" {...register("password",{ required: true })} required/>
          <br></br>
          {errors.password && <span style={{ color: "red" }}>
          *Password* is mandatory </span>}
          <br></br>
          <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
        </form>
        <a href='http://localhost:4000/'>Already have an Account?</a>
        </div>
    </div>
  );
}
export default App;
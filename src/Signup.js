import {Link} from 'react-router-dom';
import React from "react";
import { useForm } from "react-hook-form";
import react,{useState,useEffect} from 'react';
import "./App.css";
SignUp=()=> {
    return (
      <div class="form">
      <h1>Sign Up</h1>

        <form   action='../../SignUp' method="post">
          <input type="text" name="name" id="name" placeholder="Name" {...register("name",{ required: true })}onClick={handleSubmit()} />
          <br></br>
          {errors.name && <span style={{ color: "red" }}>
          *Name* is mandatory </span>}
          <br></br>
          <input type="email" name="email" placeholder="Email" {...register("email", { required: true })} />
          <br></br>
          {errors.email && <span style={{ color: "red" }}>
          *Email* is mandatory </span>}
          <br></br>
          <input type="tel" name="phone" placeholder="Phone" {...register("phone", { required: true })} />
          <br></br>
          {errors.phone && <span style={{ color: "red" }}>
          *phone number* is mandatory </span>}
          <br></br>
          <input type="password" name="password" placeholder="Password" {...register("password",{ required: true })} />
          <br></br>
          {errors.password && <span style={{ color: "red" }}>
          *Password* is mandatory </span>}
          <br></br>
          <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
        </form>
        
        <nav>
          <Link to="/Login">Login</Link>
        </nav>
        </div>
    );
  }
  export default SignUp;
import {Link} from 'react-router-dom';
import React from "react";
import { useForm } from "react-hook-form";
import react,{useState,useEffect} from 'react';
import "./App.css";
Login=()=> {
    return (
      <div class="form">
      <h1>login</h1>

        <form  >
          <input type="email" name="email" placeholder="Email" {...register("email", { required: true })} />
          <br></br>
          {errors.email && <span style={{ color: "red" }}>
          *Email* is mandatory </span>}
          <br></br>
          <input type="password" name="password" placeholder="Password" {...register("password",{ required: true })} />
          <br></br>
          {errors.password && <span style={{ color: "red" }}>
          *Password* is mandatory </span>}
          <br></br>
          <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
        </form>
        
        <nav>
          <Link to="/Signup">Sign Up</Link>
        </nav>
        </div>
    );
  }

  export default Login;
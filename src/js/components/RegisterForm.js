import React from "react";
import { useForm } from "react-hook-form";
import { asyncRegisterUser } from "../reducer/authSlice";
import { useDispatch } from "react-redux";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "mohamedikramks7@gmail.com",
      password: "Test123!",
      username: "Mohamed Ikram",
    },
  });
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(asyncRegisterUser(data));
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="centered-container-form">
      <div className="header">Create an account</div>
      <div className="form-container">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            {...register("email", { required: true })}
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            className="form-control"
            aria-describedby="usernameHelp"
            {...register("username")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="avatar">Avatar</label>
          <input
            className="form-control"
            aria-describedby="avatarHelp"
            {...register("avatar")}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            {...register("password", { required: true })}
          />
        </div>
        {false && <div className="alert alert-danger small">Some Error</div>}
        <button type="submit" className="btn btn-outline-primary">
          Register
        </button>
      </div>
    </form>
  );
};

export { RegisterForm };

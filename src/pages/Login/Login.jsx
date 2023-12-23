import React from "react";
import { useForm } from "react-hook-form";
import "./Login.css"

export default function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch('username'));

  return (
    <section>
      <div className="register">
        <div className="col-2">
          <img src="/images/sign.jpeg" />
        </div>
        <div className="col-1">
          <h2>Sign In</h2>
          <span>register and enjoy the service</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register("username")}
              placeholder="username"
            />
            <input
              type="Email"
              {...register("Email adress", { required: true })}
              placeholder=" Email adress "
            />
            <input
              type="password"
              {...register("password")}
              placeholder="password"
            />

            <button className="btn">Done</button>
          </form>
        </div>
      </div>
    </section>
  );
}

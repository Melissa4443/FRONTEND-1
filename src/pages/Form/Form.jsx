import React from "react";
import { useForm } from "react-hook-form";
import "./Form.css";

export default function Form() {
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
              type="password"
              {...register("password")}
              placeholder="password"
            />
            <input
              type="password"
              {...register("confirmpwd")}
              placeholder="confirm password"
            />
            <input
              type="tel"
              {...register("mobile", { required: true, maxLength: 10 })}
              placeholder="mobile number"
            />
            {errors.mobile?.type === "required" && "Mobile Number is required"}
            {errors.mobile?.type === "maxLength" && "Max Length Exceed"}
            <input
              type="Email"
              {...register("Email adress", { required: true })}
              placeholder=" Email adress "
            />
            <input
              type="text"
              {...register("speciality")}
              placeholder="speciality"
            />

            <input
              type="text"
              {...register("adress", { required: true })}
              placeholder="adress "
            />
            <button className="btn">Sign In</button>
          </form>
        </div>
      </div>
    </section>
  );
}

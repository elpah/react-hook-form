import React from "react";
import { useForm } from "react-hook-form";
import styles from "./form.module.scss";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name</label>
        <input
          {...register("name", { required: true, minLength: 5 })}
          id="name"
          type="text"
          name="name"
          trigger
        />
        {errors.name?.type === "required" && <p>The name field is required</p>}
        {errors.name?.type === "minLength" && <p>Minimum lenght should be 5</p>}

        <label>email</label>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            },
          })}
          type="text"
          name="email"
          id="email"
          trigger
        />
        {errors.email?.type === "required" && <p>The name field is required</p>}
        {errors.email?.type === "pattern" && <p>Invalid email format</p>}

        <label>Message</label>
        <input
          {...register("message", { required: true, minLength: 5 })}
          type="text"
          name="message"
          id="message"
        />
        {errors.message?.type === "required" && (
          <p>The message field is required</p>
        )}
        {errors.message?.type === "minLength" && (
          <p>Minimum lenght should be 5</p>
        )}

        <button>Submit</button>
      </form>
    </div>
  );
}

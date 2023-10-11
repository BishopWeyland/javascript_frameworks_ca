import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationPin,
} from "@fortawesome/free-solid-svg-icons";

const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Your full name should be at least 3 characters.")
      .max(20, "Your full name cannot be longer than 20 characters.")
      .required("Please enter your full name"),

    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Please enter your email address"),

    subject: yup
      .string()
      .min(3, "The subject should be at least 3 characters.")
      .max(15, "The subject cannot be longer than 15 characters.")
      .required("Please enter a subject"),

    body: yup
      .string()
      .min(3, "The message should be at least 3 characters.")
      .max(40, "The message name cannot be longer than 40 characters.")
      .required("Please enter a message"),
  })
  .required();

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function onSubmit(data) {
    console.log(data);
  }

  const contactItems = [
    { text: "example@email.com", icon: faEnvelope },
    { text: "+47 12345678", icon: faPhone },
    { text: "Main Street 12, 1234 CITY", icon: faLocationPin },
  ];

  return (
    <div>
      <div>
        <h1>Contact us:</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("fullName")} placeholder="Full Name" />
          <p>{errors.fullName?.message}</p>

          <input {...register("email")} placeholder="E-mail" />
          <p>{errors.email?.message}</p>

          <input {...register("subject")} placeholder="Subject" />
          <p>{errors.subject?.message}</p>

          <textarea {...register("body")} placeholder="Message" />
          <p>{errors.body?.message}</p>

          <input type="submit" />
        </form>
      </div>
      <div>
        <ul>
          {contactItems.map((item) => (
            <li key={item.text}>
              <FontAwesomeIcon className="menu-icon" icon={item.icon} />{" "}
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

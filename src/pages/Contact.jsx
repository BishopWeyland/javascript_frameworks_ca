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
import { BaseButton } from "../components/ButtonComponent";

import { StyledInput, StyledTextarea } from "../components/input";

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
    <div className="flex justify-center">
      <div className="flex flex-col items-center lg:flex-row w-[100rem]">
        <div className="w-full md:w-3/6 flex justify-center items-center flex-col shadow-lg">
          <form className="w-full p-10 " onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl md:text-5xl my-4 md:my-8">Contact us:</h1>
            <StyledInput
              {...register("fullName")}
              placeholder="Full Name"
              aria-label="Full Name"
            />
            <p>{errors.fullName?.message}</p>

            <StyledInput
              {...register("email")}
              placeholder="E-mail"
              aria-label="E-mail"
            />
            <p>{errors.email?.message}</p>

            <StyledInput
              {...register("subject")}
              placeholder="Subject"
              aria-label="Subject"
            />
            <p>{errors.subject?.message}</p>

            <StyledTextarea
              {...register("body")}
              placeholder="Message"
              aria-label="Message"
            />
            <p>{errors.body?.message}</p>

            <BaseButton className="w-full">
              <input type="submit" value="Submit" className="invisible-input" />
            </BaseButton>
          </form>
        </div>
        <div className="w-full md:w-3/6 bg-brand-black flex justify-center items-center h-full py-44">
          <ul>
            {contactItems.map((item) => (
              <li className="mb-10" key={item.text}>
                <span className="p-2 bg-brand-orange rounded-full">
                  <FontAwesomeIcon className="menu-icon" icon={item.icon} />
                </span>{" "}
                <span className="text-white">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

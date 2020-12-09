import React from "react";
import { useForm } from "react-hook-form";
import FormLayout from "../layout/FormLayout";
import InputLabel from "./InputLabel";

const VerifyPurchase = () => {
    const { register, errors, handleSubmit } = useForm();
    const onSubmit = (data) => {
      // console.log(JSON.stringify(data));
      // fetch(API_URL + "auth/register", {
      //   method: "POST",
      //   body: JSON.stringify(data),
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((data) => {
      //     return data.json();
      //   })
      //   .then((response) => {
      //     console.log(response.message);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    };
    
  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)} title='Verificar Compra'>
    <>
    <InputLabel title="Id Compra" />
      <input
        className="h-10 px-2 bg-gray-50 border-yellow-400 border-2 rounded focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
        type="text"
        name="orderId"
        ref={register({
          required: true,
          maxLength: 11,
          minLength: 8,
        })}
      />
      <InputLabel title="Token" />
      <input
        className="h-10 px-2 bg-gray-50 border-yellow-400 border-2 rounded focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
        type="text"
        name="token"
        ref={register({
          required: true,
          maxLength: 11,
          minLength: 8,
        })}
      />
    </>
  </FormLayout>
  )
};

export default VerifyPurchase;

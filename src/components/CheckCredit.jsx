import React from "react";
import { useForm } from "react-hook-form";
import { API_URL } from "../config/apiUrl";
import FormLayout from "../layout/FormLayout";
import InputLabel from "./InputLabel";

const CheckCredit = () => {
  const [message, setMessage] = React.useState('');
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setMessage('Consultando');
    fetch(API_URL + "wallet/get", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        setMessage('El saldo de su billetera es: ' + response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)} title="Consultar Saldo" snipText={message}>
      <>
        <InputLabel title="Document" />
        <input
          className="h-10 px-2 bg-gray-50 border-yellow-400 border-2 rounded focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
          type="text"
          name="document"
          ref={register({
            required: true,
            maxLength: {
              value: 10,
              message: "Documento debe tener entre 8 y 10 caracteres",
            },
            minLength: {
              value: 8,
              message: "Documento debe tener entre 8 y 10 caracteres",
            },
          })}
        />
        <span>{errors.document && errors.document.message}</span>

        <InputLabel title="Telefono" />
        <input
          className="h-10 px-2 bg-gray-50 border-yellow-400 border-2 rounded focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
          type="tel"
          name="phone"
          ref={register({
            required: true,
            maxLength: 11,
            minLength: 8,
            message: "Telefono debe tener entre 8 y 11 caracteres",
          })}
        />
      </>
    </FormLayout>
  );
};

export default CheckCredit;

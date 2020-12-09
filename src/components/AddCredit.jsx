import React from "react";
import { useForm } from "react-hook-form";
import FormLayout from "../layout/FormLayout";
import InputLabel from "./InputLabel";
import { API_URL } from '../config/apiUrl';

const AddCredit = () => {
  const [message, setMessage] = React.useState('');
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setMessage('Consultando');

    fetch(API_URL + "wallet/add", {
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
        setMessage(response.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)} title="Recargar Saldo" snipText={message}>
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

        <span>{errors.phone && errors.phone.message}</span>

        <InputLabel title="Monto" />
        <input
          className="h-10 px-2 bg-gray-50 border-yellow-400 border-2 rounded focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
          type="text"
          name="amount"
          ref={register({
            required: true,
            min: {
              value: 1,
              message: 'El monto minimo de recargar es 1'
            }
          })}
        />
        <span>{errors.amount && errors.amount.message}</span>
      </>
    </FormLayout>
  );
};

export default AddCredit;

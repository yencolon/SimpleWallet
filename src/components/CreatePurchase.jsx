import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { API_URL } from "../config/apiUrl";
import FormLayout from "../layout/FormLayout";
import InputLabel from "./InputLabel";

const CreatePurchase = () => {
  const [message, setMessage] = React.useState("");
  const { register, errors, handleSubmit } = useForm();
  const router = useHistory();

  const onSubmit = (data) => {
    setMessage("Consultando");
    fetch(API_URL + "wallet/purchase", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        console.log(JSON.stringify(data));
        return data.json();
      })
      .then((response) => {
        setMessage(response.message);
        if (response.code === 200) {
          sessionStorage.setItem("orderId", response.data.id);
          router.push("/purchase/verify");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FormLayout
      onSubmit={handleSubmit(onSubmit)}
      title="Crear Compra"
      snipText={message}
    >
      <>
        <InputLabel title="Documento" />
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

        <InputLabel title="Monto" />
        <input
          className="h-10 px-2 bg-gray-50 border-yellow-400 border-2 rounded focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
          type="text"
          name="amount"
          ref={register({
            required: true,
            min: {
              value: 1,
              message: "El monto minimo de recargar es 1",
            },
          })}
        />
        <span>{errors.amount && errors.amount.message}</span>
      </>
    </FormLayout>
  );
};

export default CreatePurchase;

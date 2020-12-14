import React from "react";
import { useForm } from "react-hook-form";
import { API_URL } from "../config/apiUrl";
import FormLayout from "../layout/FormLayout";

const CheckCredit = () => {
  const [message, setMessage] = React.useState("");
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setMessage("Consultando");
    fetch(API_URL + "wallet/get", {
      method: "POST",
      body: JSON.stringify(data),
      credentials: "omit",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        setMessage("El saldo de su billetera es: " + response.data.credit);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FormLayout
      onSubmit={handleSubmit(onSubmit)}
      title="Consultar Saldo"
      snipText={message}
    >
      <>
        <label>Documento</label>
        <input
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

        <label>Telefono</label>
        <input
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

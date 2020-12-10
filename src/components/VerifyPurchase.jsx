import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { API_URL } from "../config/apiUrl";
import FormLayout from "../layout/FormLayout";
import InputLabel from "./InputLabel";

const VerifyPurchase = () => {
  const [message, setMessage] = React.useState('Revisa tu correo, eviamos un token de verificacion');
  const { register, handleSubmit } = useForm();
  const router = useHistory();

  const onSubmit = (data) => {
    setMessage('Consultando');
    data.recordId = sessionStorage.getItem('orderId');
    fetch(API_URL + "wallet/verify", {
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
        if(response.code === 200){
          setMessage('Exito');
          router.push('/wallet');
        }
        setMessage(response.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <FormLayout onSubmit={handleSubmit(onSubmit)} title="Verificar Compra" snipText={message}>
      <>
        <InputLabel title="Token" />
        <input
          className="h-10 px-2 bg-gray-50 border-yellow-400 border-2 rounded focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none"
          type="text"
          name="token"
          ref={register({
            required: true,
          })}
        />
      </>
    </FormLayout>
  );
};

export default VerifyPurchase;

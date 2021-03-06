import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { API_URL } from "../../config/apiUrl";
import { useAuthDispatch } from "../../context/AuthState";
import FormLayout from "../../layout/FormLayout";

const LoginForm = ({ onLabelClick }) => {
  const [message, setMessage] = React.useState("");
  const { register, errors, handleSubmit } = useForm();
  const { setAuthInfo } = useAuthDispatch();
  const router = useHistory();

  const onSubmit = (data) => {
    setMessage("Login...");
    fetch(API_URL + "auth", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        setMessage(response.message);
        if (response.code === 200) {
          setAuthInfo({
            user: null,
            isLogged: true,
          });
          router.push("/wallet");
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage("Error");
      });
  };

  return (
    <FormLayout
      onSubmit={handleSubmit(onSubmit)}
      title="Acceder"
      snipText={message}
    >
      <label>Email</label>
      <input
        type="email"
        name="email"
        ref={register({
          required: true,
          pattern: {
            value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "Debe ingresar un email valido",
          },
        })}
      />
      <span>{errors.email && errors.email.message}</span>

      <label>Contraseña</label>
      <input
        type="password"
        name="password"
        ref={register({
          required: true,
          maxLength: {
            value: 20,
            message: "Nombre debe tener mas de 2 caracteres",
          },
        })}
      />

      <span>{errors.password && errors.password.message}</span>

      <Link
        to="/auth/register"
        className="text-blue-700 text-right mt-1 self-end"
      >
        Registrarse
      </Link>
    </FormLayout>
  );
};

export default LoginForm;

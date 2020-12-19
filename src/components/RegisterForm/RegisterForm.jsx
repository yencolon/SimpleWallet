import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { API_URL } from "../../config/apiUrl";
import { useAuthDispatch } from "../../context/AuthState";
import FormLayout from "../../layout/FormLayout";

const RegisterForm = ({ onLabelClick }) => {
  const [message, setMessage] = React.useState("");
  const { register, errors, handleSubmit } = useForm();
  const { setAuthInfo } = useAuthDispatch();
  const router = useHistory();

  const onSubmit = (data) => {
    setMessage("Registrando");
    fetch(API_URL + "auth/register", {
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
        if (response.code === 200) {
          setMessage("Registro exitoso");
          setAuthInfo({
            user: response.data,
            isLogged: true,
          });
          router.push("/");
        } else {
          setMessage(response.message);
        }
      })
      .catch((err) => {
        setMessage(err.message);
      });
  };

  return (
    <FormLayout
      onSubmit={handleSubmit(onSubmit)}
      title="Registrar"
      snipText={message}
    >
      <>
        <label>Nombre</label>
        <input
          type="text"
          name="name"
          ref={register({
            required: true,
            maxLength: {
              value: 20,
              message: "Nombre debe tener mas de 2 caracteres",
            },
          })}
        />
        <span>{errors.name && errors.name.message}</span>

        <label>Apellido</label>
        <input
          type="text"
          name="lastname"
          ref={register({
            required: true,
            maxLength: {
              value: 20,
              message: "Apellido debe tener mas de 2 caracteres",
            },
          })}
        />
        <span>{errors.lastname && errors.lastname.message}</span>

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
        <span>{errors.phone && errors.phone.message}</span>

        <label>Email</label>
        <input
          type="text"
          name="email"
          ref={register({
            required: true,
            pattern: {
              value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Debe ingresar un email valido",
            },
          })}
        />

        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          ref={register({
            required: true,
            minLength: {
              value: 6,
              message: "La contraseña debe ser mayor a 5 caracteres",
            },
          })}
        />
        <span>{errors.password && errors.password.message}</span>

        <Link to="/auth" className="text-blue-700 text-right mt-1 self-end">
          Iniciar Sesion
        </Link>
      </>
    </FormLayout>
  );
};

export default RegisterForm;

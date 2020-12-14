import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const StyledForm = styled.form.attrs({
  className: `shadow-md flex flex-col justify-around w-9/12 
              md:w-5/12 lg:w-4/12 my-5 px-5 py-5 border-blue-400
              border-opacity-100 border-2`,
})`
  & {
    h3 {
      ${tw`text-2xl font-mono`}
    }
    h5 {
      ${tw`font-light text-base text-center`}
    }
    label {
      ${tw`block text-sm font-medium text-gray-700 mt-2`}
    }
    input {
      ${tw`w-full h-10 px-2 bg-gray-50 border-yellow-400 border-2 
          rounded focus:ring-1 focus:ring-indigo-500 
          focus:border-indigo-500 focus:outline-none`}
    }
    button {
      ${tw`inline-flex w-2/6 justify-center self-center 
          mt-10 py-2 px-4 border border-transparent shadow-sm 
          text-sm font-medium rounded-md text-white bg-indigo-600
          hover:bg-indigo-700 focus:outline-none focus:ring-2 
          focus:ring-offset-2 focus:ring-indigo-500`}
    }
    span {
      ${tw`text-red-500`}
    }
  }
`;

const FormLayout = ({ onSubmit, title, snipText = "", children }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <h3>{title}</h3>
      <h5>{snipText}</h5>
      {children}
      <button type="submit">Enviar</button>
    </StyledForm>
  );
};

export default FormLayout;

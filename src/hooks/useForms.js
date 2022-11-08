import { useState } from "react";

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const [errors, setErros] = useState({})

  const onChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });

    if(!!errors[name])
    setErros({
      ...errors,
      [name]:null
    })
  };


  const cleanFields = () => {
    setForm(initialState);
  };

  return [form, onChange, cleanFields, errors];
};

import { ChangeEvent, useState } from "react";

export const useForm = <T>(initialForm: T) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  return {
    ...form,
    //* Properties
    form,
    //* Methods
    handleChange,
  };
};

import { FormEvent, useState } from "react";
import { useForm } from "../../hooks";
import { Alert } from "../";
import { countries } from "../../data/countries";
import { SearchI } from "../../interfaces/interfaces";
import styles from "./Form.module.css";

interface Props {
  fetchWeather: (search: SearchI) => Promise<void>;
}

export const Form = ({ fetchWeather }: Props) => {
  const { city, country, form, handleChange } = useForm({
    city: "",
    country: "",
  });

  const [alert, setAlert] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(form).includes("")) {
      setAlert("Todos los campos son obligatorios");
      return;
    }

    fetchWeather(form);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      {alert && <Alert>{alert}</Alert>}
      <div className={styles.field}>
        <label htmlFor="city">Ciudad:</label>
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
          placeholder="Ciudad"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="country">Pais:</label>
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">-- Seleccione un País --</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      <input className={styles.submit} type="submit" value="Consultar Clima" />
    </form>
  );
};

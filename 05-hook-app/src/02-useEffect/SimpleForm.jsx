import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "Toto",
    email: "toto@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({ ...formState, [name]: value });
  };

  useEffect(() => {
    // console.log("Hola");
  }, []);

  useEffect(() => {
    // console.log("formState Changed");
  }, [formState]);

  useEffect(() => {
    // console.log("Email Changed");
  }, [email]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="mail@mail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {/* Aca verificamos si existe el usuario, si existe muestra el mensaje*/}
      {username === "Toto2" && <Message />}
    </>
  );
};

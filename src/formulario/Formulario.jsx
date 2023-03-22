import { useState } from "react";
import "./Formulario.scss";

const Formulario = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Faça algo com os valores de usuário e senha aqui
    console.log('Nome de usuário:', username);
    console.log('Senha:', password);
  };

  return (
    <div className="container">
        <form className="neumorphic-form" onSubmit={handleSubmit}>
        <label>Nome de usuário:</label>
        <input type="text" name="username" value={username} onChange={handleUsernameChange} />
        <label>Senha:</label>
        <input type="password" name="password" value={password} onChange={handlePasswordChange} />
        <input type="submit" value="Entrar" />
        </form>
    </div>
  );
};

export default Formulario;
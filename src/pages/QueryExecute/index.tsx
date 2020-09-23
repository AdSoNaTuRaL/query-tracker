import React from 'react';
import { Title, Form } from './styles';

import logo from '../../assets/logo.png';

const QueryExecute: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Ahimas Logo" />
      <Title>Elija el nombre y ejecute la query</Title>

      <Form>
        <select name="author" id="author" defaultValue="none">
          <option value="none" disabled>
            ¿Quién estáe ejecutando la query?
          </option>
          <option value="adson">Adson</option>
          <option value="miguel">Miguel</option>
          <option value="johanes">Johanes</option>
        </select>
        <textarea placeholder="Escriba la query" name="query" id="query" />
        <button type="submit">Ejecutar</button>
      </Form>
    </>
  );
};

export default QueryExecute;

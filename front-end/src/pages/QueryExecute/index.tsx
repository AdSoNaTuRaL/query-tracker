import React, { FormEvent, useState } from 'react';
// import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Title, Form /* Container, Toast */ } from './styles';

import logo from '../../assets/logo.png';
import api from '../../services/api';

const QueryExecute: React.FC = () => {
  const [author, setAuthor] = useState('');
  const [query, setQuery] = useState('');

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    await api.post('query', {
      author,
      query,
    });
  }

  return (
    <>
      <img src={logo} alt="Ahimas Logo" />
      <Title>Elija el nombre y ejecute la query</Title>

      <Form id="query-form" onSubmit={handleSubmit}>
        <select
          name="author"
          id="author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        >
          <option value="none" disabled>
            ¿Quién estáe ejecutando la query?
          </option>
          <option value="adson">Adson</option>
          <option value="miguel">Miguel</option>
          <option value="johanes">Johanes</option>
        </select>
        <textarea
          value={query}
          placeholder="Escriba la query"
          name="query"
          id="query"
          onChange={e => setQuery(e.target.value)}
        />
        <button type="submit">Ejecutar</button>
      </Form>
      {/* <Container>
        <Toast type="info" hasDescription>
          <FiAlertCircle size={20} />

          <div>
            <strong>Information</strong>
            <p>Ha algum problema com sua query</p>
          </div>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>

        <Toast type="success" hasDescription={false}>
          <FiAlertCircle size={20} />

          <div>
            <strong>Success</strong>
          </div>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>

        <Toast type="error" hasDescription>
          <FiAlertCircle size={20} />

          <div>
            <strong>Error</strong>
            <p>Sua query nao foi executada</p>
          </div>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </Toast>
      </Container> */}
    </>
  );
};

export default QueryExecute;

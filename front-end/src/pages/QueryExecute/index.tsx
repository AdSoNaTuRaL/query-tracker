import React, { FormEvent, useState } from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Title, Form, Container, Toast, Error } from './styles';

import logo from '../../assets/logo.png';
import api from '../../services/api';

interface IFeedback {
  id: string;
  error: number;
  mensaje: string;
  affectedRows?: number;
  changedRows?: number;
}

const QueryExecute: React.FC = () => {
  const [author, setAuthor] = useState('');
  const [query, setQuery] = useState('');
  const [inputError, setInputError] = useState('');

  const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);

  function handleRemoveToast(id: string): void {
    setFeedbacks(state => state.filter(feedback => feedback.id !== id));
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!query) {
      setInputError('Escribe la query');
      return;
    }

    try {
      const response = await api.post<IFeedback>('query', {
        author,
        query,
      });

      const feedback = response.data;

      setFeedbacks([...feedbacks, feedback]);
      setQuery('');
      setInputError('');
    } catch (err) {
      setInputError(err.message);
    }
  }

  return (
    <>
      <img src={logo} alt="Ahimas Logo" />
      <Title>Elija el nombre y ejecute la query</Title>

      <Form hasError={!!inputError} id="query-form" onSubmit={handleSubmit}>
        <select
          name="author"
          id="author"
          defaultValue="none"
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

      {inputError && <Error>{inputError}</Error>}

      <Container>
        {feedbacks.map(feedback => (
          <Toast
            key={feedback.id}
            type={feedback.error === 1 ? 'error' : 'success'}
            hasDescription
          >
            <FiAlertCircle size={20} />

            <div>
              <strong>{feedback.error === 1 ? 'Error' : 'Success'}</strong>
              <p>{feedback.mensaje}</p>
              {feedback.changedRows && (
                <p>
                  Changed Rows:
                  {feedback.changedRows}
                </p>
              )}
              {feedback.affectedRows && (
                <p>
                  Affected Rows:
                  {feedback.affectedRows}
                </p>
              )}
            </div>

            <button
              onClick={() => handleRemoveToast(feedback.id)}
              type="button"
            >
              <FiXCircle size={18} />
            </button>
          </Toast>
        ))}
      </Container>
    </>
  );
};

export default QueryExecute;

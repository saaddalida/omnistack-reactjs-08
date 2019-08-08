import React, { useState } from 'react';
import { Container } from './styles';

import logo from '../../assets/logo.svg';
import api from '../../services/api';

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('devs', {
      username
    });

    const { _id: ID } = response.data;

    history.push(`/dev/${ID}`);
  }

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <img src={logo} alt="tinDev" />
        <input
          placeholder="Type your GitHub username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Adicionar</button>
      </form>
    </Container>
  );
}

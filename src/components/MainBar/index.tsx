import React, { useState } from 'react';

import { Container, Screen } from './styles';

import names from '../../names.js';

export default function MainBar() {
  const [loadName, setLoadName] = useState('');

  function sortName() {
    const chosenName = names[Math.floor(Math.random() * (names.length - 1))];

    setLoadName(chosenName);
  }

  return (
    <>
      <Container>
        <h1 style={{ color: 'rgba(208, 62, 62, 1)' }}>Capiroto Generator</h1>
        <Screen>
          <span>{loadName}</span>
        </Screen>
        <button type="button" onClick={sortName}>
          Gerar nome
        </button>
      </Container>

      {console.log(names)}
    </>
  );
}

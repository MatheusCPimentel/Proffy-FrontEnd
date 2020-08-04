import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars0.githubusercontent.com/u/59742601?s=460&u=b186b69a73a03fe4644daf046e04b70b54d9b130&v=4" alt="Matheus Pimentel"/>
        <div>
          <strong>Matheus Pimentel</strong>
          <span>Programação</span>
        </div>
      </header>

      <p>
        Especialista em React, React Native e Node.js
        <br /><br />
        5 anos já na área.
      </p>
      <footer>
        <p>
          Preço/hora
          <strong>R$ 200,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
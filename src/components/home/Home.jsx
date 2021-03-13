import React from 'react'
import Main from '../template/Main'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>
    <Main icon="home" title="Início"
        subtitle="Segundo Projeto do caítulo de React." >
        <div className="display-4">Bem Vindo!</div>
        <hr />
        <p className="mb-0">Sistema para exemplificar a construção de um cadrastro desenvolvido em React!</p>
    </Main>

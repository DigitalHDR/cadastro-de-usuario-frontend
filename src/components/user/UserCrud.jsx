import React, { Component } from 'react'
import Main from '../template/Main'


const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuário: Incluir, Listar, Alterar e Excluir.'
}


// Lembrete apagar a class e fazer com function
export default class UserCrud extends Component {
    render() {
        return (
            <Main {...headerProps} >
                Cadastro de usuário
            </Main>
        )
    }
}
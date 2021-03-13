import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import './App.css'
import React from 'react'

import { BrowserRouter } from 'react-router-dom'


import Rotas from './Rotas'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>

    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Rotas />
            <Footer />
        </div>
    </BrowserRouter>


// HashRouter cria a hashtag sozinha na url
// BrowserRouter faz a mesma coisa porem sem hashtag, as vezes acontece de dar problemas

import React, { Component } from 'react';
import './App.css';
import Comentario from "./components/Comentario"

class App extends Component {

  state = {
    comentarios: [
      {
        nome:  'joao',
        email: 'jao@gmail.com',
        data: new Date(2020, 3, 10),
        mensagem: 'Ola tudo bem?'
      },
      {
        nome:  'Maria',
        email: 'maria@gmail.com',
        data: new Date(2020, 5, 30),
        mensagem: 'Ola tudo bem sim !'
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Projeto</h1>
        {/* cria loop */}
        {this.state.comentarios.map((comentario, indice) => (
          <Comentario 
            key={indice}
            nome={comentario.nome}  
            email={comentario.email}
            data={comentario.data}>
            {comentario.mensagem}
          </Comentario> 
        ))}
      </div>
    );
  }

}

export default App;

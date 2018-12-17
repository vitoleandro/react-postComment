import React from 'react';

import Post from './Post'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>React</h1>
        <Post title="Exemplo de titulo" />
        <Post title="Outro exemplo" />
        <Post title="Lesgalll" />
      </div>
    )
  }
}
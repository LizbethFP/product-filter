import React from 'react';
import { render } from 'react-dom';
import Header from './Header';
import Main from './Main';

const data = {
  titulo: 'Hola mundo desde React',
  url: 'react.pgn',
  text: 'Librería JS que me permite trabajar las vistas de mi app SPA',
  paragraph: 'Si quiero llegar a realizar single page application',
  items: ['React', 'React-router', 'JS'],
}

const App = () => (
  <div>
    {/* <Header title={data.titulo} url={data.url} paragraph={data.paragraph}/> */}
    {/* <Section contenido={data.text}
            arrayCursos={data.items}/> */}
    
    <Header/>
    <Main/>
  </div>
);

export default App;
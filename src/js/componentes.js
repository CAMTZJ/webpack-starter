import '../css/componentes.css';
//import webpacklogo from '../assets/img/webpack-logo.png';

 export const saludar = ( nombre ) => {
    console.log('Creado etiqueta h1');

    const h1 = document.createElement('h1');
    h1.innerHTML = `hola, ${nombre}`;

    document.body.append(h1);



   /**
    * 
    * console.log(webpacklogo);
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append( img );
    *  */ 



}
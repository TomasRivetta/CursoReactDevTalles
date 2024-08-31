# React: De cero a experto (Hooks y MERN)

## **Sección 2: Introducción a React y conceptos generales**

### ¿Que es react?

Es una libreria que nos permite crear aplicaciones, al ser declarativa hace facil seguir patrones de diseño, es eficiente, react trabaja de forma predecible, react rabaja con componentes es decir si viene una aplicacion grande la rompemos en pequeños componentes para que sea mas mantenible

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image.png>)

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%201.png>)

### Primeros pasos con REACT

babel se encarga de la traduccion de iun codigo moderno a lo que es un codigo que sea soportado por cualquier navegador web

### **Introducción a Babel**

Babel nos permite utilizar caracteristicas actuales de javaScript y poder utilizar el codigo en navegadores que no soporten la caracteristica todavia

## **Sección 4: Primeros pasos en React**

componentes : quebrar nuestra aplicacion para que sea mas mantenible, cada pieza realiza una tarea en especifico

### Que son los componentes

pequeña pieza de codigo encapsulada re-utilizable que puede tener estado o no. Estado hace referencia a que al principio tiene un estado inicial cuando se crea el componente, pero despues cuando nuestro usuario modifica al componente o algo similar cambia el estado. Estado: como se encuentra la informacion del componente en el estado del tiempo

Veamos un ejemplo:

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%202.png>)

TwtitterApp > Router > Screen/Pagina > Menu > MenuItem

Los componenetes pueden tener componentes hijos

### Primera Aplicacion con React

CON VITE

npm create vite

elegimos nombre del proyecto

nos movemos al proyecto

instalamos dependencias

y abrimos en VSC el proyecto

Estriuctura del proyecto:

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%203.png>)

CON CREATE REACT APP

npx create-react-app my-app

y nos movemos al proyecto

entramos a VSC

Estructura del proyecto:

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%204.png>)

[Introducción a los archivos robots.txt | Centro de la Búsqueda de Google  |  Documentación  |  Google for Developers](https://developers.google.com/search/docs/crawling-indexing/robots/intro?hl=es&visit_id=637909934831052162-4097033822&rd=1)

[Learn PWA  |  web.dev](https://web.dev/learn/pwa/)

[Available Scripts | Create React App (create-react-app.dev)](https://create-react-app.dev/docs/available-scripts/)

### Hola mundo en React

Borramos todos los archivos de la carpeta src y creamos un archivo main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  //document.createElement....
  return <h1>Hola mundo</h1>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### Nuestro primer Componente

rafc es un snippet para poder crear un componente con el nombre del archivo

en un archivo nuevo

luego lo importamos en nuestro main.jsx

### Retomar elementos en el Componente - Fragment

Funciona como una etiwueta que debemos importar, para poder retornar mas de una linea html en caso de ser necesario

Fragmento es un agrupador de elementos HTML

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%205.png>)

### Impresion de variables HTML

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%206.png>)

En caso de que no tenga relacion con nada la variable lo ponemos por fuera del componente

### Colocar estilos CSS

Asignar estilos globales

creamos el archivo css, le creamos los estilos y donde vamos a importarlos lo hacemos de la siguiente forma:

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%207.png>)

### Comunicacion entre Componentes - Props

cuando a un componente le pasamos por los parentesis alguna variable se le denominan props pero se destructura, las props son un objeto

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%208.png>)

Mandar desde el componente padre

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%209.png>)

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%2010.png>)

y si quiero pasar numeros

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%2011.png>)

### PropTypes

tipos de las propertis

Como trabajamos con VITE debemos añadirlo desde la terminal

npm add prop-types

y en el componente colocamos

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%2012.png>)

y abajo del componente, donde tenemos el nombre de la prop y de que tipo va a ser y que sea requerido

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%2013.png>)

### DefaultProps

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%2014.png>)

se insertan antes los default props que los propTypes

### Tarea - Componente CounterApp

[seccion4-tarea-1.md (github.com)](https://gist.github.com/Klerith/e1a731cc595c00a9794a709062eae757)

### Evento Click

nueva: [Componentes comunes (p. ej. <div>) – React](https://es.react.dev/reference/react-dom/components/common#react-event-object)

vieja: [SyntheticEvent – React (reactjs.org)](https://es.legacy.reactjs.org/docs/events.html)

### UseState - Hook

[Presentando Hooks – React (reactjs.org)](https://es.legacy.reactjs.org/docs/hooks-intro.html)

[useState – React](https://es.react.dev/reference/react/useState)

no son mas que funciones, permite cambiar el estado

import useState

import { useState } from "react";

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%2015.png>)

### **handleSubtract y handleReset**

cuando cambia el estado, el componente se vuelve a ejecutar

## **Sección 5: Pruebas unitarias y de integración - Probando las secciones anteriores**

### **Introducción a las pruebas unitarias y de integración**

Que son las pruebas?

No son una perdida de tiempo

Pruebas unitarias y de integracion: pruiebas unitarias: enfocadas en pequeñas funcionalidades

Pruebas de integracion: Enfocadas en como reaccionan varias piezas en conjunto

Caracteristicas de las pruebas:

- Faciles de escribir
- Faciles de leer
- Confiables
- Rapidas
- Principalmente unitarias

AAA

**Arrange(Arreglar)**

- preparamos el estado inicial
- preparamos el sujeto a probar
- Inicializamos variables
- importaciones necesarias
- Preparamos el ambiente a probar

**Act(Actuar)**

- Aplicamos acciones al sujeto a probar
- Llamar metodos
- Simular clicks
- Realizar acciones sobre el paso anterior

**Assert(Afirmar)**

- Observar el comportamiento resultante
- Son los resultados esperados
- Ej: que algo cambie, algo incremente o bien que nada suceda

### **Inicio de la sección - Pruebas sobre lo aprendido anteriormente**

### **Mi primera prueba y configuraciones iniciales**

[Jest · 🃏 Delightful JavaScript Testing (jestjs.io)](https://jestjs.io/)

npm install --save-dev jest

Add the following section to your `package.json`:

{
"scripts": {
"test": "jest --watchAll”
}
}

el —watchAll esta para que no tenga que estar constatntemente escribiendo npm test

**`npm test`** : para runnear los test

### **Jest - Expect - toBe**

Tener el intelissense para jest: **`npm add -D @types/jest`**

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%2016.png>)

no vamos a poder hacer una prueba de algo que no esta exportado

se acostumbra a que la carpeta test sea un espejo de nuestra carpeta src donde estan losa rchivos que voy a testear

### **para establecer que solo me testee un archivo y no todo cuando runeo un test presiono W y P y escribo el nombre del archivo a testear o lo que mas pueda cosa que sea ese archivo test seleccionado**

**Debemos configurar el Babel**

**`npm install --save-dev babel-jest @babel/core @babel/preset-env`**

creamos un archivo babel.config.cjs

y adentro colocamos:

```
module.exports = {
    presets: [
        ['@babel/preset-env',
            { targets: { esmodules: true } }
        ],
        ['@babel/preset-react',
            { targets: { runtime:'automatic' } }
        ]
    ],
};
```

Cuando comparamos objetos debemos usar el

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%2017.png>)

FUNCION QUE VAMOS A TESTEAR HAY QUE EXPORTARLA

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%2018.png>)

### Pruebas con async-await

vamos a tener que configurara de como queremos que trabaje cuando encuentre un fetch, en versiones anteriores a node 18,

creamos el archivo: `jest.config.cjs`

dentro colocamos:

```
module.export = {
  testEnviroment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
};

```

creamos el archivo: `jest.setup.cjs` . aca va codigo que se va a ejecutar justo cuando inicien mis pruebas

instalamos el paquete

`npm add -D whatwg-fetch`

dentro del jest.setup.js : colocamos `import "whatwg-fetch";`

### Pruebas sobre componentes de React

[Getting Started · Jest (jestjs.io)](https://jestjs.io/docs/getting-started)

[Testing Library | Testing Library (testing-library.com)](https://testing-library.com/)

vamos a trabajar con los 2, testing library es bueno para testear componentes, en cambio jest para testear DOM no es bueno

`npm install --save-dev @testing-library/react`

`npm add -D jest-environment-jsdom`

`npm add -D @babel/preset-react`

### Pruebas sobre CounterApp

### Simular eventos Click

```jsx
import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

/* eslint-disable no-undef */
describe("Pruebas en el <CounterApp/>", () => {
  const value = 10;

  test("Debe de hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);

    expect(container).toMatchSnapshot();
  });

  test("Debe de mostrar el valor inicial de 100 <CounterApp value={100}/>", () => {
    render(<CounterApp value={100} />);

    expect(screen.getByText(100)).toBeTruthy();

    // expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
    //   '100'
    // );
  });

  test("Debe de incrementar con el boton +1", () => {
    render(<CounterApp value={value} />);

    //Disparar evento, el screen.getByText busca el nodo que tenga lo pasado entre parentesis
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("11")).toBeTruthy;
  });

  test("Debe de decrementar con el boton -1", () => {
    render(<CounterApp value={value} />);

    //Disparar evento
    fireEvent.click(screen.getByText("-1"));
    expect(screen.getByText("9")).toBeTruthy;
  });

  test("Debe de funcionar el boton de reset", () => {
    render(<CounterApp value={value} />);
    //Disparar evento, simular el evento, realiza la suma
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));
    fireEvent.click(screen.getByText("+1"));

    //Disparar evento, tomando el boton por el aria-label
    fireEvent.click(screen.getByRole("button", { name: "btn-reset" }));
    //Tomando el boton por el aria-label
    //screen.getByRole('button', {name: 'btn-reset'})
    expect(screen.getByText("10")).toBeTruthy;
  });
});
```

## **Sección 6: GifExpertApp - Aplicación**

creamos una api key en: [https://developers.giphy.com/](https://developers.giphy.com/)

[Estilos de GifExpertApp (github.com)](https://gist.github.com/Klerith/e4fca6ac127ccb9abd1e8ad77fcd52f1) (Estilos de la app)

Estructuras de proyectos

[Structuring projects and naming components in React | HackerNoon](https://hackernoon.com/structuring-projects-and-naming-components-in-react-1261b6e18d76)

[Estructura de archivos – React (reactjs.org)](https://es.legacy.reactjs.org/docs/faq-structure.html)

Cuando quiero aplicar un cambio en un input se debe hacer de la siguiente forma:

```jsx
import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("One Punch");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  return (
    <input
      type="text"
      placeholder="Buscar gifs"
      value={inputValue}
      onChange={onInputChange}
    />
  );
};
```

### Fetch Api

[Docs | GIPHY Developers](https://developers.giphy.com/docs/api/endpoint/#search)

### **NUNCA COLOCAR LA EJECUCION DE UNA FUNCION DENTRO DE UN FUNCIONAL COMPONENT, PORQUE CADA VEZ QUE SE RENDERIZE EL COMPONENT VA A EJECUTAR 2 VECES LA FUNCION**

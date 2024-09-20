# React: De cero a experto (Hooks y MERN)

## **Sección 2: Introducción a React y conceptos generales**

### ¿Que es react?

Es una librería que nos permite crear aplicaciones, al ser declarativa hace fácil seguir patrones de diseño, es eficiente, react trabaja de forma predecible, react rabaja con componentes es decir si viene una aplicacion grande la rompemos en pequeños componentes para que sea mas mantenible

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

### useEffect

[Docs | Strict mode](https://legacy.reactjs.org/docs/strict-mode.html)

react cada vez que detecta un cambio en el componente lo reejecuta, hay ciertas funciones que permiten que esto no les suceda.
UseEffect sirve para ejecutar efectos secundarios, es decir, un proceso que querrramos ejecutar cuando algo suceda.
El useEffect no puede ser asincrono porque devuelve una funcion, no puede devolver una promesa

![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%2019.png>)

### className - Clases en CSS

en JSX no se usa la palabra class, se usa la palabra ClassName="nombreClase"

### Forma de desestructurar

```jsx
<div className="card-grid">
  {images.map((image) => (
    //OTRA FORMA DE ENVIAR EL OBJETO, todas las propiedades del image las exparso
    //para que me permita usar las propiedades del image como item
    <GifGridItem key={image.id} {...image} />
  ))}
</div>;

//OTRO COMPONENTE
export const GifGridItem = ({ title, url, id }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
```

### Custom Hook - useFecthGifs

nos permite no repetir codigo y poder reutilizar
creamos una carpeta hooks, adentro un archivo JS con el nombre del hook
un Hooks no es mas que una funcion que retorna algo

```jsx
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images, // images:images
    isLoading: isLoading,
  };
};
```

### Archivo Barril - Archivo Indice

estos archivos nos permiten no tener tantos imports, creamos un archivo index.js en el directorio donde esten los archivos a importar

```js
export * from "./AddCategory";
export * from "./GifGrid";
export * from "./GifGridItem";
```

cuando importamos el index no es necesario especificar /index
ya sabe el from que debe ir al index

```jsx
import { AddCategory, GifGrid } from "./components";
```

### Testing se proyecto de GifsApp

Arrancar el testing por los componentes que menos dependencias tienen

simulamos el evento de presionar teclas
![image.png](<React%20De%20cero%20a%20experto%20(Hooks%20y%20MERN)%203cf0076ec0d445738a3e08b310ab0540/image%2020.png>)

## MOCK

```jsx
import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifGrid/>", () => {
  const category = "One punch";

  test("Debe de mostrar el loading inicialmente", () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    expect(screen.getByText("Cargando..."));
    expect(screen.getByText(category));
  });

  test("Debe de mostrar items cuando se cargan las imagenes useFetchGifs", () => {
    const gifs = [
      {
        id: "ABC",
        title: "Saitama",
        url: "https://localhost:goku.jpg",
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });

    render(<GifGrid category={category} />);

    expect(screen.getAllByRole("img").length).toBe(1);
    //screen.debug();
  });
});
```

## Testear Hooks

https://react-hooks-testing-library.com/

```jsx
import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el Hook useFetchGifs", () => {
  test("Debe de regresar el estado inicial", () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    const { images, isLoading } = result.current;

    expect(images.length).toBe(0);
    expect(isLoading).toBeTruthy();
  });

  test("Debe de retonar un arreglo de imagenes y isLoading en false", async () => {
    const { result } = renderHook(() => useFetchGifs("One Punch"));

    //Espera la prueba hasta que el resultado sea mayor a 0
    await waitFor(() =>
      expect(result.current.images.length).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(isLoading).toBeFalsy();
  });
});
```

## **Seccion 9: Profundizando Hooks - Generales**

yarn create vite - crear a traves de yarn
yarn - instalar las dependencias
yarn dev - largar la app

### UseState

importamos useState
import { useState } from "react";
y el snippet es useStateSnippet y nos genera
el useState automaticamente
const [first, setfirst] = useState(second) - second seria el valor inicial, que puede ser un objeto, un valor primitivo, un array, etc

tambien podemos desestructurar el useState en caso de recibir un objeto

```jsx
const [{ Counter1, Counter2, Counter3 }, setCounter] = useState({
  Counter1: 10,
  Counter2: 20,
  Counter3: 30,
});
```

o podemos

```jsx
const [state, setCounter] = useState({
  Counter1: 10,
  Counter2: 20,
  Counter3: 30,
});

const { Counter1, Counter2, Counter3 } = state;
```

Si queremos modificar solo 1 propiedad y dejar las otras iguales,

```jsx
import { useState } from "react";

export const CounterApp = () => {
  const [state, setCounter] = useState({
    Counter1: 10,
    Counter2: 20,
    Counter3: 30,
  });

  const { Counter1, Counter2, Counter3 } = state;

  return (
    <>
      <h1>Counter: {Counter1}</h1>
      <h1>Counter: {Counter2}</h1>
      <h1>Counter: {Counter3}</h1>

      <hr />

      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter({
            ...state,
            Counter1: Counter1 + 1,
          })
        }
      >
        +1
      </button>
    </>
  );
};
```

#### CustomHooks

Cremos un archivo js aparte y lo importamos

```js
import { useState } from "react";

export const useCounter = (initialValue = 10) => {
  const [Counter, setCounter] = useState(initialValue);

  return {
    Counter,
  };
};
```

```jsx
import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHooks = () => {
  const { Counter } = useCounter();

  return (
    <>
      <h1>Counter With Hooks: {Counter}</h1>
      <hr />
      <button className="btn btn-primary">+1</button>
      <button className="btn btn-primary">Reset</button>
      <button className="btn btn-primary">-1</button>
    </>
  );
};
```

si llamo una funcion desde el evento onClick y tal funcion recibe algo, al no pasarle nada va a recibir el evento generando que se rompa

### UseEffect

Para disparar efectos secundarios, recibe una funcion(callback) como parametro

las dependencias son las condiciones por als cuales el useEffect se va a disparar.

En caso de pasarle un arreglo vacio se dispara 1 vez.
En cambio si le paso algo entre los corchetes cada vez que cambie ese que le pase se va activar el useEffect

```jsx
useEffect(() => {
  console.log("Hola");
}, []);

useEffect(() => {
  console.log("formState Changed");
}, [formState]);

useEffect(() => {
  console.log("Email Changed");
}, [email]);
```

### useCallBack

sirve para memorizar funciones y regresa una funcion que peusa ejecutar pero cuando algo cambie

### useReducer

¿Que es un Reducer?

1. Es una funcion comun y corriente
2. Debe de ser una funcion pura: Todo lo que la funcion realize debe ser resuelto de manera interna
3. Debe de retornar un nuevo estado
4. Usualmente solo recibe dos argumentos
5. No debe de realizar tareas asincronas
6. No debe de llamar localStorage o sessionStorage

### useContext

Tenemos un componente padre y le pasa la info al hijo y ahora el nieto quiere la info y entonces va a ser del padre, al hijo y del hijo al nieto
el useContext nos ayuda a romper esa referencia

### TENGO QUE PRESTAR ATENCION AL MOMENTO DE HACER LOS RETURNS IMPLICITOS DEL MAP NO VAN CON {} VAN CON PARENTESIS

## Generar Build de produccion

`npm run build`

nos genera la carpera dist,esa carpeta es la que vamos a subir a produccion

# CONFIGURACION PARA TESTING

# Instalación y configuracion de Jest + React Testing Library

## En proyectos de React + Vite

1. Instalaciones:

```
yarn add --dev jest babel-jest @babel/preset-env @babel/preset-react
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom
```

2. Opcional: Si usamos Fetch API en el proyecto:

```
yarn add --dev whatwg-fetch
```

3. Actualizar los scripts del **package.json**

```
"scripts: {
  ...
  "test": "jest --watchAll"
```

4. Crear la configuración de babel **babel.config.js**

```
module.exports = {
    presets: [
        [ '@babel/preset-env', { targets: { esmodules: true } } ],
        [ '@babel/preset-react', { runtime: 'automatic' } ],
    ],
};
```

5. Opcional, pero eventualmente necesario, crear Jest config y setup:

**jest.config.js**

```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.js']
}
```

**jest.setup.js**

```
// En caso de necesitar la implementación del FetchAPI
import 'whatwg-fetch'; // <-- yarn add whatwg-fetch
```

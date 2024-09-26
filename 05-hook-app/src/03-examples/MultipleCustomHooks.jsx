import React from "react";
import { useCounter, useFetch } from "../hooks";
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";

export const MultipleCustomHooks = () => {
  const { Counter, decrement, increment } = useCounter(1);

  const { data, hasError, isLoading } = useFetch(
    `https://pokeapi.co/api/v2/pokemon/${Counter}`
  );

  return (
    <>
      <h1>Información de Pokemon</h1>
      <hr />

      {isLoading ? (
        <LoadingMessage />
      ) : (
        <PokemonCard
          id={Counter}
          name={data.name}
          sprites={[
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
          ]}
        />
      )}

      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

      {/*Para evitar que se muestre null */}
      {/* <h2>{data?.name}</h2> */}

      <button
        className="btn btn-primary mt-2"
        onClick={() => (Counter > 1 ? decrement() : null)}
      >
        Anteriores
      </button>

      <button className="btn btn-primary mt-2" onClick={() => increment()}>
        Siguiente
      </button>
    </>
  );
};

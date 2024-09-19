import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({
      width,
      height,
    });
  }, [id]);

  return (
    <>
      <section style={{ height: 200 }}>
        <h2 ref={pRef} className="text-capitalize">
          # {id} - {name}
        </h2>

        {/* Imagenes*/}
        <div>
          {sprites.map((sprite) => (
            <img key={sprite} src={sprite} alt={name} />
          ))}
        </div>
      </section>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading ? <h2>Cargando...</h2> : null}

      {/* {isLoading && <h2>Cargando...</h2> } */}
      {/* <LoadingMessage isLoading={isLoading} /> */}

      <div className="card-grid">
        {images.map((image) => (
          //OTRA FORMA DE ENVIAR EL OBJETO, todas las propiedades del image las exparso
          //para que me permita usar las propiedades del image como item
          <GifGridItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

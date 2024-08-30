// const newMessage = {
//   message: "Hola mundo",
//   title: "Tomas",
// };

import PropTypes from "prop-types";

export const FirstApp = ({
  title,
  subTitle = "No hay subtitulo",
  name = "Tomas",
}) => {
  // console.log(props);

  return (
    <>
      <h1 data-testid="test-title"> {title} </h1>
      <p>{subTitle}</p>
      <p>{subTitle}</p>

      <p>{name}</p>
      {/* <code> { JSON.stringify(newMessage) } </code> */}
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

// Para especificar que las variables tengan lo siguiente de forma default, sin especificarlo en la destructurizacion
// FirstApp.defaultProps = {
//   // title: "No hay ningun titulo",
//   subTitle: "No hay subtitulo",
//   name: "Tomas",
// };

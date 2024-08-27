// const newMessage = {
//   message: "Hola mundo",
//   title: "Tomas",
// };

import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
  // console.log(props);

  return (
    <>
      <h1>
        {title}, {name}
      </h1>
      <p>{subTitle}</p>
      {/* <code> { JSON.stringify(newMessage) } </code> */}
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

FirstApp.defaultProps = {
  title: "No hay ningun titulo",
  subTitle: "No hay subtitulo",
  name: "Tomas",
};

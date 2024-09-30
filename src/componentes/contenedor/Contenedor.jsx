import './Contenedor.css';
import PropTypes from 'prop-types'; // Importa PropTypes
const Contenedor = (props) => {
    const { titulo } = props;
    return (
        <>
            <h2>{titulo}</h2>
        </>
    );
};

export default Contenedor;

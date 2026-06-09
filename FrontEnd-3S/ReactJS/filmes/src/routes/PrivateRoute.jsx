import { Navigate } from "react-router-dom";
import { useContext } from "react";
import UsuarioContext from "../context/UsuarioContext";

function PrivateRoute({ children }) {

    const { usuario } = useContext(UsuarioContext);

    return usuario ? children : <Navigate to="/" />;
}

export default PrivateRoute;
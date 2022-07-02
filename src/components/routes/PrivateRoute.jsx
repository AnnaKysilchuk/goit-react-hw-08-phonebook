import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

const PrivateRoute = ({ redirectTo }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    return isLoggedIn ? <Outlet /> : <Navigate to={redirectTo} />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    redirectTo: PropTypes.string.isRequired,
};

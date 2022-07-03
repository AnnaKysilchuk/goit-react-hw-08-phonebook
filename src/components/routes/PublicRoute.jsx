import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Navigate, Outlet } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

const PublicRoute = ({ restricted = false, redirectTo }) => {
    const isLoggedIn = useSelector(getIsLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    return shouldRedirect ? <Navigate to={redirectTo} /> : <Outlet />;
};

export default PublicRoute;

PublicRoute.propTypes = {
    restricted: PropTypes.bool,
    redirectTo: PropTypes.string,
};

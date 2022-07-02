import { NavLink } from 'react-router-dom';
import style from './AuthNavigation.module.css';

export const AuthNavigation = () => {
    return (
        <nav className={style.authNavigation}>
            <NavLink
                to="/login"
                className={({ isActive }) =>
                    isActive ? style.navigationLinkActive : style.navigationLink
                }
            >
                Login
            </NavLink>
            <NavLink
                to="/register"
                className={({ isActive }) =>
                    isActive ? style.navigationLinkActive : style.navigationLink
                }
            >
                Register
            </NavLink>
        </nav>
    );
};

import { NavLink } from 'react-router-dom';
import style from './ContactsNavigation.module.css';

export const ContactsNavigation = () => {
    return (
        <nav className={style.authNavigation}>
            <NavLink
                to="/contacts"
                className={({ isActive }) =>
                    isActive ? style.navigationLinkActive : style.navigationLink
                }
            >
                My contacts
            </NavLink>
            <NavLink
                to="/add"
                className={({ isActive }) =>
                    isActive ? style.navigationLinkActive : style.navigationLink
                }
            >
                Add contact
            </NavLink>
        </nav>
    );
};

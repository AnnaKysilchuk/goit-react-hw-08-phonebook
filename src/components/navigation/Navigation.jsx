import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';
import { AuthNavigation } from './authNavigation/AuthNavigation';
import { ContactsNavigation } from './contactsNavigation/ContactsNavigation';
import { UserMenu } from './userMenu/UserMenu';
import style from './Navigation.module.css';

export const Navigation = () => {
    const isLoggedIn = useSelector(getIsLoggedIn);

    return (
        <div className={style.navigation}>
            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? style.navigationLinkActive : style.navigationLink
                    }
                >
                    Home
                </NavLink>
            </nav>
            {isLoggedIn ? <ContactsNavigation /> : <AuthNavigation />}
            {isLoggedIn && <UserMenu />}
        </div>
    );
};

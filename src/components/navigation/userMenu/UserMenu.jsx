import { useDispatch, useSelector } from 'react-redux';
import { getUserName, getUserEmail } from '../../../redux/auth/authSelectors';
import { logout } from '../../../redux/auth/authOperations';
import style from './UserMenu.module.css';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const email = useSelector(getUserEmail);
    const name = useSelector(getUserName);

    return (
        <div className={style.userMenuThumb}>
            <div className={style.userMenuInfo}>
                <span className={style.userMenuName}>
                    Welcome,
                    <span className={style.userName}>{name}</span>
                </span>
                <br />
                <span className={style.userMenuEmail}>({email})</span>
            </div>
            <button className={style.userMenuBtn} type="button" onClick={() => dispatch(logout())}>
                Log out
            </button>
        </div>
    );
};

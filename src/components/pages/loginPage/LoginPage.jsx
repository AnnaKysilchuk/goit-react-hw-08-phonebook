import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { login } from '../../../redux/auth/authOperations';
import style from './LoginPage.module.css';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(login({ email, password }));
        reset();
    };

    const reset = () => {
        setEmail('');
        setPassword('');
    };

    const id = {
        email: nanoid(),
        password: nanoid(),
    };

    return (
        <div className={style.loginThumb}>
            <form className={style.inputForm} onSubmit={handleSubmit}>
                <label className={style.label}>
                    <input
                        type="email"
                        name="email"
                        id={id.email}
                        required
                        className={style.inputArea}
                        value={email}
                        placeholder="Input your email"
                        onChange={handleChange}
                    />
                </label>
                <label className={style.label}>
                    <input
                        type="password"
                        name="password"
                        id={id.password}
                        required
                        className={style.inputArea}
                        value={password}
                        placeholder="Input your password"
                        onChange={handleChange}
                    />
                </label>
                <div className={style.addContactBtnThumb}>
                    <button type="submit" className={style.loginBtn}>
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

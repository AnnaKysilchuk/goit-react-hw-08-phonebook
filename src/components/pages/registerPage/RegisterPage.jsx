import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/authOperations';
import style from './RegisterPage.module.css';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
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
        dispatch(register({ name, email, password }));
        reset();
    };

    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div className={style.registerThumb}>
            <form className={style.inputForm} onSubmit={handleSubmit}>
                <label className={style.label}>
                    <input
                        type="text"
                        name="name"
                        required
                        className={style.inputArea}
                        value={name}
                        placeholder="Input your name"
                        onChange={handleChange}
                    />
                </label>
                <label className={style.label}>
                    <input
                        type="email"
                        name="email"
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
                        required
                        className={style.inputArea}
                        value={password}
                        placeholder="Input your password"
                        onChange={handleChange}
                    />
                </label>
                <div className={style.addContactBtnThumb}>
                    <button type="submit" className={style.registerBtn}>
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
}

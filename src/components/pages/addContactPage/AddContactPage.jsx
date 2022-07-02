import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useAddContactMutation, useGetContactsQuery } from '../../../redux/contacts/contactsSlice';
import style from './AddContactPage.module.css';

export default function AddContactPage() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const { data: contacts } = useGetContactsQuery();
    const [addContact] = useAddContactMutation();

    const nameInputId = nanoid();
    const numberInputId = nanoid();

    const onAddContact = contact => {
        if (contacts && contacts.flatMap(item => item.name).includes(contact.name)) {
            Notify.failure(`${contact.name} is already in your contacts.`);
            return;
        }
        addContact(contact);
    };

    const handleSubmit = event => {
        event.preventDefault();
        onAddContact({
            name: name,
            number: number,
        });
        Notify.success('Woww! New contact is added)');
        reset();
    };

    const handleChange = event => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'number':
                setNumber(value);
                break;
            default:
                return;
        }
    };

    const reset = () => {
        setName('');
        setNumber('');
    };

    return (
        <div className={style.addContactThumb}>
            <form className={style.inputForm} onSubmit={handleSubmit}>
                <label className={style.label}>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        id={nameInputId}
                        className={style.inputArea}
                        value={name}
                        placeholder="Input contact's name"
                        onChange={handleChange}
                    />
                </label>
                <label className={style.label}>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        id={numberInputId}
                        className={style.inputArea}
                        value={number}
                        placeholder="Input contact's number"
                        onChange={handleChange}
                    />
                </label>
                <div className={style.addContactBtnThumb}>
                    <button type="submit" className={style.addContactBtn}>
                        Add contact
                    </button>
                </div>
            </form>
        </div>
    );
}

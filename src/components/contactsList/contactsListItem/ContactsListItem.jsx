import PropTypes from 'prop-types';
import { useDeleteContactMutation } from '../../../redux/contacts/contactsSlice';
import style from './ContactsListItem.module.css';

export const ContactsListItem = ({ name, number, id }) => {
    const [deleteBtn] = useDeleteContactMutation();
    return (
        <tr className={style.tableRaw}>
            <td className={style.tableData}>{name}</td>
            <td className={style.tableData}>{number}</td>
            <td className={style.tableData}>
                <button className={style.deleteBtn} type="button" onClick={() => deleteBtn(id)}>
                    Delete
                </button>
            </td>
        </tr>
    );
};

ContactsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

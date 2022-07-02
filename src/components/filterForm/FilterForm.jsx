import { useSelector, useDispatch } from 'react-redux/es/exports';
import { changeFilter } from '../../redux/contacts/filterSlice';
import style from './FilterForm.module.css';

export const FilterForm = () => {
    const filter = useSelector(state => state.filter.filter);
    const dispatch = useDispatch();

    return (
        <div className={style.filterForm}>
            <label>
                <input
                    type="text"
                    name="filterInput"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                    className={style.filterInputArea}
                    value={filter}
                    placeholder="Find contacts by name"
                    onChange={e => dispatch(changeFilter(e.target.value))}
                />
            </label>
        </div>
    );
};

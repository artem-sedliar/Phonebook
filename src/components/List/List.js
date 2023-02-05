import { useDispatch, useSelector } from 'react-redux';
import style from './List.module.css';
import { removeContact } from 'redux/contacts/actions';
import { getContactsList, getFilterName } from 'redux/contacts/selectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContactsList);
  const filter = useSelector(getFilterName);

  const onRemoveContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <>
      <ul>
        {contacts.map(
          ({ id, name, number }) =>
            name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 && (
              <li key={id} className={style.list}>
                <span className={style.name}>{name}</span>: {number}
                <button
                  type="button"
                  onClick={() => onRemoveContact(id)}
                  title={name}
                  className={style.button}
                >
                  Delete
                </button>
              </li>
            )
        )}
      </ul>
    </>
  );
};

export default ContactList;
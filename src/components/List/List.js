import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import style from './List.module.css';
import { getFilterName } from 'redux/filter';

const List = ({ contacts, onDelete }) => {
  const filter = useSelector(getFilterName);

  return (
    <>
      <ul>
        {contacts.map(
          ({ id, name, phone }) =>
            name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 && (
              <li key={id} className={style.list}>
                <span className={style.name}>{name}</span>: {phone}
                <button
                  type="button"
                  onClick={() => onDelete(id)}
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

List.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.number.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default List;
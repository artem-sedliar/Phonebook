import { PropTypes } from 'prop-types';
import style from './Filter.module.css';

const Filter = ({ filter, onChange }) => {
  return (
    <>
      <label htmlFor="filter" className={style.label}>
        Find contacts by name
      </label>
      <input
        className={style.input}
        type="text"
        name="filter"
        id="filter"
        value={filter}
        onChange={onChange}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      ></input>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
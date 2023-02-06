import style from './App.module.css';

import {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
} from 'redux/contacts';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import Loader from 'components/Loader/Loader';
import List from './List/List';

export const App = () => {
  const { data, error, isFetching, isError } = useFetchContactsQuery();

  const showContactsData = data && !isError;

  const [deleteContact] = useDeleteContactMutation();
  const [addContact, { isSuccess: isAdded }] = useAddContactMutation();

  return (
    <div className={style.app}>
      <h1 className={style.mainTitle}>Phonebook</h1>
      <Form contacts={data} onAdd={addContact} isAdded={isAdded} />

      <h2 className={style.title}>Contacts</h2>
      <Filter />

      {isFetching && <Loader />}
      {isError && <b>{error.status}</b>}
      {showContactsData && (
        <List
          contacts={data}
          onDelete={deleteContact}
          isFetching={isFetching}
        />
      )}
    </div>
  );
};
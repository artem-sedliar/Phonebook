import s from './App.module.css';

import Form from './Form/Form';
import Filter from './Filter/Filter';
import List from './List/List';

export const App = () => {

  return (
    <div className={s.app}>
      <h1 className={s.mainTitle}>Phonebook</h1>
      <Form />

      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <List />
    </div>
  );
};
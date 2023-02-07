import style from './Contacts.module.css';

import {
  useFetchContactsQuery,
  useDeleteContactMutation,
  useAddContactMutation,
  useUpdateContactMutation,
} from 'redux/contactsApi';

import Form from '../../components/Form/Form';
import Filter from '../../components/Filter/Filter';
import Loader from 'components/Loader/Loader';
import List from '../../components/List/List';

import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';

const Contacts = () => {
  const { data, error, isFetching, isError } = useFetchContactsQuery();
  const showContactsData = data && !isError;

  const [addContact, { isSuccess: isAdded }] = useAddContactMutation();
  const [deleteContact] = useDeleteContactMutation();
  const [updateContact, { isSuccess: isUpdated }] = useUpdateContactMutation();

  return (
    <div className={style.book}>
      <Container>
        <Row className="justify-content-md-center d-grid">
          <Form contacts={data} onAdd={addContact} isAdded={isAdded} />

          <Filter />

          {isFetching && <Loader />}
          {isError && <b>{error.status}</b>}
          {showContactsData && (
            <List
              contacts={data}
              onDelete={deleteContact}
              onUpdate={updateContact}
              isUpdated={isUpdated}
            />
          )}
        </Row>
      </Container>
    </div>
  );
};

// UpdateForm.propTypes = {
//   onUpdate: PropTypes.func.isRequired,
//   isUpdated: PropTypes.bool.isRequired,
//   setIsClicked: PropTypes.func.isRequired,
//   id: PropTypes.number.isRequired,
// };

export default Contacts;

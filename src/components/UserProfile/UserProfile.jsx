import { PropTypes } from 'prop-types';
import style from './UserProfile.module.css';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';

const defaultImg =
  'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png';

const UserProfile = ({ user }) => {
  const { name, email } = user;

  return (
    <Container>
      {/* <Row className="justify-content-md-center"> */}
      <Row className="d-flex justify-content-center">
        <Card style={{ width: '22rem' }} className={`text-center ${style.card}`}>
          <Card.Img
            variant="top"
            src={defaultImg}
            className="mx-auto rounded-circle"
            alt="default user image"
          />
          <Card.Body>
            <Card.Title className="mb-3">{name}</Card.Title>
            <Card.Subtitle className="mb-3 text-muted">{email}</Card.Subtitle>

            <Button variant="primary">
              <Card.Link
                as={Link}
                to="/contacts"
                className="text-white text-decoration-none"
              >
                Contacts
              </Card.Link>
            </Button>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

UserProfile.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserProfile;

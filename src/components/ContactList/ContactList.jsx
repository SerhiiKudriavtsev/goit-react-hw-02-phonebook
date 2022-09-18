import PropTypes from 'prop-types';
import {List, ListItem, Name, Number, Button} from './ContactList.styled';

const ContactList = ({contacts, onDeleleButton}) =>{

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <Button type="button" id={id} onClick={onDeleleButton}>
              Delete
            </Button>
          </ListItem>
        );
      })}
  </List>
  )
}

ContactList.propTypes = {
  onDeleleButton: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  )
}


export default ContactList;
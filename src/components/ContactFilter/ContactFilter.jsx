import PropTypes from 'prop-types';
import {Div, Label, Input, Title} from './ContactFilter.styled';

const ContactFilter = ({ value, onChange }) => {
  return (
    <Div>
      <Label>
        <Title>Fine contacts by name</Title>
        <Input
          type="text"
          placeholder='Enter name'
          value={value}
          onChange={onChange}
        />
      </Label>
    </Div>
  )
};

ContactFilter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default ContactFilter;
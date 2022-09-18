import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, Div, Label, TitleForm, Input, Button} from './ContactForm.styled';

class ContactForm extends Component { 
  state = { 
    name: '',
    number: '',
  }

  handleChange = (e) => { 
    const { name, value } = e.currentTarget;
    this.setState({[name]: value})
  }

  handleSubmit = (e) => { 
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmitForm(this.state);
    this.reset();
  }

  reset = () => { 
    this.setState({
      name: '',
    number: '',
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Div>
          <Label> 
            <TitleForm>Name</TitleForm>
            <Input
              type="text"
              placeholder='Boris Jonsoniuk'
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
            />
          </Label>
          <Label>
            <TitleForm>Number</TitleForm>
              <Input
              type="tel"
                placeholder="+38 050 777 77 77"
                name="number"
                value={number}
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={this.handleChange}
              />
            </Label>
        </Div>
        
          
          <Button type="submit">Add contact</Button>
        </Form>
    );
  }
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
}

export default ContactForm;
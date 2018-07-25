import React, {Component} from 'react';
import {Button, Form, Modal, Icon, Container, Header} from 'semantic-ui-react';
import uuid from 'uuid-v4';
export class MyModal extends Component {
  constructor (props) {
    super (props);
    this.state = {
      fullName: props.updateuser === null ? '' : props.updateuser.fullName,
      dob: props.updateuser === null ? '' : props.updateuser.dob,
      number: props.updateuser === null ? '' : props.updateuser.number,
      category: props.updateuser === null ? '' : props.updateuser.category,
      error: '',
    };
  }

  onChange = e => this.setState ({[e.target.id]: e.target.value});
  onSubmit = e => {
    e.preventDefault ();
    const fullName = this.state.fullName.trim ();
    const dob = this.state.dob;
    const number = this.state.number.trim ();
    const category = this.state.category.trim ();
    const id = uuid ();

    if (fullName === '') {
      this.setState ({error: 'enter Full name '});
      return;
    }
    if (dob === '') {
      this.setState ({error: 'enter Date of Birth'});
      return;
    }
    if (number === '') {
      this.setState ({error: 'enter Phone Number '});
      return;
    }
    if (category === '') {
      this.setState ({error: 'enter Category '});
      return;
    }

    const user = {id, fullName, dob, number, category};
    this.setState ({error: ''});
    this.props.addUser (user);
    this.props.closeModal ();
  };

  onUpdate =(e)=>{
    e.preventDefault ();
    const fullName = this.state.fullName.trim ();
    const dob = this.state.dob;
    const number = this.state.number.trim ();
    const category = this.state.category.trim ();
    const id = this.props.updateuser.id.toString();

    if (fullName === '') {
      this.setState ({error: 'enter Full name '});
      return;
    }
    if (dob === '') {
      this.setState ({error: 'enter Date of Birth'});
      return;
    }
    if (number === '') {
      this.setState ({error: 'enter Phone Number '});
      return;
    }
    if (category === '') {
      this.setState ({error: 'enter Category '});
      return;
    }

    const user = {id, fullName, dob, number, category};
    this.setState ({error: ''});
    this.props.onUpdateUser(user);
    this.props.closeModal();
    
  }
  render () {
    const updateuser = this.props.updateuser;
    return (
      <Modal open={this.props.modal}>
        <Container textAlign="right">
          <Icon
            name="cancel"
            size="large"
            onClick={() => this.props.closeModal ()}
            style={{marginTop: 10, marginRight: 20}}
          />
        </Container>
        <Modal.Header>Create Contact</Modal.Header>
        <Modal.Content>
          <Header as="h3" style={{color: 'red'}}>
            {this.state.error === '' ? '' : this.state.error}
          </Header>
          <Modal.Description style={{maxWidth: 400}}>
            <Form onSubmit={updateuser === null ?  this.onSubmit : this.onUpdate}>
              <Form.Field>
                <label>Full Name</label>
                <input
                  placeholder="First Name"
                  value={this.state.fullName}
                  onChange={this.onChange.bind (this)}
                  id="fullName"
                />
              </Form.Field>
              <Form.Field>
                <label>Date Of Birth</label>
                <input
                  type="date"
                  value={this.state.dob}
                  onChange={this.onChange.bind (this)}
                  id="dob"
                />
              </Form.Field>
              <Form.Field>
                <label>Phone Number</label>
                <input
                  placeholder="Phone Number"
                  value={this.state.number}
                  onChange={this.onChange.bind (this)}
                  id="number"
                />
              </Form.Field>
              <Form.Field>
                <label>Category</label>
                <input
                  placeholder="Category"
                  value={this.state.category}
                  onChange={this.onChange.bind (this)}
                  id="category"
                />
              </Form.Field>
              {updateuser === null
                ? <Button type="submit">Submit</Button>
                : <Button type="submit">Update</Button>}
            </Form>

          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default MyModal;

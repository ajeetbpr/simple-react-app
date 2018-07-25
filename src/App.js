import React, {Component} from 'react';
import './App.css';
import {Container, Button} from 'semantic-ui-react';
import Body from './components/Body';
import MyModal from './components/MyModal';
import UserTable from './components/Body';

class App extends Component {
  state = {
    modal: false,
    users: [
      {
        id: 1,
        fullName: 'rizwan',
        dob: new Date (),
        number: '551351654065',
        category: 'something',
        selected: false,
      },
      {
        id: 2,
        fullName: 'john cena',
        dob: new Date (),
        number: '546841351684',
        category: 'something',
        selected: false,
      },
      {
        id: 3,
        fullName: 'big show',
        dob: new Date (),
        number: '654646546841',
        category: 'something',
        selected: false,
      },
      {
        id: 4,
        fullName: 'Matt hardy',
        dob: new Date (),
        number: '546841351684',
        category: 'something',
        selected: false,
      },
      {
        id: 5,
        fullName: 'tripple H',
        dob: new Date (),
        number: '654624254487',
        category: 'something',
        selected: false,
      },
    ],
    updateuser: null,
  };
  openModal = () => this.setState ({modal: true});
  closeModal = () => this.setState ({modal: false});
  addUser = user => {
    const users = this.state.users;
    users.push (user);
    this.setState ({users});
  };
  selecteUser = id => {
    const users = this.state.users.map (use => {
      if (use.id.toString () === id) {
        if (use.selected) {
          use.selected = false
        }else{
          use.selected = true
        }
      }
      return use;
    });
    this.setState ({users});
  };
  deleteUser = () => {
    const users = this.state.users.filter(use => {
      return use.selected !== true;
    });
    this.setState ({users});
  };
  updateUser = () => {
    const user = this.state.users.find (use => use.selected === true);
    if (user) {
      this.setState ({updateuser: user, modal: true});
    }
  };
  onUpdateUser = user => {
    const users = this.state.users.map (use => {
      if (use.id.toString () === user.id.toString ()) {
        use.fullName = user.fullName;
        use.dob = user.dob;
        use.number = user.number;
        use.category = user.category;
      }
      return use;
    });
  };
  render () {
    return (
      <Container text style={styles.container}>
        <div style={styles.buttonContainer}>
          <Button style={styles.button} onClick={() => this.openModal ()}>
            New Contact
          </Button>
          <Button style={styles.button} onClick={() => this.updateUser ()}>
            Update Contact
          </Button>
          <Button style={styles.button} onClick={() => this.deleteUser ()}>
            Delete Contact
          </Button>
        </div>
        <Body users={this.state.users} selecteUser={this.selecteUser} />
        {this.state.modal
          ? <MyModal
              modal={this.state.modal}
              closeModal={this.closeModal}
              addUser={this.addUser}
              updateuser={this.state.updateuser}
              onUpdateUser={this.onUpdateUser}
            />
          : null}
      </Container>
    );
  }
}

export default App;

const styles = {
  container: {
    paddingTop: 20,
  },
  buttonContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: 10,
  },
  button: {
    margin: 2,
  },
};

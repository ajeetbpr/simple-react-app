import React, {Component} from 'react';
import {Icon, Checkbox, Menu, Table} from 'semantic-ui-react';
import moment from 'moment';
class UserTable extends Component {
  render () {
    return (
      <Table celled compact selectable={true}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Select</Table.HeaderCell>
            <Table.HeaderCell>Full Name</Table.HeaderCell>
            <Table.HeaderCell>Birth Date</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Category</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.users.map ((us, i) => {
            return (
              <Table.Row key={i}>
                <Table.Cell>
                  <Checkbox
                    onChange={() => this.props.selecteUser (us.id.toString ())}
                    checked={us.selected}
                  />
                </Table.Cell>
                <Table.Cell>{us.fullName}</Table.Cell>
                <Table.Cell>{moment (us.dob).format ('DD-MM-YYYY')}</Table.Cell>
                <Table.Cell>{us.number}</Table.Cell>
                <Table.Cell>{us.category}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="5">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    );
  }
}

export default UserTable;

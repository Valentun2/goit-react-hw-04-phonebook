import { ContactItem } from 'components/ContactItem/ContactItem';
import { Component } from 'react';

export class ContactList extends Component {
  render() {
    
    return (
      <ul>
        {this.props.arr().map(item => {
          return (
            <ContactItem
              name={item.name}
              phone={item.number}
              key={item.id}
              id={item.id}
              deleteContact={this.props.deleteContact}
            />
          );
        })}
      </ul>
    );
  }
}

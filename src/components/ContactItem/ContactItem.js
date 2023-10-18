import { Component } from 'react';
import styles from './ContactItem.module.css';
export class ContactItem extends Component {
  onClick = evt => {
    this.props.deleteContact(evt.currentTarget.id);
  };
  render() {
    return (
      <li className={styles.item}>
        <p>
          {this.props.name}:{this.props.phone}
        </p>
        <button id={this.props.id} name={this.props.name} type="button" onClick={this.onClick}>
          Delete
        </button>
      </li>
    );
  }
}

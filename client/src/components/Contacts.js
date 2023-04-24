import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useContacts } from '../contexts/ContactsProvider';

export default function Contacts({darkMode}) {
  const { contacts } = useContacts()

  return (
    <ListGroup variant="flush">
      {contacts.map(contact => (
        <ListGroup.Item key={contact.id} variant={`${darkMode?'danger':'primary'}`}>
          {contact.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

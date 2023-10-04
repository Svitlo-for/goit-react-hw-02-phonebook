import { Contact } from 'components/Contact/Contact';

export const ContactBook = ({ contacts, onDelete }) => {
  return (
    <ul className="bookList">
      {contacts.map(contact => (
        <li key={contact.id}>
          <Contact
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
};

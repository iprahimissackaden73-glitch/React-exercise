// ContactList.jsx
import ContactList from "./contactItem";
const ContactList = ({ contacts, dispatch, setEditingContact }) => {
  return (
    <div>
      <h3>Contacts</h3>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map((contact) => (
            <contactItem
              key={contact.id}
              contact={contact}
              dispatch={dispatch}
              setEditingContact={setEditingContact}
            />
          ))}
        </ul>
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default ContactList;


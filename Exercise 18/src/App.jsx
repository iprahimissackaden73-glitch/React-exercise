
import { useReducer, useState } from 'react';
import { reducer, initialState } from './reducer';
import ContactForm from './contactForm';
import ContactList from './contactList';


function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [editingContact, setEditingContact] = useState(null);

  return (
    <div>
      <h2>Contact Management App</h2>

      <ContactForm
        dispatch={dispatch}
        editingContact={editingContact}
        setEditingContact={setEditingContact}
      />

      <ContactList
        contacts={state}
        dispatch={dispatch}
        setEditingContact={setEditingContact}
      />
    </div>
  );
}

export default App;

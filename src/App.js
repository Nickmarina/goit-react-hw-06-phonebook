import { createUseStyles } from 'react-jss';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

const useStyles = createUseStyles({
  container: {
    marginLeft: 30,
  },
});

const App = () => {
  const classes = useStyles();

  // const handleChangeContacts = newContact => {
  //   return contacts.find(contact => contact.name === newContact.name)
  //     ? alert(`${newContact.name} is already in contacts`)
  //     : setContacts(prevState => [...prevState, newContact]);
  // };

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem('contacts'));
  //   setContacts(data);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  return (
    <div className={classes.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;

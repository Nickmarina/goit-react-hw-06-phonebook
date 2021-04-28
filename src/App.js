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

import { useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/actions';
import useStyles from './styles';

const Filter = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(filterContacts(e.target.value));
  return (
    <div>
      <h4 className={classes.title}>Find contacts by name</h4>
      <input
        className={classes.input}
        type="text"
        onChange={handleFilter}
      ></input>
    </div>
  );
};

export default Filter;

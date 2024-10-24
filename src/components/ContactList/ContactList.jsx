import Contact from '../Contact/Contact';

import css from './ContactList.module.css';
import {
	selectError,
	selectFilteredContacts,
	selectLoading,
} from '../../redux/contactsSlice';

import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps';


const ContactList = () => {
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ul className={css.list}>
      {loading && <Loader />}
      {!loading && contacts && !error &&
        contacts.map(({ id, number, name }) => (
          <Contact key={id} id={id} number={number} name={name} />
        ))}
      {error && <div>`Error: ${error}`</div>}
    </ul>
  )
}

export default ContactList
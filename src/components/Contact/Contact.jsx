import React from 'react'
import { HiUser, HiPhone } from "react-icons/hi2";
import css from "./Contact.module.css"
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';



const Contact = ({ id, name,number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <li className={css.contactItem}>

      <div className={css.contactInfo}>

        <div className={css.info}>
          <HiUser size={"20px"} title="contact icon" />
          <p>{name}</p>
        </div>

        <div className={css.info}>
          <HiPhone size={"20px"} title="phone icon" />
          <p>{number}</p> 
        </div>

      </div>

      <button
        className={css.deleteButton}
        onClick={handleDelete}>
        Delete
      </button>
    </li>
  )
}



Contact.propTypes = {
  contact: PropTypes.object,
  onDelete: PropTypes.func,
};

export default Contact
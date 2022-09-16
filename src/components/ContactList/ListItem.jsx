import PropTypes from 'prop-types';
import { FiPhone } from 'react-icons/fi';
import { AiFillDelete } from 'react-icons/ai';
import { ListItem, Button } from './contactList.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactListItem = ({id, name, number}) => {
  const dispatch = useDispatch();  
  return (
        <ListItem key={id}>
          <FiPhone />
          {name}: {number}
          <Button onClick={() => dispatch(deleteContact(id))}>
            <AiFillDelete />
            Delete
          </Button>
        </ListItem>
    )
}

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
  };
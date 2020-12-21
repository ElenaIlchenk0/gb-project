import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../../store/actions/chatActions';
import { makeStyles } from '@material-ui/core/styles';
import { push } from 'connected-react-router';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChatIcon from '@material-ui/icons/Chat';
import ChatDialog from '../ChatDialog/ChatDialog';
import './ChatList.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    marginRight: '20px',
    border: '1px solid #eee',
    borderRadius: '5px',
    padding: '0 20px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  listItem: {
    color: '#065032',
  },
  iconItem: {
    color: '#21A089',
  },
}));

export default function SelectedListItem(props) {
  const dispatch = useDispatch();
  const chats = useSelector((state) => state.chatReducer.chatList);
  const contacts = useSelector((state) => state.chatReducer.contactList);

  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(props.activeChat);

  useEffect(() => {
    setSelectedIndex(props.activeChat);
  }, [props.activeChat]);

  const addNewChat = useCallback(
    (title) => {
      dispatch(addChat(title));
    },
    [dispatch]
  );

  const handleListItemClick = (index, chatId) => (dispatch) => {
    setSelectedIndex(index);
    props.chatHandler(index);

    dispatch(push(chatId));
  };

  const list = [];
  const chatrender = () => {
    for (let id in chats) {
      list.push(
        <ListItem
          className={classes.listItem}
          button
          selected={selectedIndex === id}
          onClick={() => handleListItemClick(id, `/chat/${id}/`)(dispatch)}
          key={id}
        >
          <ListItemIcon>
            <ChatIcon className={classes.iconItem} />
          </ListItemIcon>
          <ListItemText primary={chats[id].name} />
        </ListItem>
      );
    }
    return list;
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {chatrender()}
      </List>
      <ChatDialog contacts={contacts} addChat={addNewChat} />
    </div>
  );
}

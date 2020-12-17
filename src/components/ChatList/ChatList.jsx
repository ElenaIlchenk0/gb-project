import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ChatIcon from '@material-ui/icons/Chat'
import ChatDialog from '../ChatDialog/ChatDialog'
import './ChatList.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '30%',
    marginRight: '20px',
    border: '1px solid #eee',
    borderRadius: '5px',
    padding: '0 20px',
    boxSizing: 'border-box',
  },
  listItem: {
    color: '#065032',
  },
  iconItem: {
    color: '#21A089',
  },
}))

export default function SelectedListItem(props) {
  const classes = useStyles()
  const [selectedIndex, setSelectedIndex] = React.useState(props.activeChat)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
    props.chatHandler(index)
  }

  let list = []
  const chatrender = () => {
    for (let id in props.chats) {
      list.push(
        <Link to={`/chat/${id}/`} key={id}>
          <ListItem
            className={classes.listItem}
            button
            selected={selectedIndex === id}
            onClick={(event) => handleListItemClick(event, id)}
          >
            <ListItemIcon>
              <ChatIcon className={classes.iconItem} />
            </ListItemIcon>
            <ListItemText primary={props.chats[id].name} />
          </ListItem>
        </Link>
      )
    }
    return list
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {chatrender()}
      </List>
      <ChatDialog
        contacts={props.contacts}
        addChat={props.addChat}
        chats={props.chats}
      />
    </div>
  )
}

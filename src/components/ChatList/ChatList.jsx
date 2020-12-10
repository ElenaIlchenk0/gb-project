import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import ChatIcon from '@material-ui/icons/Chat'
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
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index)
  }

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {props.chats.map((chat) => (
          <ListItem
            className={classes.listItem}
            button
            selected={selectedIndex === chat.id}
            onClick={(event) => handleListItemClick(event, chat.id)}
          >
            <ListItemIcon>
              <ChatIcon className={classes.iconItem} />
            </ListItemIcon>
            <ListItemText primary={chat.name} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}
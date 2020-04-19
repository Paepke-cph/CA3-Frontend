import React, { useState } from 'react';
import { Button, TextField, Collapse } from '@material-ui/core';
import { apiUtils } from '../utils/apiUtils';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SendIcon from '@material-ui/icons/Send';

export default function Link() {
  const [response, setResponse] = useState("");
  const [url, setUrl] = useState("");

  const onChange = (evt) => {
    setUrl(evt.target.value);
  };

  const performScrape = () => {
      let options = apiUtils.makeOptions('POST',{
          url: url
        }, false);
      apiUtils.fetchData('/scrape', options)
      .then((data) => {setResponse(data)});
  }

  function LinkTree({ node }) {
    const [open, setOpen] = useState(false);
    
    const handleClick = e => {
      setOpen(!open);
    }

    const prim = `Chilren Count: ${node.childrenCount}`;
    if (!node.children) {
      return(
        <List>
          <ListItem button>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary={node.url} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={prim} />
          </ListItem>
        </List>
      );
    }else {
      return (
        <List >
          <ListItem button >
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary={node.url} />
          </ListItem>
          <ListItem button>
            <ListItemText primary={prim} />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Children" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={open} timeout='auto' unmountOnExit>
            {node.children.map(c => ( <LinkTree node={c} />))}
          </Collapse>
          
        </List>
      );
    }
  };
 const drawScrape = () => {
      if(response !== undefined &&  Array.isArray(response)) {
          return (
            <List>
              {<LinkTree node={response[0]}/>}
            </List>
          );
      } else {
          return "";
      }
  }

  return(
      <div>
        <h1>What is being linked to?</h1>
        <form>
            <TextField
            onChange={onChange}
            size='small'
            id='url'
            label='URL'
            variant='outlined'
            value={url}
            />
            <Button variant='outlined' color='primary' onClick={performScrape}>
            Find Links
            </Button>
        </form>
        {drawScrape()}
    </div>
  );
}

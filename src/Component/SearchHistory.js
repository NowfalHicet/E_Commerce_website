import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

const SearchHistory = ({ history, onHistoryItemClick }) => {
  return (
    <List>
      {history.map((item, index) => (
        <ListItem key={index}  onClick={() => onHistoryItemClick(item)}>
          {item}
        </ListItem>
      ))}
    </List>
  );
};

export default SearchHistory;

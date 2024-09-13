import React, { useState } from 'react';
import { IconButton, ListItem, ListItemText, Checkbox, TextField, Button, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CancelIcon from '@mui/icons-material/Cancel';

const TodoItem = ({ todo, onToggleComplete, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ title: todo.title, description: todo.description });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTodo({ title: todo.title, description: todo.description });
  };

  const handleUpdateClick = () => {
    onUpdate({ ...todo, ...editedTodo });
    setIsEditing(false);
  };

  return (
    <ListItem>
      {isEditing ? (
        <Box sx={{ width: '100%' }}>
          <TextField
            label="Title"
            value={editedTodo.title}
            onChange={(e) => setEditedTodo({ ...editedTodo, title: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={editedTodo.description}
            onChange={(e) => setEditedTodo({ ...editedTodo, description: e.target.value })}
            fullWidth
            margin="normal"
          />
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button
              variant="contained"
              color="success"
              onClick={handleUpdateClick}
            >
              Update
            </Button>

            <Button
              variant="outlined"
              sx={{ color: 'grey' }}
              startIcon={<CancelIcon sx={{ color: 'grey' }} />}
              onClick={handleCancelEdit}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      ) : (
        <>
          <Checkbox
            checked={todo.completed}
            onChange={() => onToggleComplete(todo.id)}
          />
          <ListItemText
            primary={todo.title}
            secondary={todo.description}
            sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
          />
          <Box sx={{ display: 'flex' }}>
            <IconButton
              edge="end"
              aria-label="edit"
              onClick={handleEditClick}
              sx={{ color: 'green' }}
            >
              <EditIcon />
            </IconButton>

            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => onDelete(todo.id)}
              sx={{ color: 'red' }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        </>
      )}
    </ListItem>
  );
};

export default TodoItem;

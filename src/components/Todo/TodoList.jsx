import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { green, grey, yellow } from '@mui/material/colors';

const TodoList = ({ todos, onToggleComplete, onDelete, onUpdate }) => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [editTodo, setEditTodo] = useState(null); 
  const [editedTitle, setEditedTitle] = useState(''); 
  const [editedDescription, setEditedDescription] = useState('');

  const handleOpenDialog = (todo) => {
    setSelectedTodo(todo);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedTodo(null);
  };

  const handleConfirmDelete = () => {
    if (selectedTodo) {
      onDelete(selectedTodo.id);
      handleCloseDialog();
    }
  };

  const handleEdit = (todo) => {
    setEditTodo(todo);
    setEditedTitle(todo.title);
    setEditedDescription(todo.description);
  };

  const handleCancelEdit = () => {
    setEditTodo(null);
    setEditedTitle('');
    setEditedDescription('');
  };

  const handleUpdateTodo = () => {
    if (editTodo) {
      onUpdate({ ...editTodo, title: editedTitle, description: editedDescription });
      handleCancelEdit();
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><Typography variant="h6">Title</Typography></TableCell>
              <TableCell><Typography variant="h6">Description</Typography></TableCell>
              <TableCell><Typography variant="h6">Status</Typography></TableCell>
              <TableCell><Typography variant="h6">Actions</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell>
                  {editTodo && editTodo.id === todo.id ? (
                    <TextField
                      value={editedTitle}
                      onChange={(e) => setEditedTitle(e.target.value)}
                      fullWidth
                    />
                  ) : (
                    todo.title
                  )}
                </TableCell>
                <TableCell>
                  {editTodo && editTodo.id === todo.id ? (
                    <TextField
                      value={editedDescription}
                      onChange={(e) => setEditedDescription(e.target.value)}
                      fullWidth
                    />
                  ) : (
                    todo.description
                  )}
                </TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => onToggleComplete(todo.id)}
                    sx={{
                      backgroundColor: todo.completed ? grey[500] : yellow[500],
                      color: 'white',
                      '&:hover': {
                        backgroundColor: todo.completed ? grey[700] : yellow[700],
                      },
                    }}
                  >
                    {todo.completed ? 'Completed' : 'Incomplete'}
                  </Button>
                </TableCell>
                <TableCell>
                  {editTodo && editTodo.id === todo.id ? (
                    <>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={handleUpdateTodo}
                        sx={{ mr: 2 }}
                      >
                        Update
                      </Button>
                      <Button
                        variant="contained"
                        color="inherit"
                        onClick={handleCancelEdit}
                        sx={{ backgroundColor: grey[500], color: 'white' }}
                      >
                        Cancel
                      </Button>
                    </>
                  ) : (
                    <>
                      <IconButton
                        color="success"
                        onClick={() => handleEdit(todo)}
                        disabled={todo.completed} 
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleOpenDialog(todo)}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Delete Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the todo titled "{selectedTodo?.title}"? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} sx={{ color: grey[500] }}>
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TodoList;

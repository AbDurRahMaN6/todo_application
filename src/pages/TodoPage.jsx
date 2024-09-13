import React, { useState } from 'react';
import TodoForm from '../components/Todo/TodoForm';
import TodoList from '../components/Todo/TodoList';
import Navbar from '../navbar/Navbar';
import { Box, Container, Typography, Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo, id: Date.now(), completed: false }]);
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setOpenDialog(false); 
  };

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
      handleDeleteTodo(selectedTodo.id);
    }
  };

  const handleUpdateTodo = (updatedTodo) => {
    setTodos(todos.map(todo =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    ));
  };

  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ mt: 4 }}>
          <Typography variant="h4" gutterBottom>Create a Todo Item</Typography>
          <TodoForm onAddTodo={handleAddTodo} />
          <TodoList
            todos={todos}
            onToggleComplete={handleToggleComplete}
            onDelete={handleOpenDialog} 
            onUpdate={handleUpdateTodo}
          />
        </Box>

        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
        >
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogContent>
            <Typography>Are you sure you want to delete the todo item "{selectedTodo?.title}"?</Typography>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={handleConfirmDelete} color="error">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
};

export default TodoPage;

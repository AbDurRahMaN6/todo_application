import React, { useState } from 'react';
import TodoForm from '../components/Todo/TodoForm';
import TodoList from '../components/Todo/TodoList';
import Navbar from '../navbar/Navbar';
import { Box, Container, Snackbar, Alert } from '@mui/material';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleAddTodo = (newTodo) => {
    if (!newTodo.title || !newTodo.description) {
      setSnackbar({ open: true, message: 'You can’t create an empty Todo!', severity: 'error' });
      return;
    }
    setTodos([...todos, { ...newTodo, id: Date.now(), completed: false }]);
    setSnackbar({ open: true, message: 'Todo successfully created!', severity: 'success' });
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setSnackbar({ open: true, message: 'Todo successfully deleted!', severity: 'error' });
  };

  const handleUpdateTodo = (updatedTodo) => {
    if (!updatedTodo.title || !updatedTodo.description) {
      setSnackbar({ open: true, message: 'You can’t update to an empty Todo!', severity: 'error' });
      return;
    }
    setTodos(todos.map(todo =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    ));
    setSnackbar({ open: true, message: 'Todo successfully updated!', severity: 'success' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <>
      <Navbar />
      <Container>
        <Box sx={{ mt: 4 }}>
          <TodoForm onAddTodo={handleAddTodo} />
          <TodoList
            todos={todos}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTodo}
            onUpdate={handleUpdateTodo} 
          />
        </Box>
      </Container>
      
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default TodoPage;

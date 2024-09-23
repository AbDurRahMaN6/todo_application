// // import React, { useState } from 'react';
// // import TodoForm from '../components/Todo/TodoForm';
// // import TodoList from '../components/Todo/TodoList';
// // import Navbar from '../navbar/Navbar';
// // import { Box, Container, Snackbar, Alert, Typography } from '@mui/material';

// // const TodoPage = () => {
// //   const [todos, setTodos] = useState([]);
// //   const [snackbar, setSnackbar] = useState({ open: false, message: '', type: 'success' });

// //   const handleAddTodo = (newTodo) => {
// //     if (newTodo.title && newTodo.description) {
// //       setTodos([...todos, { ...newTodo, id: Date.now(), completed: false }]);
// //       // Show success snackbar
// //       setSnackbar({ open: true, message: 'Todo successfully created!', type: 'success' });
// //     } else {
// //       // Show error snackbar if the title or description is empty
// //       setSnackbar({ open: true, message: 'You can\'t be created. Title and description are required.', type: 'error' });
// //     }
// //   };

// //   const handleToggleComplete = (id) => {
// //     setTodos(todos.map(todo =>
// //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
// //     ));
// //   };

// //   const handleDeleteTodo = (id) => {
// //     setTodos(todos.filter(todo => todo.id !== id));
// //     // Show success snackbar for deletion
// //     setSnackbar({ open: true, message: 'Todo successfully deleted!', type: 'success' });
// //   };

// //   const handleUpdateTodo = (updatedTodo) => {
// //     setTodos(todos.map(todo =>
// //       todo.id === updatedTodo.id ? updatedTodo : todo
// //     ));
// //     // Show success snackbar for update
// //     setSnackbar({ open: true, message: 'Todo successfully updated!', type: 'success' });
// //   };

// //   const handleCloseSnackbar = () => {
// //     setSnackbar({ ...snackbar, open: false });
// //   };

// //   return (
// //     <>
// //       <Navbar />
// //       <Container>
// //         <Box sx={{ mt: 4 }}>
// //         <Typography variant="h4" sx={{ mb: 4 }}>Create a Todo</Typography>
// //           <TodoForm onAddTodo={handleAddTodo} />
// //           <TodoList
// //             todos={todos}
// //             onToggleComplete={handleToggleComplete}
// //             onDelete={handleDeleteTodo}
// //             onUpdate={handleUpdateTodo} // Pass the update handler
// //           />
// //         </Box>

// //         {/* Snackbar for success and error messages */}
// //         <Snackbar
// //           open={snackbar.open}
// //           autoHideDuration={4000}
// //           onClose={handleCloseSnackbar}
// //           anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} // Set the position of the Snackbar
// //         >
// //           {/* <Alert onClose={handleCloseSnackbar} severity={snackbar.type} sx={{ width: '100%' }}>
// //             {snackbar.message}
// //           </Alert> */}
// //           <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
// //             {snackbar.message}
// //           </Alert>
// //         </Snackbar>
// //       </Container>
// //     </>
// //   );
// // };

// // export default TodoPage;


// import React, { useState } from 'react';
// import TodoForm from '../components/Todo/TodoForm';
// import TodoList from '../components/Todo/TodoList';
// import Navbar from '../navbar/Navbar';
// import { Box, Container, Snackbar, Alert, AlertTitle } from '@mui/material';
// import { CheckCircle } from '@mui/icons-material'; // Custom success icon

// const TodoPage = () => {
//   const [todos, setTodos] = useState([]);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', type: 'success' });

//   const handleAddTodo = (newTodo) => {
//     if (newTodo.title && newTodo.description) {
//       setTodos([...todos, { ...newTodo, id: Date.now(), completed: false }]);
//       setSnackbar({ open: true, message: 'Todo successfully created!', type: 'success' });
//     } else {
//       setSnackbar({ open: true, message: 'You can\'t be created. Title and description are required.', type: 'error' });
//     }
//   };

//   const handleToggleComplete = (id) => {
//     setTodos(todos.map(todo =>
//       todo.id === id ? { ...todo, completed: !todo.completed } : todo
//     ));
//   };

//   const handleDeleteTodo = (id) => {
//     setTodos(todos.filter(todo => todo.id !== id));
//     setSnackbar({ open: true, message: 'Todo successfully deleted!', type: 'success' });
//   };

//   const handleUpdateTodo = (updatedTodo) => {
//     setTodos(todos.map(todo =>
//       todo.id === updatedTodo.id ? updatedTodo : todo
//     ));
//     setSnackbar({ open: true, message: 'Todo successfully updated!', type: 'success' });
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   return (
//     <>
//       <Navbar />
//       <Container>
//         <Box sx={{ mt: 4 }}>
//           <TodoForm onAddTodo={handleAddTodo} />
//           <TodoList
//             todos={todos}
//             onToggleComplete={handleToggleComplete}
//             onDelete={handleDeleteTodo}
//             onUpdate={handleUpdateTodo} // Pass the update handler
//           />
//         </Box>

//         {/* Snackbar for success and error messages */}
//         <Snackbar
//           open={snackbar.open}
//           autoHideDuration={4000}
//           onClose={handleCloseSnackbar}
//           anchorOrigin={{ vertical: 'top', horizontal: 'center' }} // Full-width, centered position
//           sx={{ width: '100%', maxWidth: '100%' }} // Full width Snackbar
//         >
//           <Alert
//             onClose={handleCloseSnackbar}
//             severity={snackbar.type}
//             sx={{ width: '100%', backgroundColor: snackbar.type === 'success' ? '#4CAF50' : '#f44336', color: '#fff' }} // Custom green or red color
//             iconMapping={{
//               success: <CheckCircle fontSize="inherit" /> // Custom success icon
//             }}
//           >
//             <AlertTitle>{snackbar.type === 'success' ? 'Success' : 'Error'}</AlertTitle>
//             {snackbar.message}
//           </Alert>
//         </Snackbar>
//       </Container>
//     </>
//   );
// };

// export default TodoPage;


// TodoPage.jsx
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
      
      {/* Snackbar for success, error, and warning messages */}
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

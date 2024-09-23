import React, { useState } from 'react';
import { Box, Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, TablePagination } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { green, grey, yellow } from '@mui/material/colors';

const TodoList = ({ todos, onToggleComplete, onDelete, onUpdate }) => {
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodo, setEditTodo] = useState({ title: '', description: '' });
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const [page, setPage] = useState(0);               // Pagination state
  const [rowsPerPage, setRowsPerPage] = useState(8); // Max rows per page

  // Open the delete confirmation dialog
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

  const handleEditClick = (todo) => {
    setEditTodoId(todo.id);
    setEditTodo({ title: todo.title, description: todo.description });
  };

  const handleUpdateClick = (id) => {
    onUpdate({ ...editTodo, id });
    setEditTodoId(null);
  };

  const handleCancelClick = () => {
    setEditTodoId(null);
  };

  // Handle pagination page change
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // Handle rows per page change
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {todos.length === 0 ? (
        <Typography variant="h1" align='center' color="textSecondary" sx={{ mt: 4 }}>
          No items available.
        </Typography>
      ) : (
        <TableContainer component={Paper} sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h1" align='center' color="textSecondary" sx={{ mt: 4 }}>
          Items List
        </Typography>
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
              {/* Paginate Todos */}
              {todos.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((todo) => (
                <TableRow key={todo.id}>
                  <TableCell>
                    {editTodoId === todo.id ? (
                      <TextField
                        value={editTodo.title}
                        onChange={(e) => setEditTodo({ ...editTodo, title: e.target.value })}
                      />
                    ) : (
                      todo.title
                    )}
                  </TableCell>
                  <TableCell>
                    {editTodoId === todo.id ? (
                      <TextField
                        value={editTodo.description}
                        onChange={(e) => setEditTodo({ ...editTodo, description: e.target.value })}
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
                        backgroundColor: todo.completed ? green[500] : yellow[500],
                        color: 'white',
                        '&:hover': { backgroundColor: todo.completed ? green[700] : yellow[700] }
                      }}
                      disabled={editTodoId === todo.id} // Disable status change if editing
                    >
                      {todo.completed ? 'Completed' : 'Incomplete'}
                    </Button>
                  </TableCell>
                  <TableCell>
                    {editTodoId === todo.id ? (
                      <>
                        <Button
                          variant="contained"
                          color="success"
                          onClick={() => handleUpdateClick(todo.id)}
                          sx={{ mr: 1 }}
                        >
                          Update
                        </Button>
                        <Button
                          variant="contained"
                          color="inherit"
                          onClick={handleCancelClick}
                          sx={{ backgroundColor: grey[500], color: 'white' }}
                        >
                          Cancel
                        </Button>
                      </>
                    ) : (
                      <>
                        <IconButton
                          color="success"
                          onClick={() => handleEditClick(todo)}
                          disabled={todo.completed} // Disable editing if todo is completed
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
          {/* Pagination */}
          <TablePagination
            rowsPerPageOptions={[5, 8, 10]}
            component="div"
            count={todos.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
      >
        <DialogTitle>Delete Todo</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the todo titled "{selectedTodo?.title}"? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="inherit" sx={{ color: grey[500] }}>
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

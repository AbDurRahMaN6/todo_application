import React, { useEffect } from 'react';
import { Box, Button, TextField, Typography, Grid } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TodoForm = ({ onAddTodo, editTodo, setEditTodo }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      description: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required'),
      description: Yup.string().required('Description is required'),
    }),
    enableReinitialize: true,
    onSubmit: (values) => {
      onAddTodo({
        ...editTodo,
        ...values,
      });
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (editTodo) {
      formik.setValues({
        title: editTodo.title,
        description: editTodo.description,
      });
    }
  }, [editTodo]);

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <Typography variant="h6">{editTodo ? 'Update Todo' : 'Add New Todo'}</Typography>
      <Grid container spacing={2}>
  <Grid item xs={12} sm={4} md={7}>
    <TextField
      margin="normal"
      fullWidth
      id="title"
      label="Title"
      name="title"
      value={formik.values.title}
      onChange={formik.handleChange}
      error={formik.touched.title && Boolean(formik.errors.title)}
      helperText={formik.touched.title && formik.errors.title}
    />
  </Grid>
</Grid>
<Grid container spacing={2}>
  <Grid item xs={12} sm={4} md={7}>
    <TextField
      margin="normal"
      fullWidth
      id="description"
      label="description"
      name="description"
      value={formik.values.description}
      onChange={formik.handleChange}
      error={formik.touched.description && Boolean(formik.errors.description)}
      helperText={formik.touched.description && formik.errors.description}
    />
  </Grid>
</Grid>
      
<Grid container spacing={4}>
  <Grid item xs={8} sm={3} md={5}>
    <Button type="submit" variant="contained" color="primary" fullWidth>
      {editTodo ? 'Update' : 'Add'}
    </Button>
  </Grid>
</Grid>
      {editTodo && (
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            setEditTodo(null);
            formik.resetForm();
          }}
          sx={{ ml: 2 }}
        >
          Cancel
        </Button>
      )}
    </Box>
  );
};

export default TodoForm;

import React from 'react';
// Utils
import { validateForm, NEW_ARTICLE_VALIDATOR } from '../../utils/validators';
// Components
import { Formik } from 'formik';
import { TextField, Button } from '@material-ui/core';
// Custom Hooks
import { useAlerts } from '../../contexts/AlertsContext';
// Styles
import styles from './AddNewArticle.module.scss';

// ----- Consts & Dicts ----- //
const initialValues = {
  title: '',
  text: '',
};

const initialErrors = {
  title: 'This field is required',
  text: 'This field is required',
};

const AddNewArticle = ({ onSubmit }) => {
  const newAlert = useAlerts();
  return (
    <div className={styles.container}>
      <h1>Add New Article</h1>
      <Formik
        initialValues={initialValues}
        initialTouched={initialValues}
        initialErrors={initialErrors}
        validate={(values) => validateForm(values, NEW_ARTICLE_VALIDATOR)}
        onSubmit={async (values, formikProps) => {
          const { resetForm } = formikProps;
          try {
            await onSubmit(values);
            newAlert({ severity: 'success', message: 'Successfully added a new article!' });
            resetForm(initialValues);
          } catch (e) {
            newAlert({ severity: 'Error', message: 'Something went wrong, please try again' });
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => {
          const hasErrors = !!Object.keys(errors).length;
          return (
            <div className={styles.form_container}>
              <TextField
                name="title"
                error={errors.title && touched.title}
                className={styles.title_input}
                value={values.title}
                placeholder={errors.title && touched.title ? errors.title : 'Enter title'}
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <TextField
                name="text"
                variant="outlined"
                multiline
                rows={10}
                rowsMax={10}
                error={errors.text && touched.text}
                className={styles.text_input}
                value={values.text}
                placeholder={errors.text && touched.text ? errors.text : 'Enter text'}
                label="Text"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <Button
                disabled={hasErrors || isSubmitting}
                className={styles.submit_btn}
                onClick={handleSubmit}
              >
                Submit Article
              </Button>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddNewArticle;

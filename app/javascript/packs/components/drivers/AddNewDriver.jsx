import React from 'react';
import { sleep } from '../../utils/libs';
// Utils
import { validateForm, NEW_DRIVER_VALIDATOR } from '../../utils/validators';
// Components
import { Formik } from 'formik';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Input,
  CircularProgress,
} from '@material-ui/core';
// Icons
import { Photo } from '@material-ui/icons';
// Custom Hooks
import { useAlerts } from '../../contexts/AlertsContext';
// Styles
import styles from './AddNewDriver.module.scss';

// ----- Consts & Dicts ----- //
const CARS = [{ id: 1, name: 'Car One' }, { id: 2, name: 'Car Two' }];

const initialValues = {
  name: '',
  email: '',
  dateOfBirth: '',
  cars: [],
  image: '',
};

const initialErrors = {
  title: 'This field is required',
  email: 'This field is required',
};

const AddNewDriver = ({ onSubmit }) => {
  const newAlert = useAlerts();
  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        initialTouched={initialValues}
        initialErrors={initialErrors}
        validate={(values) => validateForm(values, NEW_DRIVER_VALIDATOR)}
        onSubmit={async (values, formikProps) => {
          const { resetForm } = formikProps;
          try {
            // await onSubmit(values);
            await sleep(5000);
            newAlert({ severity: 'success', message: 'Successfully added a new driver!' });
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
          setFieldValue,
        }) => {
          const hasErrors = !!Object.keys(errors).length;
          return (
            <div className={styles.form_container}>
              <TextField
                name="name"
                error={errors.name && touched.name}
                value={values.name}
                placeholder={errors.name && touched.name ? errors.name : 'Enter name'}
                label="Name"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <TextField
                name="email"
                error={errors.email && touched.email}
                value={values.email}
                placeholder={errors.email && touched.email ? errors.email : 'Enter email'}
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <TextField
                name="dateOfBirth"
                type="date"
                error={errors.dateOfBirth && touched.dateOfBirth}
                value={values.dateOfBirth}
                placeholder={errors.dateOfBirth && touched.dateOfBirth ? errors.dateOfBirth : 'Enter date of birth'}
                label="Date of Birth"
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <FormControl style={{ margin: '12px 0' }}>
                <InputLabel>Cars</InputLabel>
                <Select
                  name="cars"
                  multiple
                  input={<Input />}
                  className={styles.cars_select}
                  value={values.cars}
                  placeholder="Select cars"
                  onBlur={handleBlur}
                  onChange={handleChange}
                >
                  {CARS.map((driver) => {
                    const { id, name } = driver;
                    return (
                      <MenuItem
                        key={id}
                        value={id}
                      >
                        {name}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
              <div className={styles.buttons_container}>
                <input
                  name="image"
                  accept="image/png"
                  style={{ display: 'none' }}
                  id="image"
                  type="file"
                  onChange={(e) => {
                    const { type } = e.currentTarget.files[0];
                    if (type !== 'image/png') {
                      newAlert({ severity: 'Error', message: 'Please upload an image in a .png format' });
                    } else {
                      newAlert({ severity: 'Success', message: 'Successfully recived image' });
                      setFieldValue('image', e.currentTarget.files[0]);
                    }
                  }}
                />
                <label htmlFor="image">
                  <Button
                    component="span"
                    className={styles.form_btn}
                  >
                    <>
                      <Photo style={{ marginRight: '10px' }} />
                      Upload Image
                    </>
                  </Button>
                </label>
                <Button
                  disabled={hasErrors || isSubmitting}
                  className={styles.form_btn}
                  onClick={handleSubmit}
                >
                  { isSubmitting ? <CircularProgress color="white" style={{ height: '25px', width: '25px' }} /> : 'Add Driver'}
                </Button>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddNewDriver;

import React from 'react';
// Misc
import { sleep } from '../../utils/libs';
// Api Calls
import { createDriver } from '../../api/apicalls';
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
const ITEM_HEIGHT = 30;
const ITEM_PADDING_TOP = 8;
const CarsMenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};

const initialValues = {
  name: '',
  email: '',
  dateOfBirth: '2000-01-01',
  car_ids: [],
  image: '',
};

const initialErrors = {
  title: 'This field is required',
  email: 'This field is required',
};

const AddNewDriver = ({ data, isLoading }) => {
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
            const formData = new FormData();
            Object.keys(values).forEach((key) => {
              if (typeof values[key] === 'object') {
                formData.append(key, JSON.stringify(values[key]));
              } else {
                formData.append(key, values[key]);
              }
            });
            await createDriver(formData);
            await sleep(1000);
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
              <FormControl style={{ margin: '12px 0' }}>
                <TextField
                  name="name"
                  className={styles.name_input}
                  error={errors.name && touched.name}
                  value={values.name}
                  placeholder={errors.name && touched.name ? errors.name : 'Enter name'}
                  label="Name"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl style={{ margin: '12px 0' }}>
                <TextField
                  name="email"
                  error={errors.email && touched.email}
                  value={values.email}
                  placeholder={errors.email && touched.email ? errors.email : 'Enter email'}
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl style={{ margin: '12px 0' }}>
                <TextField
                  name="dateOfBirth"
                  type="date"
                  value={values.dateOfBirth}
                  className={styles.dateOfBirth_input}
                  placeholder="Enter date of birth"
                  label="Date of Birth"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl style={{ margin: '12px 0' }}>
                <InputLabel>Cars</InputLabel>
                <Select
                  name="car_ids"
                  multiple
                  input={<Input />}
                  value={values.car_ids}
                  disabled={isLoading}
                  placeholder="Select cars"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  MenuProps={CarsMenuProps}
                >
                  {data.map((driver) => {
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
                <label
                  className={styles.form_btn}
                  htmlFor="image"
                >
                  <Button
                    component="span"
                  >
                    <div className={styles.btn_content_wrapper}>
                      <Photo style={{ marginRight: '10px' }} />
                      <p>Upload Image</p>
                    </div>
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

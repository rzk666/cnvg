import React from 'react';
// Misc
import { sleep } from '../../utils/libs';
// Api Calls
import { createCar } from '../../api/apicalls';
// Utils
import { validateForm, NEW_CAR_VALIDATOR } from '../../utils/validators';
// Components
import ColoredDot from '../common/misc/ColoredDot';
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
import styles from './AddNewCar.module.scss';

// ----- Consts & Dicts ----- //
const COLORS = ['red', 'blue', 'yellow'];
const ITEM_HEIGHT = 30;
const ITEM_PADDING_TOP = 8;
const ColorMenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 100,
    },
  },
};

const initialValues = {
  title: '',
  model: '',
  color: '',
  driver_ids: [],
  image: '',
};

const initialErrors = {
  title: 'This field is required',
};

const AddNewCar = ({ data, isLoading }) => {
  const newAlert = useAlerts();
  return (
    <div className={styles.container}>
      <Formik
        initialValues={initialValues}
        initialTouched={initialValues}
        initialErrors={initialErrors}
        validate={(values) => validateForm(values, NEW_CAR_VALIDATOR)}
        onSubmit={async (values, formikProps) => {
          const { resetForm } = formikProps;
          try {
            const formData = new FormData();
            Object.keys(values).forEach((key) => {
              if (typeof values[key] === 'object' && key !== 'image') {
                formData.append(key, JSON.stringify(values[key]));
              } else {
                formData.append(key, values[key]);
              }
            });
            await createCar(formData);
            await sleep(1000);
            newAlert({ severity: 'success', message: 'Successfully added a new car!' });
            resetForm(initialValues);
          } catch (e) {
            newAlert({ severity: 'error', message: 'Something went wrong, please try again' });
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
                  name="title"
                  error={errors.title && touched.title}
                  className={styles.title_input}
                  value={values.title}
                  placeholder={errors.title && touched.title ? errors.title : 'Enter title'}
                  label="Title"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl style={{ margin: '12px 0' }}>
                <TextField
                  name="model"
                  value={values.model}
                  placeholder="Enter model"
                  label="Model"
                  onBlur={handleBlur}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl style={{ margin: '12px 0' }}>
                <InputLabel>Color</InputLabel>
                <Select
                  name="color"
                  input={<Input />}
                  className={styles.color_select}
                  value={values.color}
                  placeholder="Select color"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  MenuProps={ColorMenuProps}
                >
                  {COLORS.map((color) => (
                    <MenuItem key={color} value={color}>
                      <div className={styles.color_menu_item}>
                        <ColoredDot height="15px" width="15px" color={color} />
                        {color}
                      </div>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl style={{ margin: '12px 0' }}>
                <InputLabel>Drivers</InputLabel>
                <Select
                  name="driver_ids"
                  multiple
                  disabled={isLoading}
                  input={<Input />}
                  className={styles.drivers_select}
                  value={values.driver_ids}
                  placeholder="Select drivers"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  MenuProps={ColorMenuProps}
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
                  { isSubmitting ? <CircularProgress color="white" style={{ height: '25px', width: '25px' }} /> : 'Add Car'}
                </Button>
              </div>
            </div>
          );
        }}
      </Formik>
    </div>
  );
};

export default AddNewCar;

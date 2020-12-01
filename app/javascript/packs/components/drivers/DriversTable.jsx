import React from 'react';
// Components
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';
// Universal
import { DRIVERS } from '../../universal/pages';
// Utils
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  wrapper: {
    width: '100%',
    height: 700,
  },
  container: {
    maxHeight: 700,
  },
  img: {
    width: '100px',
    height: '100px',
    borderRadius: '256px',
  },
  icon: {
    width: '100px',
    height: '100px',
  },
  row: {
    height: 120,
    opacity: 0.6,
    transition: 'opacity 0.3s ease-in',
    '&:hover': {
      cursor: 'pointer',
      opacity: 1,
    },
  },
  cell: {
    fontSize: 18,
  },
});

function createData(id, name, email, dateOfBirth, image) {
  return {
    id, name, email, dateOfBirth, image,
  };
}

const rows = [
  createData(1, 'Razi Elbaz', 'raziprojects@gmail.com', '13/08/93', ''),
  createData(1, 'Razi Elbaz', 'raziprojects@gmail.com', '13/08/93', ''),
  createData(1, 'Razi Elbaz', 'raziprojects@gmail.com', '13/08/93', ''),
  createData(1, 'Razi Elbaz', 'raziprojects@gmail.com', '13/08/93', ''),
  createData(1, 'Razi Elbaz', 'raziprojects@gmail.com', '13/08/93', ''),
  createData(1, 'Razi Elbaz', 'raziprojects@gmail.com', '13/08/93', ''),
  createData(1, 'Razi Elbaz', 'raziprojects@gmail.com', '13/08/93', ''),
  createData(1, 'Razi Elbaz', 'raziprojects@gmail.com', '13/08/93', ''),
  createData(1, 'Razi Elbaz', 'raziprojects@gmail.com', '13/08/93', ''),
  createData(1, 'Razi Elbaz', 'raziprojects@gmail.com', '13/08/93', ''),
  createData(1, 'Razi Elbaz', 'raziprojects@gmail.com', '13/08/93', ''),
  createData(1, 'Razi Elbaz', 'raziprojects@gmail.com', '13/08/93', ''),
  createData(1, 'Razi Elbaz', 'raziprojects@gmail.com', '13/08/93', ''),
];

const DriversTable = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Paper className={classes.wrapper}>
      <TableContainer className={classes.container}>
        <Table stickyHeader className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell align="center">Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const {
                id, name, email, dateOfBirth, image,
              } = row;
              return (
                <TableRow
                  className={classes.row}
                  onClick={() => history.push({ pathname: `/${DRIVERS}/${id}` })}
                >
                  <TableCell className={classes.cell}>{name}</TableCell>
                  <TableCell className={classes.cell}>{email}</TableCell>
                  <TableCell className={classes.cell}>{dateOfBirth || 'unknown'}</TableCell>
                  <TableCell align="center">
                    { image
                      ? (
                        <img
                          src={image}
                          alt={`${name}_${id}_img`}
                          className={classes.img}
                        />
                      )
                      : (
                        <AccountCircle className={classes.icon} />
                      )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default DriversTable;

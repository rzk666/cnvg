import React from 'react';
// Components
import {
  CircularProgress,
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
// Styles
import TABLE_STYLES from '../styles/tables/TableStyles';

const useStyles = makeStyles(TABLE_STYLES);

const DriversTable = ({ isLoading, data }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Paper className={classes.wrapper}>
      {isLoading ? (
        <div className={classes.loader_container}>
          <CircularProgress color="primary" />
        </div>
      ) : (
        <TableContainer className={classes.container}>
          <Table stickyHeader className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">Date of Birth</TableCell>
                <TableCell align="center">Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => {
                const {
                  id, name, email, dateOfBirth, image,
                } = row;
                const formattedDate = new Date(dateOfBirth).toLocaleDateString();
                return (
                  <TableRow
                    className={classes.row}
                    onClick={() => history.push({ pathname: `/${DRIVERS}/${id}` })}
                  >
                    <TableCell align="center" className={classes.cell}>{name}</TableCell>
                    <TableCell align="center" className={classes.cell}>{email}</TableCell>
                    <TableCell align="center" className={classes.cell}>{formattedDate || 'Unknown'}</TableCell>
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
                          <AccountCircle className={classes.img} />
                        )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Paper>
  );
};

export default DriversTable;

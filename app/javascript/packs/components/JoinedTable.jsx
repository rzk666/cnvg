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
  CircularProgress,
} from '@material-ui/core';
// Utils
import { makeStyles } from '@material-ui/core/styles';
// Styles
import TABLE_STYLES from './styles/tables/TableStyles';

const useStyles = makeStyles({
  ...TABLE_STYLES,
  row: {
    opacity: '1!important',
  },
});

const JoinedTable = ({ id, isLoading, data }) => {
  const classes = useStyles();
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
                <TableCell align="center">ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Created At</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => {
                const {
                  name, created_at,
                } = row;
                return (
                  <TableRow
                    className={classes.row}
                  >
                    <TableCell align="center" className={classes.cell}>{id}</TableCell>
                    <TableCell align="center" className={classes.cell}>{name}</TableCell>
                    <TableCell align="center" className={classes.cell}>{created_at}</TableCell>
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

export default JoinedTable;

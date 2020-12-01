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

function createData(id, name, createdAt) {
  return {
    id, name, createdAt,
  };
}

const rows = [
  createData(1, 'Ferrari', '2019-08-20 19:15:28'),
  createData(1, 'Ferrari', '2019-08-20 19:15:28'),
  createData(1, 'Ferrari', '2019-08-20 19:15:28'),
];

const JoinedTable = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.wrapper}>
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
            {rows.map((row) => {
              const {
                id, name, createdAt,
              } = row;
              return (
                <TableRow
                  className={classes.row}
                >
                  <TableCell align="center" className={classes.cell}>{id}</TableCell>
                  <TableCell align="center" className={classes.cell}>{name}</TableCell>
                  <TableCell align="center" className={classes.cell}>{createdAt}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default JoinedTable;

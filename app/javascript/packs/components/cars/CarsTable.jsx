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
import ColoredDot from '../common/misc/ColoredDot';
// Universal
import { CARS } from '../../universal/pages';
// Images
import CarAvatar from 'images/CarAvatar.jpg';
// Utils
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
// Styles
import TABLE_STYLES from '../styles/tables/TableStyles';

const useStyles = makeStyles({
  ...TABLE_STYLES,
  dot_container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const CarsTable = ({ data, isLoading }) => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Paper className={classes.wrapper}>
      {isLoading
        ? (
          <div className={classes.loader_container}>
            <CircularProgress color="primary" />
          </div>
        )
        : (
          <TableContainer className={classes.container}>
            <Table stickyHeader className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Vendor</TableCell>
                  <TableCell align="center">Model</TableCell>
                  <TableCell align="center">Color</TableCell>
                  <TableCell align="center">Image</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => {
                  const {
                    id, title, model, color, image,
                  } = row;
                  return (
                    <TableRow
                      className={classes.row}
                      onClick={() => history.push(`/${CARS}/${id}`)}
                    >
                      <TableCell align="center" className={classes.cell}>{title}</TableCell>
                      <TableCell align="center" className={classes.cell}>{model || 'Unknown'}</TableCell>
                      <TableCell align="center" className={classes.cell}>
                        {color
                          ? (
                            <div className={classes.dot_container}>
                              <ColoredDot color={color} />
                            </div>
                          ) : 'Unknown'}
                      </TableCell>
                      <TableCell align="center">
                        <img
                          src={image || CarAvatar}
                          alt={`${title}_${model}_img`}
                          className={classes.img}
                        />
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

export default CarsTable;

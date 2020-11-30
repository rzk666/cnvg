import React from 'react';
// Components
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead, TableRow,
} from '@material-ui/core';
// Utils
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  wrapper: {
    width: '60%',
    maxHeight: 500,
    marginTop: 100,
  },
  container: {
    maxHeight: 500,
  },
  img: {
    width: '100px',
    height: '100px',
    borderRadius: '1000px',
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
});

function createData(id, title, type, color, image) {
  return {
    id, title, type, color, image,
  };
}

const rows = [
  createData(1, 'Ferrari', 'Spider', 'yellow', 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/audi-a1-2820a.jpg'),
  createData(2, 'Mazda', '3', 'blue', 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/audi-a1-2820a.jpg'),
  createData(3, 'Audi', 'A8', 'red', 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/audi-a1-2820a.jpg'),
  createData(4, 'Reno', 'Megan', 'yellow', 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/audi-a1-2820a.jpg'),
  createData(5, 'Honda', 'Accord', 'blue', 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/audi-a1-2820a.jpg'),
  createData(5, 'Honda', 'Accord', 'blue', 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/audi-a1-2820a.jpg'),
  createData(5, 'Honda', 'Accord', 'blue', 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/audi-a1-2820a.jpg'),
  createData(5, 'Honda', 'Accord', 'blue', 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/audi-a1-2820a.jpg'),
  createData(5, 'Honda', 'Accord', 'blue', 'https://www.autocar.co.uk/sites/autocar.co.uk/files/images/car-reviews/first-drives/legacy/audi-a1-2820a.jpg'),
];

const CarsTable = () => {
  const classes = useStyles();
  const history = useHistory();
  const { location } = history;
  const { pathname } = location;
  return (
    <Paper className={classes.wrapper}>
      <TableContainer className={classes.container}>
        <Table stickyHeader className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Vendor</TableCell>
              <TableCell>Model</TableCell>
              <TableCell>Color</TableCell>
              <TableCell align="center">Image</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              const {
                id, title, type, color, image,
              } = row;
              return (
                <TableRow
                  className={classes.row}
                  onClick={() => history.push(`${pathname}/${id}`)}
                >
                  <TableCell>{title}</TableCell>
                  <TableCell>{type}</TableCell>
                  <TableCell>{color}</TableCell>
                  <TableCell align="center">
                    <img
                      src={image}
                      alt={`${title}_${type}_img`}
                      className={classes.img}
                    />
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

export default CarsTable;

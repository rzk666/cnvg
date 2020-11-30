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
  dot: {
    height: 25,
    width: 25,
    borderRadius: '256px',
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

// ----- Help Components ----- //
const ColoredDot = ({ color }) => {
  const classes = useStyles();
  return (
    <div
      style={{ background: color }}
      className={classes.dot}
    />
  );
};

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
                  <TableCell className={classes.cell}>{title}</TableCell>
                  <TableCell className={classes.cell}>{type}</TableCell>
                  <TableCell><ColoredDot color={color} /></TableCell>
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

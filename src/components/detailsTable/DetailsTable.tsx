import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Availability } from '../../pages/creature/type';

type DetailsProps = {
  availability: Availability; 
}

const DetailsComponent: React.FC<DetailsProps> = ({ availability }) => {
  const {
    'month-northern': monthNorthern,
    'month-southern': monthSuthern,
    time,
    isAllDay,
    isAllYear,
    location,
    rarity,
    'month-array-northern': monthArrayNorthern,
    'month-array-southern': monthArraySouthern,
    'time-array': timeArray,
  } = availability;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Attribute</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Month (Northern Hemisphere)</TableCell>
            <TableCell>{monthNorthern}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Month (Southern Hemisphere)</TableCell>
            <TableCell>{monthSuthern}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>{time}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Is All Day</TableCell>
            <TableCell>{isAllDay ? 'Yes' : 'No'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Is All Year</TableCell>
            <TableCell>{isAllYear ? 'Yes' : 'No'}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell>{location}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Rarity</TableCell>
            <TableCell>{rarity}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Month Array (Northern Hemisphere)</TableCell>
            <TableCell>{monthArrayNorthern.join(', ')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Month Array (Southern Hemisphere)</TableCell>
            <TableCell>{monthArraySouthern.join(', ')}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Time Array</TableCell>
            <TableCell>{timeArray.join(', ')}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DetailsComponent;

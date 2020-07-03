import React from 'react';
import './StatsTable.css';
import TableItem from '../TableItem/TableItem';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectStats } from '../../redux/stats/stats.selectors';

const StatsTable = ({ stats }) => {
  return (
    <table className='stats-table'>
      <thead>
        <tr>
          <th>Tabla General</th>
          <th>JJ</th>
          <th>DG</th>
          <th>PTS</th>
        </tr>
      </thead>
      <tbody>
        {stats.map(({ position, ...props }) => (
          <TableItem key={position} position={position} {...props} />
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = createStructuredSelector({
  stats: selectStats,
});

export default connect(mapStateToProps)(StatsTable);

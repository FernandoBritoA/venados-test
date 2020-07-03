import React from 'react';

const TableItem = ({ position, ...props }) => {
  const { team, image, games, score_diff, points } = props;
  console.log(props);
  return (
    <tr>
      <td>{position}</td>
      <td>
        <div>
          <img src={image} alt='' style={{ width: '20px' }} />
          <span>{team}</span>
        </div>
      </td>
      <td>{games}</td>
      <td>{score_diff}</td>
      <td>{points}</td>
    </tr>
  );
};

export default TableItem;

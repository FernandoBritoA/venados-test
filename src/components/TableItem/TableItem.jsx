import React, { Fragment } from 'react';
import grassBg from '../../assets/grass-texture.jpg';

const TableItem = ({ position, ...props }) => {
  const { team, image, games, score_diff, points } = props;
  return (
    <Fragment>
      <tr>
        <td>
          <div className='table-bg-image-container'>
            <div
              className='table-bg-image'
              style={{
                backgroundImage: `url(${grassBg})`,
              }}
            />
          </div>
        </td>
      </tr>

      <tr className='table-item'>
        <td className='table-number'>{position}</td>
        <td className='table-text'>
          <div className='team-container'>
            <img src={image} alt='' style={{ width: '50px' }} />
            <span className='team-name'>{team}</span>
          </div>
        </td>
        <td className='table-number'>{games}</td>
        <td className='table-number'>{score_diff}</td>
        <td className='table-number'>{points}</td>
      </tr>
    </Fragment>
  );
};

export default TableItem;

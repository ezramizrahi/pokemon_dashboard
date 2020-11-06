import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { formatText } from '../helpers';
import { Label, Icon } from 'semantic-ui-react';

const CatchLocation = ( props ) => {
  const id = props.id;
  const [catchLocation, setCatchLocation] = useState([]);

  useEffect(() => {
    const getCatchLocation = async (id) => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/encounters`);
        setCatchLocation(response);
      } catch (err) {
        console.log(err);
      }
    };
    getCatchLocation(id);
  }, [id])

  return (
    <div>
      {(catchLocation && catchLocation?.data)
        ?
        <Label as='a' color='teal' size='mini'>
          <Icon name='map marker' /> {formatText(catchLocation.data[0].location_area.name)}
        </Label>
        :
        <Label as='a' color='red' size='mini'>
          <Icon name='question circle' /> Unknown Location
        </Label>
      }
    </div>
  )
};

export default CatchLocation;

import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { FcRating } from 'react-icons/fc';
import { Link, NavLink } from 'react-router-dom';

const AllArtAndCraftCard = ({data ,index} ) => {

    const   { _id,image, subcategory_Name, item_name, customization,description,imageURL,price,rating ,processing_time,stockStatus,discount} =data

console.log( index)

    return (
      <tr>
      <th>{ index +1} </th>
      <td>{subcategory_Name} </td>
      <td>{item_name} </td>
      <td>{price} </td>
      <td> <Link to={`/artDetails/${_id}`}> details  </Link> </td>
    </tr>
    );
};

export default AllArtAndCraftCard;
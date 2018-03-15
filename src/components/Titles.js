import React from 'react';

const Titles = ({categoryArray}) => (
  <tr>
    {categoryArray.map(el => <td> {el}</td>)}
  </tr>
)


export default Titles;




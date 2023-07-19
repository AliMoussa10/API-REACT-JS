import React from 'react';


const List = ({ Data }) => (
    
    (Data.length > 0) ? (

        Data.map((dataObj, index) => (
            <tr key={index}>
            <td>{dataObj.id}</td>
            <td> <img src={dataObj.thumbnail} alt="icons" className="img-responsive rounded" width={'100'} height={'90'}/></td>
            <td>{dataObj.title}</td>
            <td>{dataObj.description}</td>
            <td>{dataObj.price}</td>
            <td>{dataObj.brand}</td>
            <td>{dataObj.category}</td>
    
        </tr>
        ))
      ) : (
        <tr>
          <td colSpan={'7'}>No trouve</td>
        </tr>
      )
   

)

export default List;

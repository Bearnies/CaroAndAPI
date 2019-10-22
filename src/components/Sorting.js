import React from 'react'

const Sorting = ({onClick, isAscending}) => {
    if (isAscending === true)
    {
        return (
            <button className = 'classExtraBtn' onClick={() => onClick()}>Sort (Descend)</button>
        ); 
    }
    else if (isAscending === false)
    {
        return (
            <button className = 'classExtraBtn' onClick={() => onClick()}>Sort (Ascend)</button>
        ); 
    }
};

export default Sorting;
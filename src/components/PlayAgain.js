import React from 'react'

const PlayAgain = ({onClick}) => {
    return (
        <button className = 'classExtraBtn' onClick={() => onClick()}>Play Again</button>
    );
};

export default PlayAgain;
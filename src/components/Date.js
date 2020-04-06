import React from 'react';

const Dates = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const date = new Date()
    return (
        <div className="date">
            <span>{days[date.getDay()]}</span>
        </div>
    );
}

export default Dates;

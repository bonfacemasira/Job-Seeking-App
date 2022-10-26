import React from 'react';

function FilterForm({ column }) {
    // This form takes in a column prop which we can destructure to get the filterValue and setFilter values. These values would be used to control the forms input to help filter each column.
    const { filterValue, setFilter } = column;
    return (
        <span>
            <input
                value={filterValue || ''}
                onChange={(e) => setFilter(e.target.value)}
            />
        </span>
    );
};

export default FilterForm;
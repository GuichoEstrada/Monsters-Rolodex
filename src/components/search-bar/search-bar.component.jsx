import React from 'react';
import './search-bar.styles.css';


export const SearchBar = ({placeholder, handleChange}) => {
    return (
        <input
            className='search-bar'
            type='search'
            placeholder={placeholder}
            onChange={handleChange}
        />
    )
}
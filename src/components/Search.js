import React, { useState } from "react";
import getImages from "../requests/getImages";
import ("../styles/Search.css");

const Search = () => {

    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        getImages(searchValue)
            .then(images => console.log(images));
    }

    const handleInput = (event) => {
        setSearchValue(event.target.value);
        console.log(searchValue);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    onChange={handleInput}
                />
                <button className="search-submit" type="submit">Go!</button>
            </form>
        </>
    );
};

export default Search;
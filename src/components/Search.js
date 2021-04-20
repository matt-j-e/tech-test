import React, { useState } from "react";
import getImages from "../requests/getImages";
import ("../styles/Search.css");

const Search = () => {

    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        getImages(value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search..."
                    onChange={(e) => setValue(e.target.value)}
                />
                <button className="search-submit" type="submit">Go!</button>
            </form>
        </>
    );
};

export default Search;
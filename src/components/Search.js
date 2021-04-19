import React, { useState } from "react";
import ("../styles/Search.css");

const Search = () => {

    const [value, setValue] = useState('');

    return (
        <>
            <form>
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
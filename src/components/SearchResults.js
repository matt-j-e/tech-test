import React from "react";
import PropTypes from "prop-types";
import ("../styles/SearchResults.css");

const SearchResults = ({ results }) => {
    if (!results || results.length === 0) {
        return <h1>No results</h1>
    } else {
        return (
            <>
                <h1>Search Results</h1>
                <ul className="search-results-list">
                    {
                        results.map((image, index) => {
                            return (
                                <li>
                                    <img src={image} alt="An artefact from the NASA API" key={index} />
                                </li>
                            )
                        })
                    }
                </ul>
            </>
        )
    }
};

SearchResults.propTypes = {
    results: PropTypes.arrayOf(PropTypes.string),
};

export default SearchResults;

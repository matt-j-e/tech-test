import React from "react";
import ("../styles/SearchResults.css");

const SearchResults = () => {
    const images = ["https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"];
    return (
        <>
            <ul className="search-results-list">
                {
                    images.map((image, index) => {
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
};

export default SearchResults;

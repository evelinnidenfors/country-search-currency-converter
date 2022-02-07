import React from "react";

export const Header = ({ inputNameHandler }) => {
  return (
<div className="header">
        <h1>
          Countries of the world{" "}
          <span role="img" aria-label="globe">
            🌍
          </span>
        </h1>
        <input
          onChange={(event) => inputNameHandler(event.target.value)}
          placeholder="Search for a country/capital"
        />
      </div>
  );
};

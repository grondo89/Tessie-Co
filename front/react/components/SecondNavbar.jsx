import React from "react";
import { Link } from "@material-ui/core";

export default props => {
  return (
    <ul className="nav justify-content-center grey lighten-4 py-2">
      {props.cats &&
        props.cats.map(cat => (
          <li
            className="nav-item"
            key={cat.id}
            onClick={e => props.onClick(cat.name, e)}
          >
            <a className="nav-link active" id={cat.id}>
              {cat.name}
            </a>
          </li>
        ))}
    </ul>
  );
};

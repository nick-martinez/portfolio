import React from 'react';
import { Link } from "react-router-dom";
import './Projects.css';

function ProjectsItem(props) {
  return (
    <>
      <li className="projectsItem">
        <Link to={props.path} className="projectsItemLink">
          <figure className="projectsItemPicWrap" dataCategory={props.label}>
            <img src={props.src} alt="REPLACE IMAGE" className="projectsItemImage"/>
          </figure>
          <div className="projectsItemInfo">
            <h5 className="projectsItemText">
              {props.text}
            </h5>
          </div>
        </Link>
      </li>
    </>
  )
}

export default ProjectsItem;

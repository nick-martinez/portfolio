import React from 'react';
import ProjectsItem from "./ProjectsItem";

function Projects() {
  return (
    <div className="projects">
      <h1>Personal Projects</h1>
      <div className="projectsContainer">
        <div className="projectsWrapper">
          <ul className="projectsItems">
            <ProjectsItem
              path="/todoList" 
              src="../../../images/task-list.png"
              text="Task List Project"
              label="Enter & Delete Tasks"
            />
          </ul>
          <ul className="projectsItems">
            <ProjectsItem
              path="/foodWheel" 
              src="../../../images/food-wheel.png"
              text="Food Wheel"
              label="Pick Your Food Spot"
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects;

import React from "react";
import styled from "styled-components";
import Project from "./Project";
import axios from "axios";

const BASE_URL = "http://localhost:3000/api/projects/";
const ProjectsContainer = styled.section`
  width: 820px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  flex-direction: column;
  @media (max-width: 500px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

const ProjectsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`;
class Projects extends React.Component {
  state = {
    projects: []
  };
  componentDidMount() {
    this.getProjects();
  }
  getProjects = () => {
    axios
      .get(BASE_URL)
      .then(res => {
        this.setState({ projects: res.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <React.Fragment>
        <ProjectsContainer>
          <ProjectsWrapper>
            {this.state.projects &&
              this.state.projects.map(project => (
                <Project key={project.id} project={project} />
              ))}
          </ProjectsWrapper>
        </ProjectsContainer>
      </React.Fragment>
    );
  }
}

export default Projects;

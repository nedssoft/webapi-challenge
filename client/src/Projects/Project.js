import React from "react";
import styled, {keyframes} from "styled-components";
import { Link } from "react-router-dom";
import { FaEdit,FaRegTrashAlt } from "react-icons/fa";

const moveBtn = keyframes`
  from {
    margin-left: 20px;
  }

  to {
    margin-left: 0;
  }
`
const ProjectWrapper = styled.div`
  width: 400px;
  padding: 0.8rem;
  text-align: center;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
  box-shadow: 0px 0px 5px 0px rgba(204, 204, 204, 1);
  margin: 1rem auto;
  position: relative;
`;
const ControlButtons = styled.div`
  position: absolute;
  right: 15px;
  top: 20px;
  display: flex;
  flex-direction: column;
`;
const TextWrapper = styled.div`
  margin-top: 22px;
  margin-right: 2rem;
  strong {
    font-weight: bold;
  }
  p {
    line-height: 1.5;
    font-size: 1.2rem;
 
    &:nth-of-type(2) {
      margin-bottom: 25px;
    }
  }
`
const EditBtn = styled(FaEdit)`
  color:  orange;
  &:hover {
    animation: ${moveBtn} 0.2s;
  }
`
const DeleteBtn = styled(FaRegTrashAlt)`
  color: red;
  cursor: pointer;
  &:hover {
    animation: ${moveBtn} 0.2s;
  }
`

export default function Project({project, deleteProject }) {
  return (
    <ProjectWrapper>
      <TextWrapper>
        <p>
          <strong>Name: </strong> {project.name}
        </p>
        <p>
           <strong>Description: </strong> {project.description}
        </p>
        <p>
           <strong>Completed: </strong> {project.completed}
        </p>
      </TextWrapper>
      <ControlButtons>
        <Link to={`projects/${project.id}/edit`}><EditBtn /></Link>
        <DeleteBtn onClick={() => deleteProject(Project.id)}>Delete</DeleteBtn>        
      </ControlButtons>
    </ProjectWrapper>
  );
}


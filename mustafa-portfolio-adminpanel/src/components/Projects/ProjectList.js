import React from "react";
import "../../componentsStyle/ProjectList.css";
import useGet from "../../hooks/useGet";
import LoadingProgress from "../../sharedComponents/LoadingProgress";
import { useNavigate } from "react-router-dom";
import NoDataFound from "../../sharedComponents/NoDataFound";

export default function ProjectList(props) {
  const { data, isLoading } = useGet("/project/getProjects", props.reload);
  const navigate = useNavigate();
  return (
    <div className="project-list-holder">
      <div className="project-list-exist-word">Existing Projects :</div>
      {isLoading ? (
        <LoadingProgress />
      ) : data.projects.length === 0 ? (
        <NoDataFound />
      ) : (
        data.projects.map((project) => {
          return (
            <div
              className="project-list-project-name"
              key={project._id}
              onClick={() => {
                navigate(`/existProject/:${project._id}`);
              }}
            >
              <span className="project-list-project-name-link">
                Project Name :
              </span>
              {project.projectName}
            </div>
          );
        })
      )}
    </div>
  );
}

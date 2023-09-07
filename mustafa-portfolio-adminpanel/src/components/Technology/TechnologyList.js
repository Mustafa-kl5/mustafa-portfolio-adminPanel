import React, { useState } from "react";
import "../../componentsStyle/TechnologyList.css";
import DeleteTechnology from "./DeleteTechnology";
import useGet from "../../hooks/useGet";
import LoadingProgress from "../../sharedComponents/LoadingProgress";
import NoDataFound from "../../sharedComponents/NoDataFound";

export default function TechnologyList() {
  const [reload, setReload] = useState(false);
  const { data, isLoading } = useGet("/technology/getTechnology", reload);
  return isLoading ? (
    <LoadingProgress />
  ) : data.technology.length === 0 ? (
    <div className="technology-list-holder">
      <div className="technology-list-exist-word">
        Existing TechnologyList :
      </div>
      <NoDataFound />
    </div>
  ) : (
    data.technology.map((tech) => {
      return (
        <div className="technology-list-holder" key={tech._id}>
          <div className="technology-list-exist-word">
            Existing TechnologyList :
          </div>
          <div className="technology-list-technology-name-level-experience">
            <div className="technology-list-technology-item">
              Technology Name : {tech.technologyName}
            </div>
            <div className="technology-list-technology-item">
              Proficiency Level : {tech.proficiencyLevel}
            </div>
            <div className="technology-list-technology-item">
              {tech.yearsOfExperience} Years Of Experience
            </div>
            <div className="technology-list-technology-item">
              <div> Technology Image :</div>
              <img
                className="technology-list-technology-item-image"
                src={tech.technologyImage}
              />
            </div>
            <DeleteTechnology
              technologyId={tech._id}
              reload={() => {
                setReload(!reload);
                console.log(reload);
              }}
            />
          </div>
        </div>
      );
    })
  );
}

import React, { useState } from "react";
import MainLayout from "../UI/MainLayout";
import EditProjectsForm from "../components/Projects/EditProjectsForm";
import DeleteProject from "../components/Projects/DeleteProject";
import useGet from "../hooks/useGet";
import { useParams } from "react-router-dom";
import LoadingProgress from "../sharedComponents/LoadingProgress";

export default function ExistingProjects() {
  const { projectID } = useParams();
  const { data, isLoading } = useGet(`/project/getProjectsById/${projectID}`);

  return (
    <MainLayout>
      {isLoading ? (
        <LoadingProgress />
      ) : (
        <>
          <EditProjectsForm
            projectName={data?.project.projectName}
            projectDescription={data?.project.description}
            projectLink={data?.project.projectLink}
            technologyUsed={data?.project.technologyUsed}
            projectGithubRepoLink={data?.project.projectGithubRepo}
            projectId={data?.project._id}
          />
          <DeleteProject projectId={data?.project._id} />
        </>
      )}
    </MainLayout>
  );
}

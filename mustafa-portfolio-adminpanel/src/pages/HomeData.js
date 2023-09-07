import React from "react";
import MainLayout from "../UI/MainLayout";
import HomeDataForm from "../components/HomeDataForm";
import useGet from "../hooks/useGet";
import LoadingProgress from "../sharedComponents/LoadingProgress";

export default function HomeData() {
  const { data, isLoading } = useGet("/home/getHome");

  return (
    <MainLayout>
      {isLoading ? (
        <LoadingProgress />
      ) : (
        <HomeDataForm
          cvLink={data?.homeData.cvLink}
          githubUrl={data?.homeData.gitHubProfile}
          description={data?.homeData.description}
          name={data?.homeData.name}
        />
      )}
    </MainLayout>
  );
}

import React from "react";
import MainLayout from "../UI/MainLayout";
import TechnologyForm from "../components/Technology/TechnologyForm";
import TechnologyList from "../components/Technology/TechnologyList";
function Technology() {
  return (
    <MainLayout>
      <TechnologyList />
      <TechnologyForm />
    </MainLayout>
  );
}

export default Technology;

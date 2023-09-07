import React, { useEffect, useState } from "react";
import MainLayout from "../UI/MainLayout";
import ProjectsForm from "../components/Projects/ProjectsForm";
import ProjectList from "../components/Projects/ProjectList";
export default function Project() {
  const [reload, setReload] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <MainLayout>
      <ProjectList reload={reload} />
      <ProjectsForm
        reload={() => {
          setReload(!reload);
        }}
      />
    </MainLayout>
  );
}

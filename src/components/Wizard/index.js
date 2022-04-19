import React, { useState } from "react";
import { useMultipleForm } from "usetheform";

import WizardFormFirstPage from "./WizardFormFirstPage";
import WizardFormSecondPage from "./WizardFormSecondPage";

export default function Wizard() {
  const [currentPage, setPage] = useState(1);
  const nextPage = () => setPage((prev) => ++prev);
  const prevPage = () => setPage((prev) => --prev);

  const [getWizardState, wizard] = useMultipleForm();
  const onSubmitWizard = () => console.log(getWizardState());

  return (
   <div className="App">
     {currentPage=== 1 && (
       <WizardFormFirstPage {...wizard} onSubmit={nextPage} />
     )}
     {currentPage=== 2 && (
       <WizardFormSecondPage
         {...wizard}
         prevPage={prevPage}
         onSubmit={onSubmitWizard}
       />
     )}
   </div>
  );
}
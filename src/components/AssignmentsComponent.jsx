import React, { useState } from "react";
import AddNewProjectComponent from './AddNewProjectComponent'
import CardComponent from "./CardComponent";

export default function AssignmentsComponent() {
  const [assignments, setAssignments] = useState([]);
  
  const handleAddTask = (newProject) => {
    setAssignments(newProject)
  }

  return (
    <div>
      <div className="flex justify-between">
        {/* assignments  */}
        <h2 className="text-xl font-semibold">Assignments</h2>
        <AddNewProjectComponent handleAddTask= {handleAddTask}/>
      </div>
      <div className="">
        <CardComponent item={assignments}/>
      </div>
    </div>
  );
}

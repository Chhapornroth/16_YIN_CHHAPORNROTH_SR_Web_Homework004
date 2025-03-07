import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({ item }) {

  const getDayLeft = (date) => {
    const today = new Date();
    const projectDate = new Date(date);
    const diffTime = projectDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return "Overdue";
    }

    if (diffDays <= 7) {
      return `${diffDays} day${diffDays === 1 ? '' : 's'} left`;
    } else if (diffDays <= 30) {
      const weeks = Math.ceil(diffDays / 7);
      return `${weeks} week${weeks === 1 ? '' : 's'} left`;
    } else if (diffDays <= 365) {
      const months = Math.ceil(diffDays / 30);
      return `${months} month${months === 1 ? '' : 's'} left`;
    } else {
      const years = Math.floor(diffDays / 365);
      return `${years} year${years === 1 ? '' : 's'} left`;
    }
  };

  const getDateColor = (progress) => { 
    const dateNum = parseInt(progress, 10);
    switch(dateNum) {
    case 100:
      return "text-custom-sky-blue";
    case 75:
      return "text-custom-carrot"
    case 50:
      return "text-custom-yellow";
    case 25:
      return "text-custom-pink";
    }
  }

  const getProgressColor = (progress) => { 
    const progressNum = parseInt(progress, 10);
    switch(progressNum) {
    case 100:
      return "bg-custom-sky-blue";
    case 75:
      return "bg-custom-carrot"
    case 50:
      return "bg-custom-yellow";
    case 25:
      return "bg-custom-pink";
    }
  }
  return (
    <div className="my-6 justify-between space-y-6 h-[45vh] overflow-auto hide-scrollbar flex w-full flex-row flex-wrap">
      {item.map((task) => (
        <div className="w-[390px] h-[270px] basis-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between mb-5">
            {/* date */}
            <p className={`${getDateColor(task.progress)} font-medium`}>{new Date(task.dueDate).toLocaleDateString('en',{
              month: 'short',
              day: 'numeric',
              year: 'numeric'
            })}</p>
            <EllipsisVertical size={20} color="#374957" />
          </div>

          <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {task.projectName}
          </h5>
          <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
            {task.description}
          </p>

          {/* progress bar */}
          <div className="w-full flex justify-between font-medium mb-1">
            <p>Progress</p>
            <p>{task.progress}%</p>
          </div>
          <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div 
              className={`${getProgressColor(task.progress)} h-2.5 rounded-full`}
              style={{width : `${task.progress}%`}}
            ></div>
          </div>

          {/* deadline */}
          <div className="flex justify-end">
          <p className={`font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-50 text-center ${
              getDayLeft(task.dueDate) === "Overdue" ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'
            }`}>
              {getDayLeft(task.dueDate)}
            </p>

          </div>
        </div>
      ))}

    </div>
  );
}
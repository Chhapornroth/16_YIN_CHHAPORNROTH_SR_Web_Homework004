import './App.css'
import SidebarComponent from './components/SidebarComponent'
import TopNavbarComponent from './components/TopNavbarComponent'
import DashboardComponent from './components/DashboardComponent'
import AssignmentsComponent from './components/AssignmentsComponent'
import LearningMaterialsComponent from './components/LearningMaterialsComponent'

function App() {
  return (
    <main className="flex overflow-y-hidden">
      <SidebarComponent />
      <div className='w-full bg-gray-200 py-8 px-8'>
        <TopNavbarComponent />
        <div className='mx-auto mt-5 flex justify-between'>
          <div className="w-9/12 flex flex-col gap-8">
            <DashboardComponent />
            <AssignmentsComponent/>
          </div>
          <div >
            <LearningMaterialsComponent />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App

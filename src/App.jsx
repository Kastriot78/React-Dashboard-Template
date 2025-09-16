import { useState } from "react";
import MainPanel from "./components/Layout/MainPanel/MainPanel"
import Sidebar from "./components/Layout/Sidebar/Sidebar"

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  }

  return (
    <>
      <div className="min-h-screen xl:flex">
        <Sidebar toggleSidebar={toggleSidebar} handleToggleSidebar={handleToggleSidebar} />
        <MainPanel handleToggleSidebar={handleToggleSidebar} toggleSidebar={toggleSidebar} />
      </div>
    </>
  )
}

export default App

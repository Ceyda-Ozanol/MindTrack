import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`d-flex flex-column bg-dark text-white vh-100 position-fixed transition ${isCollapsed ? "collapsed" : ""}`} 
         style={{ width: isCollapsed ? "80px" : "250px", transition: "width 0.3s ease" }}>
      
      <button className="btn btn-primary m-2" onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? "▶" : "◀"}
      </button>

      {!isCollapsed && <h2 className="mb-4">DSA Topics</h2>}

      <ul className="nav nav-pills flex-column">
        <li className="nav-item"><Link className="nav-link text-white" to="/learn/sorting">{isCollapsed ? "" : "Sorting"}</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/learn/searching">{isCollapsed ? "" : "Searching"}</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/learn/trees">{isCollapsed ? "" : "Trees"}</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/learn/graphs">{isCollapsed ? "" : "Graphs"}</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

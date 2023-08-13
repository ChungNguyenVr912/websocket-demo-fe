import Header from "./Header";
import Sidebar from "./Sidebar";

// eslint-disable-next-line react/prop-types
function Layouts({ children}) {

    return (
      <div className="main-wrapper">
            <Header />
            <Sidebar />
            <div className="main-content color-theme-green">
              <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left pe-2">
                   {children}
                </div>
              </div>
            </div>
      </div>
     );
}


export default Layouts;
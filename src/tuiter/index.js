
import NavigationSidebar
  from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
import "./explore/index.css";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";



function Tuiter() {
  return (
      // <HomeComponent/>

      <div className="row mt-2">
        <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2">
          <NavigationSidebar active="explore"/>
        </div>
        <div className="col-xxl-6 col-xl-6 col-lg-7 col-md-9 col-sm-9"
             style={{"position": "relative"}}>
          {/*<ExploreComponent/>*/}

          <Routes>
            <Route path="explore" element={<ExploreComponent/>}/>
            <Route path="home"    element={<HomeComponent/>}/>
          </Routes>
        </div>
        <div className="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">
          <WhoToFollowList/>
        </div>
      </div>
  );
}
export default Tuiter;
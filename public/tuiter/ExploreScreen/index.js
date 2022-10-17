import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
  $('#wd-explore').append(`
  <div class="row mt-2">

  	     <div id="my-nav-bar" class="wd-col-xs-customize wd-col-sm-customize wd-col-md-customize col-lg-1 col-xl-2 col-xxl-2">
				${NavigationSidebar("Explore")}
	        </div>
	        <div class="col-10 col-lg-7 col-xl-6 ">
				${ExploreComponent()}
	        </div>
	        <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 ">
				${WhoToFollowList()}
	        </div>
  		</div>
   `);
}
$(exploreComponent);
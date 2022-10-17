import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

function HomeScreenComponent() {
  $('#wd-homescreen').append(`
    	<div class="row mt-2">
	        <div id="my-nav-bar" class="col-2 col-md-2 col-lg-1 col-xl-2 ">

				${NavigationSidebar("Home")}
	        </div>
	        <div class="col-xxl-6 col-xl-6 col-lg-7 col-md-9 col-sm-9">

				${PostList()}
	        </div>
	         <div class="col-xxl-4 col-xl-4 col-lg-4 d-none d-lg-block">

				${PostSummaryList()}
	        </div>
  		</div>
   `);
}

$(HomeScreenComponent);

// const setUpNavTriggers = () => {
//   var tabs = $('.tab')
//   for(let i = 0 ; i < tabs.length ; i++) {
//     $(tabs[i]).click(() => {
//       let children = $(tabs[i]).children();
//       let selectedTab = $(children[1]).html().trim();
//       // console.log($(span).innerHTML + " is clicked");
//       $("#my-nav-bar").html(NavigationSidebar(selectedTab))
//       setUpNavTriggers();
//     })
//   }
// }
// $(document).ready(setUpNavTriggers)
//
// export default HomeScreenComponent;
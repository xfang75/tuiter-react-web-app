

const NavigationSidebar = () => {
  return(`
<!--   <div class="list-group">-->
        <ul class="list-group">
          <li class="list-group-item">
            <i class="fab fa-twitter" style="color:blue" width="150px"></i><br/>
          </li>
          <li class="list-group-item">
            <div class="row">
              <div class="col-3">
                <i class="fa fa-home"></i>
              </div>
              <div class="col d-none d-xl-block">
                <a href="https://en.wikipedia.org/wiki/Dune_(novel)" class=" col-xxl-2 col-xl-2 col-lg-2">
                  Home</a>
              </div>
            </div>
          </li>

          <li class="list-group-item active">
            <div class="row">
              <div class="col-3">
                <i class="fa fa-hashtag"></i>
              </div>
              <div class="col d-none d-xl-block">
                <a href="https://en.wikipedia.org/wiki/Dune_(novel)" class=" list-group-item-action">
                  Explore</a>
              </div>
            </div>
          </li>

          <li class="list-group-item">
            <div class="row">
              <div class="col-3">
                <i class="fa fa-mail-bulk"></i>
              </div>
              <div class="col d-none d-xl-block">
                <a href="https://en.wikipedia.org/wiki/Dune_(novel)" class=" list-group-item-action">
                  Notifications</a>
              </div>
            </div>
          </li>

          <li class="list-group-item">
            <div class="row">
              <div class="col-3">
                <i class="fa fa-phone"></i>
              </div>
              <div class="col d-none d-xl-block">
                <a href="https://en.wikipedia.org/wiki/Dune_(novel)" class=" list-group-item-action">
                  Messages</a>
              </div>
            </div>
          </li>

          <li class="list-group-item">
            <div class="row">
              <div class="col-3">
                <i class="fa fa-bookmark"></i>
              </div>
              <div class="col d-none d-xl-block">
                <a href="https://en.wikipedia.org/wiki/Dune_(novel)" class=" list-group-item-action">
                  Bookmarks</a>
              </div>
            </div>
          </li>

          <li class="list-group-item">
            <div class="row">
              <div class="col-3">
                <i class="fa fa-list-ol"></i>
              </div>
              <div class="col d-none d-xl-block">
                <a href="https://en.wikipedia.org/wiki/Dune_(novel)" class=" list-group-item-action">
                  Lists</a>
              </div>
            </div>
          </li>

          <li class="list-group-item">
            <div class="row">
              <div class="col-3">
                <i class="fa fa-circle"></i>
              </div>
              <div class="col d-none d-xl-block">
                <a href="https://en.wikipedia.org/wiki/Dune_(novel)" class=" list-group-item-action">
                  Profile</a>
              </div>
            </div>
          </li>

          <li class="list-group-item">
            <div class="row">
              <div class="col-3">
                <i class="fa fa-magic"></i>
              </div>
              <div class="col d-none d-xl-block">
                <a href="https://en.wikipedia.org/wiki/Dune_(novel)" class=" list-group-item-action">
                  More</a>
              </div>
            </div>
          </li>

        </ul>
         <button class ="btn btn-primary w-100 mt-1 rounded-pill">Tuit</button>
            
            
            
            
<!--   </div>-->
<!--   <div class="d-grid mt-2">-->
<!--     <a href="tweet.html"-->
<!--        class="btn btn-primary btn-block rounded-pill">-->
<!--        Tweet</a>-->
<!--   </div>-->


    `);

}


$('#navigation-sidebar').append(`
	${NavigationSidebar()}
`);

export default NavigationSidebar;
function navbar() {
    return `<div id="nav-topimg">
    <img src="https://img.tttcdn.com/advertising/2022/6/6/LgSB2T1095630046.jpg" alt="">
  </div>

<div id="nav1">
    <div id="smallimg">
        <img src="https://img.tttcdn.com/advertising/2022/6/6/ZUz4OG2130922152.jpg" alt="">
    </div>
    <div id="search">
        <div id="word">
            <div>English</div>
            <i class="fa-solid fa-caret-down"></i>
        </div>
        <div id="searchinput">
            <input type="text" placeholder="What are you looking for?" id="inp">
            <button id="searchbar"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div>
    <div id="loginarea">

        <div id="sign">
            <div class="dropdown">
                <button class="dropbtn"><i class="fa-regular fa-user" style="font-size:29px; color:black; margin-top: 5px;"></i><p style="color: black;">Sign In</p>
                </button>
                <div class="dropdown-content">
                    <p>Welcome to TOMTOP.com</p>
                  <a href="signup.html" id="signin_button">Sign In</a>
                  
                 
                </div>
              </div>
        </div>
        <div id="fav">
            <a href="#"><i class="fa-regular fa-heart" style="font-size:29px;color:black; margin-top: 40px;"></i><p style="color: black;">Favorites</p></a>
        </div>
        <div id="cart">
            <div class="dropdown">
                <button class="dropbtn" id="addingcart">
                    <i class="fa fa-shopping-cart" style="font-size:36px; color: black; margin-top: 50%;"></i><p style="color: black;">Cart</p>
                </button>
                <div class="dropdown-content">
                    
                  <a href="cart.html" style="background-color:#ffbf07 ;"><p >Go to Cart</p></a>
                </div>
            </div>
              
        </div>
        <!-- </div> -->

    </div>
</div>



<div id="nav2">

    <div id="shopdepart">
        <i class="fas fa-bars nav-icon" style="margin-left: 40%; margin-top: 4%;"></i>
        Shop By Departments
    </div>
    <div id="category">
        <div id="a1"><a href="#" style="color: black;"><p>Arrivals</p></a></div>
        <div id="b1">
            <div class="dropdown">
                <button class="dropbtn" style="color: black;">Flash Deals
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="#">Top Seller</a>
                </div>
              </div>
        </div>
        <div id="c1">
            <div class="dropdown">
                <button class="dropbtn" style="color: black;">Coupons
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="#">New Byuer Zone</a>
                </div>
              </div>
        </div>
        <div id="d1">
            <div class="dropdown">
                <button class="dropbtn" style="color: black;">Social Savings
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="#">Slash Price</a>
                  <a href="#">Get free Gift</a>
                </div>
              </div>
        </div>
        <div id="e1">
            <div class="dropdown">
                <button class="dropbtn" style="color: black;">Clearance
                  <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="#">Second Hand</a>
                  <a href="#">Forum</a>

                </div>
              </div>
        </div>
    </div>
    <div id="imgs">
        <img src="https://img.tttcdn.com/advertising/2022/6/1/PgcszO1866383267.jpg" alt="">
    </div>

</div>

    `
}

export { navbar};
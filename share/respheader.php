<header class="responsive">
    <div class="ipnav"><a class="aresp nav-resp"><i class="fas fa-bars"></i></a></div>
    <div class="ipsearch"><a class="aresp search-resp"><i class="fas fa-search"></i></a></div>
    <div class="logo"> <a href="https://www.irupc.net/"><h1 class='text'>IruPC.net</h1></a> </div>
</header>
<div class="search_responsive">
    <form method="get" id="form-search-resp" class="form-resp-ab" action="https://www.irupc.net/search">
        <input type="text" placeholder="Search..." name="q" id="ms" value="" autocomplete="off">
        <button type="submit" class="search-button">
            <span class="fas fa-search"></span>
        </button>
    </form>
    <div class="live-search"></div>
</div>
<div id="arch-menu" class="menuresp">
    <div class="menu">
        <div class="menu-primary-menu-container">
            <ul id="main_header" class="resp">
                <li><a href="https://www.irupc.net" aria-current="page">Home</a></li>
                <li><a onclick="irupcMoviepgurl(1)">Movies</a>
                    <ul class="sub-menu">
                        <li><a onclick="irupclang('English')">English</a></li>
                        <li><a onclick="irupclang('Hindi')">Hindi</a></li>
                        <li><a onclick="irupclang('Tamil')">Tamil</a></li>
                        <li><a onclick="irupclang('Telugu')">Telugu</a></li>
                        <li><a onclick="irupclang('Malayalam')">Malayalam</a></li>
                        <li><a onclick="irupclang('Kannada')">Kannada</a></li>
                        <li><a onclick="irupclang('Korean')">Korean</a></li>
                        <li><a onclick="irupclang('Other')">Other</a></li>
                    </ul>
                </li>
                <li><a onclick="irupctvpgurl(1)">TV Shows</a></li>
                <li><a>Genres</a>
                    <ul class="sub-menu">
                        <li><a onclick="irupcgenre('Action')">Action</a></li>
                        <li><a onclick="irupcgenre('Adventure')">Adventure</a></li>
                        <li><a onclick="irupcgenre('Romance')">Romance</a></li>
                        <li><a onclick="irupcgenre('Crime')">Crime</a></li>
                        <li><a onclick="irupcgenre('Comedy')">Comedy</a></li>
                        <li><a onclick="irupcgenre('Drama')">Drama</a></li>
                        <li><a onclick="irupcgenre('Horror')">Horror</a></li>
                        <li><a onclick="irupcgenre('Family')">Family</a></li>
                        <li><a onclick="irupcgenre('Fantasy')">Fantasy</a></li>
                        <li><a onclick="irupcgenre('Animation')">Animation</a></li>
                        <li><a onclick="irupcgenre('Documentary')">Documentary</a></li>
                        <li><a onclick="irupcgenre('Thriller')">Thriller</a></li>
                        <li><a onclick="irupcgenre('Sci')">Sci-Fi</a></li>
                        <li><a onclick="irupcgenre('History')">History</a></li>
                    </ul>
                </li>
                <li><a onclick="ipMovieCollections()">Movie Collections</a></li>
                <li><a onclick="irupccontact()">Contact US</a></li>
            </ul>
        </div>
    </div>
</div>

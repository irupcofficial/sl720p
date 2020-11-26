  	var space="    ";
  document.getElementById("ips1").innerHTML = space;
  document.getElementById("ips2").innerHTML = space;
  document.getElementById("ips3").innerHTML = space;
  document.getElementById("ips4").innerHTML = space;
    
  document.getElementById("subtitle").innerHTML = "Watch Online";
  document.getElementById("dlWC1").innerHTML = "Download Now";
  document.getElementById("dlWC2").innerHTML = "Download Now";

function ins(){ document.getElementById("numberOfSeason").innerHTML = " 00"; document.getElementById('ins').style.display='block';}
function season01(){ document.getElementById("numberOfSeason").innerHTML = " 01"; document.getElementById('irupcS01').style.display='block';}
function season02(){ document.getElementById("numberOfSeason").innerHTML = " 02"; document.getElementById('irupcS02').style.display='block';}
function season03(){ document.getElementById("numberOfSeason").innerHTML = " 03"; document.getElementById('irupcS03').style.display='block';}
function season04(){ document.getElementById("numberOfSeason").innerHTML = " 04"; document.getElementById('irupcS04').style.display='block';}
function season05(){ document.getElementById("numberOfSeason").innerHTML = " 05"; document.getElementById('irupcS05').style.display='block';}
function season06(){ document.getElementById("numberOfSeason").innerHTML = " 06"; document.getElementById('irupcS06').style.display='block';}       
function season07(){ document.getElementById("numberOfSeason").innerHTML = " 07"; document.getElementById('irupcS07').style.display='block';}
function season08(){ document.getElementById("numberOfSeason").innerHTML = " 08"; document.getElementById('irupcS08').style.display='block';}
function season09(){ document.getElementById("numberOfSeason").innerHTML = " 09"; document.getElementById('irupcS09').style.display='block';}
function season10(){ document.getElementById("numberOfSeason").innerHTML = " 10"; document.getElementById('irupcS10').style.display='block';}
function season11(){ document.getElementById("numberOfSeason").innerHTML = " 11"; document.getElementById('irupcS11').style.display='block';}
function season12(){ document.getElementById("numberOfSeason").innerHTML = " 12"; document.getElementById('irupcS12').style.display='block';}
function season13(){ document.getElementById("numberOfSeason").innerHTML = " 13"; document.getElementById('irupcS13').style.display='block';}
function season14(){ document.getElementById("numberOfSeason").innerHTML = " 14"; document.getElementById('irupcS14').style.display='block';}
function season15(){ document.getElementById("numberOfSeason").innerHTML = " 15"; document.getElementById('irupcS15').style.display='block';}

function s01Info1Id(resolution, size, ripinfo, msg1a, msg2a){ document.getElementById("res").innerHTML = resolution; document.getElementById("Size").innerHTML = size; document.getElementById("Quality").innerHTML = ripinfo;  document.getElementById("headermsg").innerHTML = msg1a; document.getElementById("sheadermsg").innerHTML = msg2a; }
function unhideSeasons(){ document.getElementById("totalWrapper").style.display='block'; document.getElementById("pgDlBtn1").style.display='none'; }

function togglePopupa(noEpisode, url1, url2){ document.getElementById("popup-1").classList.toggle("active"); document.getElementById("sheadermsg").style.display='none'; document.getElementById("headermsg").style.display='block'; document.getElementById("numberOfEpisode").innerHTML = noEpisode; document.getElementById("url1").onclick = function() {url(url1)}; document.getElementById("url2").onclick = function() {url(url2)}; document.getElementById("url3").onclick = function() {watch(url1)}; }

function togglePopupaa(noEpisode, url1, url2){ document.getElementById("popup-1").classList.toggle("active"); document.getElementById('headermsg').style.display='block'; document.getElementById('sheadermsg').style.display='block'; document.getElementById("numberOfEpisode").innerHTML = noEpisode; document.getElementById("url1").onclick = function() {url(url1)}; document.getElementById("url2").onclick = function() {url(url2)}; document.getElementById("url3").onclick = function() {watch(url1)}; }

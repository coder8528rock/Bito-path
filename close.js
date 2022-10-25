let map;
var ltt;
var lngi;
var loclat =[23.417778976478935,23.416956174833647,23.41363875435298,23.41257120996481,23.410264553435745,23.4169550625844,23.41204021502413,23.423272075003478,23.419385265279764,23.416782361712567]
var loclong =[85.43411250687647,85.43580015192138,85.43609976659728,85.4417955432915,85.44026469132939,85.43825607680131,85.44118085109673,85.43279611655181,85.43333932531657,85.43806984952614]
var nam =[" PAHAN ", "MS xerozx ","Laxmi Canteen","Mahak","Veda","Food Cluster","Inner Circle", "TECHNOSOFT ", "CHHOTU DHABA","Paratha wala" ]
var marks=[]
var nbtn=document.getElementById('nearbtn')
nbtn.onclick=()=>{
getlocation()
}
// CURRENT LOCATION


getlocation1()
function getlocation1(){
  if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition1, showError);
  }else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
  }
}

function getlocation(){
  if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
  }else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser doesn't Support Geolocation</p>";
  }
}


var latitude ;
var longitude ;

function setPosition1(position){
  console.log(position)
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  
 ltt = parseFloat(position.coords.latitude);
 lngi =parseFloat(position.coords.longitude);
}


function setPosition(position){
  console.log(position)
  latitude = position.coords.latitude;
  longitude = position.coords.longitude;
  
 ltt = parseFloat(position.coords.latitude);
 lngi =parseFloat(position.coords.longitude);
 updatemap()
  
//  document.getElementById("lat").innerHTML=
  //  " Latitude : " + latitude;

    //document.getElementById("lon").innerHTML=
    //" Longitude : " + longitude;
}

function showError(error){
  notificationElement.style.display = "block";
  notificationElement.innerHTML = `<p> ${error.message} </p>`;
}

//MAP

function initMap() {  
    map = new google.maps.Map(document.getElementById("map"), {
      center: {lat:23.41657,lng: 85.438170},
      zoom: 16,
    });
    // new google.maps.Marker({
    //   position:  { lat: ltt, lng: lngi},
    //   map:map,
    //   title : "home",
    //   animation: google.maps.Animation.BOUNCE,
    // });

    for(let j=0;j<loclat.length;j++)
    {   
      var marker=new google.maps.Marker({
        position:  { lat: loclat[j], lng: loclong[j] },
        map:map,
        title : nam[j],
        animation: google.maps.Animation.BOUNCE,
      });
      marks.push(marker)
   }
}

// Distance Calculation
function getDistance(x1, y1, x2, y2)
{
  let y = x2 - x1;
  let x = y2 - y1;
  
  return Math.sqrt(x * x + y * y);
}

let min=Number.MAX_SAFE_INTEGER;
let nearby="lol"

async function updatemap()
{
  for(let j=0;j<loclat.length;j++)
  {
    var dist=getDistance(ltt,lngi,loclat[j],loclong[j])
    if(dist<min)
    {
      min=dist
      nearby=nam[j];
    }
  }

  //console.log(nearby)
  for(let j=0;j<loclat.length;j++)
  {
    //console.log(marks[j])
    if(marks[j].title!=nearby)
    {
      marks[j].setMap(null) 

      
    }
    
  }
}



//for(i=0;i<10;i++)
//{
  let diff=ltt;//(ltt-loclat[0])+(lngi-loclong[0]);
//}



// REAL TIME CLOCK

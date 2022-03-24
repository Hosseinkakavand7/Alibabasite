window.addEventListener("click",function(event){
  var dropdown_plane=document.querySelectorAll(".palne-sec");
  var anchors_plane=document.querySelectorAll(".plane-anchor");
  if (event.target == dropdown_plane[0] ||event.target == dropdown_plane[1] ||event.target == dropdown_plane[2] ){
    console.log(event.target);
    var b=document.querySelector(".plane-dropdown-content").style.display;
    if (b==""){
      document.querySelector(".plane-dropdown-content").style.setProperty("display","grid");
    }
    else{
      document.querySelector(".plane-dropdown-content").style.setProperty("display","");
    }
  }
  else if (event.target!=anchors_plane[0] && event.target!=anchors_plane[1]){
    document.querySelector(".plane-dropdown-content").style.setProperty("display","");
  }
  var room_drop=document.querySelectorAll(".inputs")[0];
  var room_disp=document.querySelector(".room-choice").style.display;
  if (event.target==room_drop && room_disp==""){
    document.querySelector(".room-choice").style.setProperty("display","grid");
  }
  else if(event.target==room_drop && room_disp=="grid"){
    document.querySelector(".room-choice").style.setProperty("display","");
  }
  else if(event.target!=room_drop){
    var checker=false;
    var window_drop= document.querySelectorAll(".room-choice *")
    for (var i=0;i<17;i++){
      if (event.target == window_drop[i]){
        checker= true;
      }
    }
    if (!checker){
      document.querySelector(".room-choice").style.setProperty("display","");
    }
  }
  var add_minus_button= document.querySelectorAll(".room-button");
  var room_text=update_room_text();
  if (event.target==add_minus_button[0]){
    if(how_many_rooms==1){
      alert("تعداد اتاق نمی تواند کمتر از 1 باشد.")
    }
    else{
      how_many_rooms--;
      how_many_adult=how_many_rooms;
      how_many_minor=0;
      room_text=update_room_text();
      document.querySelectorAll(".number-paragh")[0].textContent=how_many_rooms;
      document.querySelectorAll(".number-paragh")[1].textContent=how_many_adult;
      document.querySelectorAll(".number-paragh")[2].textContent=how_many_minor;
      document.querySelector(".room-people-counter").placeholder=room_text;
    }
  }
  else if (event.target==add_minus_button[1]){
    if(how_many_rooms==4){
      alert("تعداد اتاق نمی تواند بیشتر از 4 باشد.")
    }
    else{
      how_many_rooms++;
      if (how_many_adult<how_many_rooms)
      {
        how_many_adult++;
        document.querySelectorAll(".number-paragh")[1].textContent=how_many_adult;
      }
      room_text=update_room_text();
      document.querySelectorAll(".number-paragh")[0].textContent=how_many_rooms;
      document.querySelector(".room-people-counter").placeholder=room_text;
    }
  }
  else if (event.target==add_minus_button[2]){
    if(how_many_adult==1){
      alert("تعداد بزرگسالان نباید کمتر از 1 باشد.")
    }
    else if(how_many_adult==how_many_rooms){
      alert("تعداد بزرگسالان هر اتاق نباید کمتر از 1 باشد.")
    }
    else{
      how_many_adult--;
      room_text=update_room_text();
      document.querySelectorAll(".number-paragh")[1].textContent=how_many_adult;
      document.querySelector(".room-people-counter").placeholder=room_text;
    }
  }
  else if (event.target==add_minus_button[3]){
    if(how_many_adult==(how_many_rooms*3)){
      alert("تعداد افراد بزرگسال هر اتاق نباید بیشتر از 3 باشد.")
    }
    else if((how_many_minor+how_many_adult)==(how_many_rooms*4)){
      alert("تعداد افراد هر اتاق نباید بیشتر از 4 باشد.")
    }
    else{
      how_many_adult++;
      room_text=update_room_text();
      document.querySelectorAll(".number-paragh")[1].textContent=how_many_adult;
      document.querySelector(".room-people-counter").placeholder=room_text;
    }
  }
  else if (event.target==add_minus_button[4]){
    if (how_many_minor!=0){
      how_many_minor--;
      room_text=update_room_text();
      document.querySelectorAll(".number-paragh")[2].textContent=how_many_minor;
      document.querySelector(".room-people-counter").placeholder=room_text;
    }
  }
  else if (event.target==add_minus_button[5]){
    if(how_many_minor==((how_many_rooms*4)-how_many_adult)){
      alert("تعداد افراد هر اتاق نباید بیشتر از 4 باشد.")
    }
    else{
      how_many_minor++;
      room_text=update_room_text();
      document.querySelectorAll(".number-paragh")[2].textContent=how_many_minor;
      document.querySelector(".room-people-counter").placeholder=room_text;
    }
  }
})

function gap_change(){
  if (window.screen.width>1919){
  document.querySelector(".search-bar").style.setProperty("grid-column-gap","7px");}
  else if(window.screen.width<1920 && window.screen.width>1420){
    document.querySelector(".search-bar").style.setProperty("grid-column-gap","5px");}
  else if(window.screen.width<1420 && window.screen.width>1100){
    document.querySelector(".search-bar").style.setProperty("grid-column-gap","5px");}
  else if(window.screen.width<1100){
    document.querySelector(".search-bar").style.setProperty("grid-column-gap","4px");}
}
window.addEventListener("resize", gap_change);


var page=document.querySelector(".main-tour");
page.style.color="#ffa500"

var q=document.querySelectorAll(".title-buttons button");
var q_hotel=document.querySelectorAll(".hotel-room")
q[5].style.setProperty("background","#ffa500");
q[5].style.setProperty("color","white");
q[5].style.setProperty("border-color","#ffa500");
var Istanbul=[
              {pic:"/static/Images/Istanbul/BlackBirdHotel-Istanbul.jpg", title:"Black Bird Hotel Istanbul", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg"],price:"4,554,000 ریال"},{pic:"/static/Images/Istanbul/AntikIstanbul.jpg", title:"Antik Istanbul", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg"],price:"5,612,000 ریال"},{pic:"/static/Images/Istanbul/AkgünIstanbul.jpg", title:"Akgün Istanbul", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg"],price:"7,751,000 ریال"},{pic:"/static/Images/Istanbul/ConradIstanbulBosphorus.jpg", title:"Conrad Istanbul Bosphorus", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg"],price:"11,991,000 ریال"},{pic:"/static/Images/Istanbul/IntercontinentalIstanbul.jpg", title:"Intercontinental Istanbul", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg"],price:"12,063,000 ریال"},{pic:"/static/Images/Istanbul/CarltonHotel.jpg", title:"Carlton Hotel", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg"],price:"5,550,000 ریال"}
            ];
var Dubai=[
            {pic:"/static/Images/Dubai/HyattRegencyDubai.jpg", title:"Hyatt Regency Dubai", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg"],price:"4,770,000 ریال"},{pic:"/static/Images/Dubai/ExcelsiorHotelDowntown.jpg", title:"Excelsior Hotel Downtown", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg"],price:"9,279,000 ریال"},{pic:"/static/Images/Dubai/HiltonDubaiCreek.jpg", title:"Hilton Dubai Creek", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg"],price:"7,236,000 ریال"},{pic:"/static/Images/Dubai/JumeirahEmiratesTowers.jpg", title:"Jumeirah Emirates Towers", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg"],price:"16,723,000 ریال"},{pic:"/static/Images/Dubai/HabtoorGrandResort.jpg", title:"Habtoor Grand Resort", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg"],price:"26,964,000 ریال"},{pic:"/static/Images/Dubai/JumeirahBeachHotel.jpg", title:"Jumeirah Beach Hotel", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg"],price:"30,457,000 ریال"}
          ];
var Paris= [
            {pic:"/static/Images/Paris/HoteldeCastiglioneParis.jpg", title:"Hotel de Castiglione Paris", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg"],price:"19,577,000 ریال"},{pic:"/static/Images/Paris/HotelCarinaTourEiffel.jpg", title:"Hotel Carina Tour Eiffel", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg","/static/Images/Grey-star.jpg"],price:"19,061,000 ریال"},{pic:"/static/Images/Paris/BradfordElyseesAstotel.jpg", title:"Bradford Elysees - Astotel", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg"],price:"39,008,000 ریال"},{pic:"/static/Images/Paris/DerbyEiffel.jpg", title:"Derby Eiffel", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg","/static/Images/Grey-star.jpg"],price:"16,817,000 ریال"},{pic:"/static/Images/Paris/LeBelmontChampsElysees.jpg", title:"Le Belmont Champs Elysees", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg"],price:"31,452,000 ریال"},{pic:"/static/Images/Paris/HotelPastelParis.jpg", title:"Hotel Pastel Paris", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg","/static/Images/Grey-star.jpg"],price:"20,551,000 ریال"}
          ];
var Ankara=[
            {pic:"/static/Images/Ankara/DivanAnkara.jpg", title:"Divan Ankara", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg"],price:"11,071,000 ریال"},{pic:"/static/Images/Ankara/SheratonAnkara.jpg", title:"Sheraton Ankara Hotel & Convention Center", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg"],price:"15,339,000 ریال"},{pic:"/static/Images/Ankara/CrownePlazaAnkara.jpg", title:"Crowne Plaza Ankara", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg"],price:"11,379,000 ریال"},{pic:"/static/Images/Ankara/EtapMola.jpg", title:"Etap Mola", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg","/static/Images/Grey-star.jpg"],price:"3,337,000 ریال"},{pic:"/static/Images/Ankara/SwissotelAnkara.jpg", title:"Swissotel Ankara", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg"],price:"10,775,000 ریال"},{pic:"/static/Images/Ankara/MarinemHotelAnkara.jpg", title:"Marinem Hotel Ankara", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg","/static/Images/Grey-star.jpg"],price:"4,656,000 ریال"}
          ];
var Baku=[
            {pic:"/static/Images/Baku/TheEmpireHotel.jpg", title:"The Empire Hotel", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg","/static/Images/Grey-star.jpg"],price:"11,225,000 ریال"},{pic:"/static/Images/Baku/SheratonBakuAirportHotel.jpg", title:"Sheraton Baku Airport Hotel", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg"],price:"15,717,000 ریال"},{pic:"/static/Images/Baku/CrownBaku.jpg", title:"Crown Baku", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg"],price:"2,116,000 ریال"},{pic:"/static/Images/Baku/ExcelsiorBaku.jpg", title:"Excelsior Baku", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg"],price:"8,474,000 ریال"},{pic:"/static/Images/Baku/GrandHotelEurope.jpg", title:"Grand Hotel Europe", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg"],price:"7,249,000 ریال"},{pic:"/static/Images/Baku/ParkInnbyRadisson.jpg", title:"Park Inn by Radisson Azerbaijan Baku", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg"],price:"11,268,000 ریال"}
          ];
var Tbilisi=[
            {pic:"/static/Images/Tbilisi/HolidayInnTbilisi.jpg", title:"Holiday Inn Tbilisi", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg"],price:"13,102,000 ریال"},{pic:"/static/Images/Tbilisi/CitadinesFreedomSquareTbilisi.jpg", title:"Citadines Freedom Square Tbilisi", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg"],price:"9,412,000 ریال"},{pic:"/static/Images/Tbilisi/RadissonBluIveria.jpg", title:"Radisson Blu Iveria", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg"],price:"17,706,000 ریال"},{pic:"/static/Images/Tbilisi/BritishHouse.jpg", title:"British-House", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg","/static/Images/Grey-star.jpg"],price:"9,188,000 ریال"},{pic:"/static/Images/Tbilisi/Sharden.jpg", title:"Sharden", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg","/static/Images/Grey-star.jpg"],price:"7,705,000 ریال"},{pic:"/static/Images/Tbilisi/ILiani.jpg", title:"ILiani", stars:["/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Gold-star.jpg","/static/Images/Grey-star.jpg"],price:"7,371,000 ریال"}
          ];
var hotels=[Tbilisi,Baku,Ankara,Paris,Dubai,Istanbul];
var i;
var hotel_counter;
for(let i=0;i<q.length;i++){
  q[i].addEventListener("click", function(){
    var j;
    for(let j=0;j<q.length;j++){
      q[j].style.setProperty("background","white");
      q[j].style.setProperty("color","#979797");
      q[j].style.setProperty("border-color","#b3b3b3");
    }
    q[i].style.setProperty("background","#ffa500");
    q[i].style.setProperty("color","white");
    q[i].style.setProperty("border-color","#ffa500");
    for(let hotel_counter=0;hotel_counter<q_hotel.length;hotel_counter++){
      q_hotel[hotel_counter].querySelector("img").src=hotels[i][hotel_counter]["pic"];
      q_hotel[hotel_counter].querySelector(".name-star p").textContent=hotels[i][hotel_counter]["title"];
      var st=q_hotel[hotel_counter].querySelectorAll(".stars img");
      st[0].src=hotels[i][hotel_counter]["stars"][0];
      st[1].src=hotels[i][hotel_counter]["stars"][1];
      st[2].src=hotels[i][hotel_counter]["stars"][2];
      st[3].src=hotels[i][hotel_counter]["stars"][3];
      st[4].src=hotels[i][hotel_counter]["stars"][4];
      q_hotel[hotel_counter].querySelector(".start-price-paragh-2").textContent=hotels[i][hotel_counter]["price"];
    }

  });
}
var how_many_rooms=1;
var how_many_adult=1;
var how_many_minor=0;

function update_room_text(){
  var rooms_text="";
  if (how_many_minor==0){
    rooms_text=how_many_adult+" بزرگسال، "+how_many_rooms+" اتاق";
  }
  else{
    rooms_text=how_many_adult+" بزرگسال، "+how_many_minor+" کودک، "+how_many_rooms+" اتاق";
  }
  return rooms_text;
}

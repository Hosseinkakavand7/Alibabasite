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
})

function getKayakingCard(gorunenId,gorunecekId){
    var gorunenCard=document.getElementById(gorunenId);
    var gorunecekCard=document.getElementById(gorunecekId);
    var kayaking=document.getElementsByClassName("kayaking")[0];
    var camp=document.getElementById("camp");
    var fire=document.getElementById("fire");
    gorunenCard.style.opacity="0";
    gorunenCard.style.transform="rotateY(180deg)";
    gorunecekCard.style.opacity="1";
    gorunecekCard.style.transform="rotateY(360deg)";
    gorunenCard.style.zIndex="0";
    gorunecekCard.style.zIndex="1";
    kayaking.style.top="-120px";
    kayaking.style.left="-70px";
	camp.style.transform="scale(0,0)";
	fire.style.transform="scale(0,0)";
}
function getCampingCard(gorunenId,gorunecekId){
    var gorunenCard=document.getElementById(gorunenId);
    var gorunecekCard=document.getElementById(gorunecekId);
    var kayaking=document.getElementsByClassName("kayaking")[0];
    var camp=document.getElementById("camp");
    var fire=document.getElementById("fire");
    gorunenCard.style.opacity="0";
    gorunenCard.style.transform="rotateY(180deg)";
    gorunecekCard.style.opacity="1";
    gorunecekCard.style.transform="rotateY(360deg)";
    gorunenCard.style.zIndex="0";
    gorunecekCard.style.zIndex="1";  
    kayaking.style.top="-180px";
    kayaking.style.left="10px";
	camp.style.transform="scale(1,1)";
	fire.style.transform="scale(1,1)";
}

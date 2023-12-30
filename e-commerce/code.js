
/* -----------------------slide------------------------- */
var startt;
var count = 1;
var img1 = document.images[0];
function next() {
    if(count>4){count=1}
    if (count>=1){img1.setAttribute("src","./Images/"+ count +".jpg")}
    count++
}

function previous() {
    if(count<1){count=4}
    if (count<=4){img1.setAttribute("src","./Images/"+ count +".jpg")}
    count--
}


function start(){(startt)=setInterval(next,5000)}
start();

//items

/* --------------------cartCount------------------ */
var countContainer=document.getElementById("count")
var cartCount = localStorage.getItem('cartValue');
var oldId =JSON.parse(localStorage.getItem('idValue')) ;
var values=oldId||{tv1:0,tv2:0,tv3:0,tv4:0,tv1:0,furn1:0,furn2:0,furn3:0,furn4:0,sup1:0,sup2:0,sup3:0,sup4:0}
function add(idValue){ 
    values[idValue] +=1
    cartCount++
    countContainer.innerText=cartCount;
    localStorage.setItem('cartValue',cartCount)
    localStorage.setItem('idValue',JSON.stringify(values))

}
var oldValue = localStorage.getItem('cartValue');
var oldId =JSON.parse(localStorage.getItem('idValue')) ;
countContainer.innerText=oldValue;


/* --------------------filtter------------------ */
var card=document.getElementsByClassName("item")
function filter(value) {
    for (var i = 0; i < card.length; i++) {
        if (!card[i].classList.contains(value)) {card[i].style["display"] = "none";}
        else {card[i].style["display"] = "inline-block";}
           
}

}


/* --------------------cartPage------------------ */
var displayFilter=document.getElementsByClassName("filter")
var displayslide=document.getElementsByClassName("slide")

var removeCard=document.getElementsByClassName("items")
var arr=['tv1','tv2','tv3','tv4','furn1','furn2','furn3','furn4','sup1','sup2','sup3','sup4']
function go() {

    for (var i = 0; i < displayFilter.length; i++) {
        displayFilter[i].style["display"] = "none";     
    }
    for (var i = 0; i < displayFilter.length; i++) {
        displayslide[i].style["display"] = "none";     
    }

    for (var i = 0; i < card.length; i++) {
        card[i].style["display"] = "none";
        var productName = arr[i];
        if (values[productName]>0) {removeCard[i].style["display"] = "inline-block";}
        else {removeCard[i].style["display"] = "none";}
           
}

}

function remove(idValue){  
    

    values[idValue] --;
    cartCount--;
    for (var i = 0; i < card.length; i++) {
        card[i].style["display"] = "none";
        var productName = arr[i];
        if (values[productName]>0) {removeCard[i].style["display"] = "inline-block";}
        else {removeCard[i].style["display"] = "none";}
    }

    
    countContainer.innerText=cartCount;
    localStorage.setItem('cartValue',cartCount)
    localStorage.setItem('idValue',JSON.stringify(values))
   
}
var oldValue = localStorage.getItem('cartValue');
var oldId =JSON.parse(localStorage.getItem('idValue')) ;
countContainer.innerText=oldValue;



  
  





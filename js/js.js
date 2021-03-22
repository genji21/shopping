
let slides = document.getElementsByClassName("banner");
let k =0;
let index = 0 ;
// document.body.onload = function() {
//     slides[0].classList.remove="fade";
// }
function showSlide(k) {
    
    slides[k].style.display='block';
}

function hideSlide(k) { 
    slides[k].style.display="none";
}



function nextSlide() {
    hideSlide(index)
 index++;
 if (index >= slides.length) {
     index  = 0;
 }
 showSlide(index);
}

function hienThiSlideTruocDo(){
    // if(index = 0) {
    //     showSlide(slides[slides.length])
    // }
    
    hideSlide(index);
    
    index--;
    if (index < 0)
    { 
        index = slides.length-1;
       
        

    }
    showSlide(index);
    slides[index].classList.add="fade";

    // showSlide(index);
}
showSlide(0);

// showSlide(index);
// slick slider 2 
// sliderbox
const sliderbox = document.querySelector(".list-slider-box");
// ul slider
const slider_list = document.querySelectorAll('.list-slider-2');
// buttton 
const nextBtn = document.querySelector(".fa-arrow-right");
const prevBtn = document.querySelector(".fa-arrow-left");
// get value of width of slider_list
let size = slider_list[0].clientWidth;
// counter
counter =1;
// flag 3
flag3= false;
// add evenelistener for button 

nextBtn.addEventListener('click',()=>{
  
    
    counter++;

        if (counter == slider_list.length ) {
            counter = 0 ;
            sliderbox.style.transform ="translateX("+ -size*(counter-1) +"px)";
            sliderbox.style.transition = "transform 0.4s ease-in-out"
            // counter++;

        }
        if(flag3 === false) {
            counter =1;
            sliderbox.style.transform ="translateX("+ -size*(counter-1) +"px)";
            sliderbox.style.transition = "transform 0.4s ease-in-out"
            flag3=true;
        }

            sliderbox.style.transform ="translateX("+ -size*counter +"px)";
        sliderbox.style.transition = "transform 0.4s ease-in-out"
        
       
        console.log(counter);

    
}
)
prevBtn.addEventListener('click',()=>{
counter--
console.log(counter);
sliderbox.style.transform ="translateX("+  -size*counter +"px)";
      sliderbox.style.transition = "transform 0.4s ease-in-out"
    if(counter<0  )
   {
    //    console.log(slider_list[counter]);
       counter = slider_list.length-1;
       sliderbox.style.transform ="translateX("+  -size*counter +"px)";
        sliderbox.style.transition = "transform 0.4s ease-in-out"
       

    }
    console.log(counter);
    if(flag3==false ){
        counter = slider_list.length-1;
        sliderbox.style.transform ="translateX("+  -size*counter +"px)";
         sliderbox.style.transition = "transform 0.4s ease-in-out"
        flag3=true;
        }
    }    
)
// menu click
let a = document.getElementsByClassName("fa-bars")[0]
let b =document.getElementById("menu-drop");
let close = document.getElementsByClassName("fa-times")[0];
b.style.display="none";
//  console.log(x1);
let flag = false;
a.onclick = function(){
    console.log(flag);
    if (flag==false) // an
    {
        b.classList.add("luotdinao");
        b.classList.remove("trove")
        b.style.width="60%";
        flag = true;
        b.style.display="block"; 
    }
    else {
        b.classList.remove("luotdinao")
        b.classList.add("trove");
        b.style.width="0%";
        flag = false;
    }
       }
      
       
    

// dong cua so
close.onclick= function (){ 
//  var b = 
b.classList.remove("luotdinao")
b.classList.add("trove");
b.style.width="0%";
flag = false;
//  b.classList.add("trove");
// b.style.display = "none";
}
// search icon an hien 
let search = document.getElementsByClassName('fa-search')[0];

 function searchInput(x){
    let   searchinput = document.getElementsByClassName('menu-input')[0];
    search.classList.toggle('fa-times');
    // search.style.transform ="rotate(20deg)";
    if(flag == false) {
        searchinput.style.display="block";
        flag = true;
    }
    else {
        searchinput.style.display = "none";
        flag = false;
    }
}
// render UI 

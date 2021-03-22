// menu click
let a = document.getElementsByClassName("fa-bars")[0]
let b =document.getElementById("menu-drop");
let close = document.getElementsByClassName("fa-times")[0];
b.style.display="none";

//  console.log(x1);
let flag = false;
a.onclick = function(){
    // console.log(flag);
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
    
    // b.style.display="block";
// console.log(b.getAttribute('display'));
    //    if(b.style.display=="none") {
    //     b.classList.add("luotdinao");
    //     b.classList.remove("trove");
    //     b.style.width="60%";

    //     b.style.display="block";

    //    }
    //     else{
    //         b.classList.remove("luotdinao")
    //         b.classList.add("trove");
    //         b.style.display="none";
    //         b.style.width="0%";


    //     }

       }
      
       
    

// dong cua so
let flag2 = false;

close.onclick= function (){ 
//  var b = 
b.classList.remove("luotdinao")
b.classList.add("trove");
b.style.width="0%";
//  b.classList.add("trove");
// b.style.display = "none";
}
// search icon an hien 
let search = document.getElementsByClassName('fa-search')[0];

 function searchInput(x){
    let  searchinput = document.getElementsByClassName('menu-input')[0];
    search.classList.toggle('fa-times');
    // search.style.transform ="rotate(20deg)";
    if(flag2 == false) {
        searchinput.style.display="block";
        flag2 = true;
    }
    else {
        searchinput.style.display = "none";
        flag2 = false;
    }
}
// collapse 
var coll = document.getElementsByClassName("skill-collapse-title");
  
for (let i = 0; i < coll.length; i++) {
            coll[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var content = coll[i].nextElementSibling;
                if (!content.style.maxHeight) {
                    content.style.maxHeight = content.scrollHeight + "px";
                    
                  
                    
                } else {
                    content.style.maxHeight = null;

                    
                }
                
            }
            );
            
        }
        


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
        
        // let x = slider_list[i].getAttribute('id');
        // if(x === "lastList"){
        //     counter = slider_list.length - 1;
        //  slider_list[i].transform ="translateX("+ - size*counter +"px)";
        // }       
        console.log(counter);

    // if(slider_list[i])
    // console.log(counter);
    // console.log(-size*counter);
}
)
prevBtn.addEventListener('click',()=>{
//     if(slider_list[0].id==="firstList")
//    {
       
//        counter = slider_list.length -1 ;
//        sliderbox.style.transform ="translateX("+  -size*counter*3 +"px)";
//        sliderbox.style.transition = "transform 0.4s ease-in-out"
//   }
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

   



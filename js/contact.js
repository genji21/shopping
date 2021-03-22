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
    function cancelModal() {
    document.getElementById("id01").style.display = "none";
}


function validateEmail(email) {
    var count = 0;
    for (var i = 0; i < email.length; i++) {
        if (email[i] == "@")
            count++;
    }
   if ( count == 1 ) {
       return true;
   }
   else {
       return false;
   }
}

// 1: It nhat 6 ky tu
// 2: Co it nhat 1 ky tu dac biet
// 3: Co it nhat 1 ky tu hoa
function validatePsw(psw) {
    if (psw.length < 6)
        return false;
    
    var flagSpecialChar = false;
    var flagCapital = false;
    for (var i = 0; i < psw.length; i++) {
        if (!(psw[i] >= "A" && psw[i] <= "Z" || psw[i] >= "a" && psw[i] <= "z"))
            flagSpecialChar = true;
        else if (psw[i] >= "A" && psw[i] <= "Z")
            flagCapital = true;
    }
    console.log(flagSpecialChar, flagCapital);
    return flagSpecialChar && flagCapital;
}

// DOM = Document Object Model
var signButton = document.getElementsByClassName("signupbtn")[0];
signButton.onclick = function() {
    
    var pswType = document.querySelectorAll("input[type=password]");
    var psw = pswType[0];
    var pswRepeat = pswType[1];
    // object collection
    var email = document.forms[0].children[0].children[4];

    var flagSuccess = true;
    if (validateEmail(email.value)==false) {
        document.getElementById("err-email").innerHTML = "Vui lòng nhập đúng định dạng email.";
        flagSuccess = false;
    }
    else {
        document.getElementById("err-email").innerHTML = "";
    }

    if (!validatePsw(psw.value)) {
        document.getElementById("err-psw").innerHTML = "Password có ít nhất 6 ký tự, có ít nhất 1 ký tự đặc biệt, có ít nhất 1 ký tự hoa";
        flagSuccess = false;
    }
    else {
        document.getElementById("err-psw").innerHTML = "";
    }

    if (psw.value != pswRepeat.value) {
        document.getElementById("err-psw-repeat").innerHTML = "Mật khẩu này phải đúng với mật khẩu trên.";
        flagSuccess = false;
    }
    else {
        document.getElementById("err-psw-repeat").innerHTML = "";
    }
}

// Get the modal
var modal = document.getElementById('id01');
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



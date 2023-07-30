function changeradio(){
    var other= document.getElementById("others");
    other.value=document.getElementById("inputother").value;
    }
function setRequired(){
  document.getElementById("inputother").required=true;
}

function removeRequired(){
    if(document.getElementById("inputother").required == true){
        document.getElementById("inputother").required=false;
    }
}

function passValues() {
    var mail = document.getElementById("mail").value;
    var item = ""
    if (document.getElementById("parts").checked == true) {
        item = "Parts"
    } else if (document.getElementById("kits").checked == true) {
        item = "Kits"
    } else if (document.getElementById("conv").checked == true) {
        item = "Conversion"
    } else {
        item = document.getElementById("inputother").value;
    }
    var detail = document.getElementById("note").value;

    localStorage.setItem("mail", mail);
    localStorage.setItem("item", item);
    localStorage.setItem("note", detail);
}

function validateEmail(email) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //email format
    return pattern.test(email);
}

function check() {
    form = document.getElementById("form")
    var email = document.getElementById("mail").value;
    console.log(email)
    form.addEventListener('submit', (e) => {
        if (validateEmail(email)) {
            document.getElementById("error").innerHTML = ""
            console.log("yes");
            document.getElementById("form").submit();
            location.reload()
        } else {
            document.getElementById("error").innerHTML = "Warning: Invalid email"
            e.preventDefault();
            document.getElementById("mail").value = ""
            console.log("no");
        }
    })
}
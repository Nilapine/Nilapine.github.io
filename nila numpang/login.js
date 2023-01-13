function Login(){ 
    var user = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (user=="admin" && pass=="123"){
        window.location = "index.html";
        return false;
    }else{
        alert("Username dan password anda salah!");
    }
}
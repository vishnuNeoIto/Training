let userName = prompt("Enter username");
if(userName == 'Admin'){
    let password = prompt("Enter paswprd:");
    if(password != 'TheMaster'){
        alert("Welcome");
    }else if(password == null ){
        alert("Canceled");
    }else{
        alert('Wrong Password');
    }
}else if(userName == '' || userName == null){
    alert("Canceled");
}
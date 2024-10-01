function premium() { 
    console.log("ini  bisa bang");
    const preme = document.getElementById("premi");
    if(preme.style.display === 'none'){
        preme.style.display = 'block';
    } else {
        preme.style.display = 'none';
    }
}


function paket1(){
    window.location.href = '../premium/main.html';
}
function paket2(){
    window.location.href = '../premium/main.html';
}
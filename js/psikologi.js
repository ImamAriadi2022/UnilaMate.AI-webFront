

function testPsikologi(){
    console.log("submit berhasil")
    
    let psikologi = document.getElementById("psikologi-div");
    if (psikologi.style.display == "block"){
        psikologi.style.display = "none";
     } else {
        psikologi.style.display = "block";
     }
}
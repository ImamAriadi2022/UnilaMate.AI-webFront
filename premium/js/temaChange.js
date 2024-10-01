function toggleperubahanTema(){
    console.log('togle ini berfungsi')
    const temaBtn = document.getElementById('tema-popUp-baru');
    if (temaBtn.style.display === 'none') {
        temaBtn.style.display = 'block';
    } else {
        temaBtn.style.display = 'none';
    }
}


function tema1(){
    const contentMainBG = document.getElementById('main-content');
    contentMainBG.classList.add('temaContent1');
    contentMainBG.classList.remove('temaContent2');
    contentMainBG.classList.remove('temaContent3');
}

function tema2(){
    const contentMainBG = document.getElementById('main-content');
    contentMainBG.classList.add('temaContent2');
    contentMainBG.classList.remove('temaContent1');
    contentMainBG.classList.remove('temaContent3');
}

function tema3(){
    const contentMainBG = document.getElementById('main-content');
    contentMainBG.classList.add('temaContent3');
    contentMainBG.classList.remove('temaContent1');
    contentMainBG.classList.remove('temaContent2');
}

function temaDefault(){
    const contentMainBG = document.getElementById('main-content');
    contentMainBG.classList.remove('temaContent1');
    contentMainBG.classList.remove('temaContent2');
    contentMainBG.classList.remove('temaContent3');
}
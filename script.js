
// Code para o sangue A
const amostraA = document.getElementById('amostraTipoA');
const botaoA = document.getElementById('botaoA');
const contentA = document.getElementById('descricaoTipoA')


function sangueA() {
    amostraA.src = './img/sangue-tipo-a.JPG';
    contentA.innerHTML = 'Aglutinina anti-A reagiu com o algutinogêneo A do sangue - Sangue tipo A.'

}

botaoA.addEventListener('click', sangueA);


// Code para o sangue B
const amostraB = document.getElementById('amostraTipoB');
const botaoB = document.getElementById('botaoB');
const contentB = document.getElementById('descricaoTipoB')


function sangueB() {
    amostraB.src = './img/sangue-tipo-b.JPG';
    contentB.innerHTML = 'Aglutinina anti-B reagiu com o algutinogêneo B do sangue - Sangue tipo B.'

}

botaoB.addEventListener('click', sangueB);

//Code para o sangue AB


const amostraAB = document.getElementById('amostraTipoAB');
const botaoAB = document.getElementById('botaoAB');
const contentAB = document.getElementById('descricaoTipoAB')


function sangueAB() {
    amostraAB.src = './img/sangue-tipo-ab.JPG';
    contentAB.innerHTML = 'Aglutinina anti-A reagiu com o algutinogêneo A e a Aglutinina anti-B reagiu com o algutinogêneo B do sangue - Tipo AB.'

}

botaoAB.addEventListener('click', sangueAB);

//Code para o sangue tipo O

const botaoO = document.getElementById('botaoO');
const contentO = document.getElementById('descricaoTipoO')


function sangueO() {
    
    contentO.innerHTML = 'As aglutininas anti-A e anti-B não reagiram com os aglutinogênos A e B - Sangue tipo O.'

}

botaoO.addEventListener('click', sangueO);


//Code para RH+ 
//O anticorpo anti-RH reagiu com a proteína RH das hemaceas - tipo RH+.


const botaoRH = document.getElementById('botaoRhPositivo');
const contentRH = document.getElementById('descricaoRhPositivo')


function rhPositivo() {
    contentRH.innerHTML = 'O anticorpo anti-RH reagiu com a proteína RH das hemaceas - tipo RH+.'

}

botaoRH.addEventListener('click', rhPositivo);





//Code para RH-
//O anticorpo anti-RH não reagiu com a proteína RH das hemaceas - tipo RH-.
const amostraRHn = document.getElementById('amostraTipoRHn');
const botaoRHn = document.getElementById('botaoRHn');
const contentRHn = document.getElementById('descricaoRHn');


function rhNeg() {
    amostraRHn.src = './img/rh-.JPG';
    contentRHn.innerHTML = 'O anticorpo anti-RH não reagiu com a proteína RH das hemaceas - tipo RH-.';

}

botaoRHn.addEventListener('click', rhNeg);
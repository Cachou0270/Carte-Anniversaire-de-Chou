/* Ouverture de la carte */

function openCard(){

document.getElementById("welcome").style.display="none";

let card=document.getElementById("card");

card.classList.remove("hidden");

fireworks();

}




/* Ouverture du cadeau */

function openGift(){

document.getElementById("card").style.display="none";

let gift=document.getElementById("gift");

gift.classList.remove("hidden");

}




/* Message final */

function finalMessage(){

document.getElementById("gift").style.display="none";

let final=document.getElementById("final");

final.classList.remove("hidden");

createHearts();

fireworks();

}




/* Création des coeurs */

function createHearts(){

for(let i=0;i<80;i++){

    let heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="🤍";

    heart.style.left=Math.random()*100+"vw";

    heart.style.animationDuration=
    (4+Math.random()*6)+"s";

    heart.style.fontSize=
    (15+Math.random()*35)+"px";


    document.body.appendChild(heart);


    setTimeout(()=>{

        heart.remove();

    },10000);

}

}




/* Feu d'artifice */

function fireworks(){

for(let i=0;i<40;i++){

    let spark=document.createElement("div");


    spark.style.position="absolute";

    spark.style.width="8px";

    spark.style.height="8px";

    spark.style.borderRadius="50%";


    spark.style.background=
    `hsl(${Math.random()*360},100%,70%)`;


    spark.style.left=
    Math.random()*100+"vw";


    spark.style.top=
    Math.random()*60+"vh";


    spark.style.zIndex="5";


    spark.style.boxShadow=
    "0 0 15px white";


    document.body.appendChild(spark);



    let x=(Math.random()-0.5)*300;

    let y=(Math.random()-0.5)*300;



    spark.animate([

        {
        transform:"translate(0,0)",
        opacity:1
        },

        {
        transform:`translate(${x}px,${y}px)`,
        opacity:0
        }


    ],{

        duration:1500,
        easing:"ease-out"

    });



    setTimeout(()=>{

        spark.remove();

    },1500);

}

}




/* Petit effet automatique */

setInterval(()=>{

fireworks();

},7000);

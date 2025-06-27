	const Contact = document.querySelector('.contact');
	const Services = document.querySelectorAll('section');
    const firstColor= document.querySelector('.C1');
	const secondColor= document.querySelector('.C2');
    const English = document.querySelector('.En');
    const French = document.querySelector('.Fr');
    const Welcome=document.querySelector('.welcomMessage');
    const introdious =document.querySelector('.Introdiousing');
    const Cv=document.querySelector('.myCv');
    const Rights= document.querySelector('.Rights');
    const aboutMe = document.querySelector('.about');
    const T3 = document.querySelector('.T3');
    const T4 = document.querySelector('.T4');
    const T5 = document.querySelector('.T5');
    const T6 = document.querySelector('.T6');
    const menu_language = document.querySelector('.language > span');
    const list=document.querySelector('.selected_language')
    const firstService=document.querySelector('.Text_Fr_firstService');
    const firstServeEn=document.querySelector('.Text_En_firstService');
    const secondService=document.querySelector('.Text_Fr_secondService');
    const secondServiceEn=document.querySelector('.Text_En_secondService');
    const thirdService = document.querySelector('.Text_Fr_thirdService');
    const thirdServiceEn= document.querySelector('.Text_En_thirdService');
    const fourthService = document.querySelector('.Text_Fr_fourthService');
    const faurthServiceEn = document.querySelector('.Text_En_fourthService');
    const firthService = document.querySelector('.Text_Fr_firthService');
    const  firthServiceEn = document.querySelector('.Text_En_firthService');
    const sixthService = document.querySelector('.Text_Fr_sixthService');
    const sixthServiceEn =  document.querySelector('.Text_En_sixthService');
    const header = document.querySelector('header');
    const bars = document.querySelector('.toggle_bars');
/*------------------')---------Traitement---------------------------------------------*/
	firstColor.addEventListener('click',()=>{document.body.style.backgroundColor = "#112A46";});
	secondColor.addEventListener('click',()=>{document.body.style.backgroundColor = "pink";});
    menu_language.addEventListener('click',()=>{ list.style.display = "block"})
    list.addEventListener('click',()=>{ list.style.display = "none"})
    English.addEventListener('click',()=>{	
    firstService.style.display = "none";firstServeEn.style.display = "block";
    secondService.style.display = "none";secondServiceEn.style.display = "block";
    thirdService.style.display = "none";thirdServiceEn.style.display = "block";
    fourthService.style.display = "none";faurthServiceEn.style.display = "block";
    firthService.style.display = "none";firthServiceEn.style.display = "block";
    sixthService.style.display = "none";sixthServiceEn.style.display = "block";
    Welcome.textContent="Welcom on ";
    menu_language.textContent = "Language";
    introdious.textContent="I am a "
    Cv.textContent="Download my Cv";
    aboutMe.textContent="About Me";
    French.textContent="French";
    English.textContent="English";
    T3.textContent="Data analysis";
    T4.textContent="Computer training";
    T5.textContent="Database administration";
    T6.textContent="system aministration";
    Rights.textContent="All rights reserved";
    })
    French.addEventListener('click',()=>{
    location.reload();
    })
    bars.addEventListener('click',()=>{
        bars.classList.toggle("show");
        header.classList.toggle("show");
    })

    
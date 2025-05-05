const menuIcon = document.getElementById("menuIcon");
const menuList = document.getElementById("menuList");
const closeToggle = document.getElementById("closeToggle");
const navLink = document.getElementsByClassName("navLinks");
menuIcon.addEventListener("click",()=>{ 
    menuList.classList.toggle('menu-list-hidden');     
});

closeToggle.addEventListener("click",()=>{
    menuList.classList.toggle('menu-list-hidden');
});

 
// for(let i=0;i<navLink.length;i++){
//     navLink[i].addEventListener("click", ()=>{
//         clearActice();
//         navLink[i].classList.add('active');
//         menuList.classList.toggle('hidden');
//     });
// }

const clearActice = () =>{
    for(let i=0;i<navLink.length;i++){
        navLink[i].classList.remove("active");
    } 
}


const beranda= document.getElementById("beranda");

beranda.addEventListener("click",()=>{
    clearActice();
    beranda.classList.toggle('active'); 
    menuList.classList.toggle('menu-list-hidden');
});

const pendidikan= document.getElementById("pendidikan");

pendidikan.addEventListener("click",()=>{
    clearActice();
    pendidikan.classList.toggle('active'); 
    menuList.classList.toggle('menu-list-hidden');
});


const pekerjaan= document.getElementById("pekerjaan");

pekerjaan.addEventListener("click",()=>{
    clearActice();
    pekerjaan.classList.toggle('active'); 
    menuList.classList.toggle('menu-list-hidden');
});


const keahlian= document.getElementById("keahlian");

keahlian.addEventListener("click",()=>{
    clearActice();
    keahlian.classList.toggle('active'); 
    menuList.classList.toggle('menu-list-hidden');
});


const penelitian= document.getElementById("penelitian");

penelitian.addEventListener("click",()=>{
    clearActice();
    keahlian.classList.toggle('active'); 
    menuList.classList.toggle('menu-list-hidden');
});


const backHome= document.getElementById("back-home");

backHome.addEventListener("click",()=>{
    clearActice();
    backHome.classList.toggle('active'); 
    menuList.classList.toggle('menu-list-hidden');
});


    document.addEventListener('scroll', function(){
        let scrol = scrollY;
        if(scrol > 100){
            let top = document.getElementById('top');
         top.style.display='block'
        }else{
             let top = document.getElementById('top');
            top.style.display='none'
        }
    })
    function box() {
 window.scrollTo({
     top:0,
     left:0,
     behavior: "smooth"
 });
      }


const navList = document.getElementById('navList');
const headerBurger = document.getElementById('headerBurger');

headerBurger .addEventListener('click', ()=>{
navList.classList.toggle('showmenu')
})

function burger(x){
    x.classList.toggle('change')
};


 
function myModal(){
    document.getElementById('modal').style.display = 'block'
}

function myTimes(){
    document.getElementById('modal').style.display = 'none'
}


const myName= document.getElementById('myName');
const text = 'Hello, My name is  Saba Maisuradze';
let index=0;
 const write1= () =>{
   myName.innerHTML=text.slice(0,index);
   index++;
   if(index>text.length){
   
   }
   setTimeout(write1,40);
 }
write1();



const text1 = document.querySelector(".second-text");
const textLad = ()=>{
    setTimeout(()=>{
        text1.textContent="Web Developer"
    },0);
    setTimeout(()=>{
        text1.textContent="Front-end Developer"
    },4000);
}
textLad()

setInterval(textLad,8000)


const checkBox = document.getElementById('checkbox');

checkBox.addEventListener('change', ()=>{
    document.body.classList.toggle("dark")
})

const next = document.getElementById('btn-next');
const back = document.getElementById('btn-back');
const carusel = document.getElementById('carusel')
let caruselZero = 0;
 next.addEventListener('click', ()=> {
    caruselZero -=90;
   carusel.style.transform =`translateZ(-25rem)
rotateY(${caruselZero}deg)`
 })
 back.addEventListener('click', () => {
    caruselZero += 90;
     carusel.style.transform =`translateZ(-25rem)
     rotateY(${caruselZero}deg)`;
 })


const containerIcon = document.getElementById('mypone')

containerIcon.addEventListener( 'click', () =>{
   containerIcon.classList.toggle('active');

});

 const myMesanger = document.getElementById('mymessanger');
 const myChat = document.getElementById('mychat');
  myMesanger.addEventListener('click', () => {
    myChat.classList.toggle('active');
  })

//   const formii = document.getElementById('form');
// function send(e){
//     e.preventDefault();
    


//  const name = document.getElementById('inputText'),
// email = document.getElementById('inputEmail'),
// msg = document.getElementById('textarea');

// Email.send({
//     SecureToken : "C973D7AD-F097-4B95-91F4-40ABC5567812",
//     To : 'them@website.com',
//     From : email.value,
//     Subject : "contact Form",
//     Body :msg.value
// }).then(
//   message => alert(message)
// );
// }

// formii.addEventListener('submit', send);

function sendEmail(){
    Email.send({
        Host : "smtp.yourisp.com",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}
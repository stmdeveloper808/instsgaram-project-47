
   
    // let blb = document.querySelector(".blb");
    // let btn = document.querySelector(".btn");

    

    // btn.addEventListener("click",function(){
    
    //   blb.style.backgroundColor="yellow";

    //   btn.innerHTML="i am on";
    // })
    let btn1 = document.querySelector(".btn1");
    let btn2 = document.querySelector(".btn2");
    let btn3 = document.querySelector(".btn3");

     let ig1 = document.querySelector(".ig1");
     let ig2 = document.querySelector(".ig2");
     let ig3 = document.querySelector(".ig3");
 
     let notification = document.querySelector("h5");
     var value = 0;


     btn3.addEventListener("click",function(){
         btn3.innerHTML="following";
         btn3.style.backgroundColor="green";
         let tl = gsap.timeline();
         tl.to(ig3,{
            scale:1.1,
            scrube:0.5,

          
         })

         value++;
         notification.innerHTML=value;
         
         
  

         setTimeout(function(){
            btn3.remove();
            ig3.remove();
            cd1.remove();
           
        },1000)
     })

     
     btn2.addEventListener("click",function(){
        btn2.innerHTML="following";
        btn2.style.backgroundColor="green";
        let tl = gsap.timeline();
        tl.to(ig2,{
           scale:1.1,
           scrube:0.5,

            
 
        })

        value++;
        notification.innerHTML=value;
       
        

        setTimeout(function(){
           btn2.remove();
           ig2.remove();
           cd1.remove();
       },1000)
    })


    
    btn1.addEventListener("click",function(){
        btn1.innerHTML="following";
        btn2.style.backgroundColor="green";
        btn2.style.borderradius="50px";
        let tl = gsap.timeline();
        tl.to(ig1,{
           scale:1.1,
           scrube:0.5, 
 
        })

        value++;
        notification.innerHTML=value;
        
        
         setTimeout(function(){
            btn1.remove();
            ig1.remove();
            cd1.remove();
         },1000)
    })



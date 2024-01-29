const txts=document.querySelector(".animate-next").children;
            txtsLen=txts.length;
            let index = 0;
            const textInTimer=2500,
                textOutTimer=2500;
            function animateText(){
                for(let i=0;i<txtsLen;i++){
                    txts[i].classList.remove('text-in','text-out')
                }
                txts[index].classList.add('text-in');

                
                setTimeout(function(){
                    txts[index].classList.add("text-out");

                },textOutTimer)



                if (index==txtsLen-1){
                    index =0;
                }
                else{
                    index++;
                }
                
                setTimeout(animateText,1000)
        

            }
            window.onload=animateText



function sendEmail() 
            {
                window.location = "mailto:xyz@yourapplicationdomain.com";
            }
const task = document.querySelector('span')


let randomNum;




const errorAudio = document.getElementById("errorAudio");
const correctAudio = document.getElementById("correctAudio");



function searchTask(){

  randomNum = Math.floor(Math.random() *5 ) +1;
console.log(randomNum)
 
    
    switch (randomNum) {
        case 1:
            // console.log("click on animal")
            task.innerHTML = "click on amimal"
            break;
            
            case 2:
            // console.log("click on bird")
            task.innerHTML = "click on bird"
            break;

            case 3:
                // console.log("click on 3")
            task.innerHTML = "click on fruit"
            
        
            break;


    case 4:
        // console.log("click on 4")
        task.innerHTML = "click on vegetable"
        break;
    case 5:
        // console.log("click on 5")
        task.innerHTML = "click on water"
        break;
        
        
        // case 6:
        //     console.log("click on 6")
        //     task.innerHTML = "click on jndusuuhcusuhudhc"
        //     break;
            
            
            
            
            default:
                break;
            }
            
        }
            
            document.getElementById("search").onclick = function(){
    // console.log("click on button")
    searchTask();
imageDisapear(randomNum);

    
 }


 function imageDisapear(){
     if (randomNum == 1) {
         document.querySelector('.animal').addEventListener('click', function(e) {
             console.log(e.target.tagName);
            //  console.log('animal');
            if(e.target.tagName === "IMG"){
                let removeIt = e.target.parentNode
                removeIt.remove()
                correctAudio.play();
            } else {
                 errorAudio.play();
                 console.log("Playing error sound");
            }
         
         
         
        })
              
    } else if (randomNum == 2) {
        document.querySelector('.bird').addEventListener('click', function(e) {
            console.log(e.target.tagName);
        //  console.log('bird');
        if(e.target.tagName === "IMG"){
            let removeIt = e.target.parentNode
            removeIt.remove()
            correctAudio.play();

        }
        else {

            errorAudio.play();
            console.log("Playing error sound");
        }


        })
} else if (randomNum == 3){
    document.querySelector('.fruit').addEventListener('click', function(e) {
        console.log(e.target.tagName);
        // console.log('fruit');
        if(e.target.tagName === "IMG"){
            let removeIt = e.target.parentNode
            removeIt.remove()
            correctAudio.play();

        } else{
            console.log("Playing error sound"); 
        }

    })
    
} else if(randomNum == 4){
    document.querySelector('.vegetable').addEventListener('click', function(e) {
        console.log(e.target.tagName);
        // console.log('vegetable');
        if(e.target.tagName === "IMG"){
            let removeIt = e.target.parentNode
            removeIt.remove()
            correctAudio.play();

        } else {
            console.log("Playing error sound");
        }

       

    })
}else{
    document.querySelector('.water').addEventListener('click', function(e) {
        console.log(e.target.tagName);
        // console.log('water'); if(e.target.tagName === "IMG"){
                let removeIt = e.target.parentNode
                removeIt.remove()
            correctAudio.play();

            

    })
    
}
}

// imageDisapear(randomNum);


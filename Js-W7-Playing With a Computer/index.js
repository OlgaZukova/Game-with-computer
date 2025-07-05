const input = document.querySelector("#guess");
const button = document.querySelector("#btn");
const answer = Math.floor(Math.random()*20)+1;

input.addEventListener("keypress", function(e){
    if (e.keyCode === 13){
        play();
    }
})

button.addEventListener("click", play);

//1 - Access number of users - DONE!
//2 - It is not possible to enter a number less than 1 and greater than 20 - DONE!
//3 - Latter
//4 - If the number is lower - Enter Higher!
//5 - If the number is higher - Enter Lower!
//6 - If the number is right - Victory!

function play(){
    const userNumber = document.querySelector("#guess").value;
    if (userNumber < 1 || userNumber > 20){
        //alert("No"); - replace it
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Enter a number from 1 to 20!",
        });
    }
    else if(isNaN(userNumber)){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "You must enter a number!",
        });
    }
    else{
        if (userNumber < answer) {
            //alert("Enter Higher!");
           Swal.fire("Try a higher number!",
            "The computer is winning for now!"
           );
        }
        else if(userNumber > answer){
             //alert("Enter Lower!");
           Swal.fire("Try a lower number!",
            "The computer is winning for now!"
           );             
        }
        else{
            //alert("Victory!")
            Swal.fire({
                title: "Victory!!!",
                imageUrl: "victory.jpg",
                imageHeight: 400,
                innerWidth: 600,
                imageAlt: "Victory"
            });
        }
    }
}
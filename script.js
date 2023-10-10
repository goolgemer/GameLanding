let buttonOne= document.getElementById('1');
let buttonTwo= document.getElementById('2');
let buttonThree= document.getElementById('3');
let buttonFour= document.getElementById('4');
let buttonFive= document.getElementById('5');
let buttonSix= document.getElementById('6');
let popup = document.querySelector('.game_popup');
let iframe = document.querySelector('.game_iframe');



buttonOne.addEventListener('click',function(){
    popup.style.display = "block";
    iframe.src = "https://casinoguru-en.com/embedGame?identifier=a0a04f94-d8aa-4d8b-a77d-c3969691e54e"
    });


    buttonTwo.addEventListener('click',function(){
        popup.style.display = "block";
        iframe.src = "https://casinoguru-en.com/embedGame?identifier=8a7e655b-1a8d-4ebc-9e99-c88ce89d3afd"
        });

        buttonThree.addEventListener('click',function(){
            popup.style.display = "block";
            iframe.src = "https://casinoguru-en.com/embedGame?identifier=104abc21-cda8-42a7-be0a-f3714cc6edf9"
            });


            buttonFour.addEventListener('click',function(){
                popup.style.display = "block";
                iframe.src = "https://casinoguru-en.com/embedGame?identifier=1aae00f1-9760-49df-bf48-359b58a97e64"
                });


                buttonFive.addEventListener('click',function(){
                    popup.style.display = "block";
                    iframe.src = "https://casinoguru-en.com/embedGame?identifier=5c1b53ae-ea32-4003-a093-f845999b44d3"
                    });

                    buttonSix.addEventListener('click',function(){
                        popup.style.display = "block";
                        iframe.src = "https://casinoguru-en.com/embedGame?identifier=785da286-6786-486e-9d31-e2d7d7019510"
                        });

    popup.addEventListener('click',function(){
        popup.style.display = "none";
    });
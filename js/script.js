{
    function playGame(number) {
        clearMessages();
        function printMessage(msg){
            const div = document.createElement('div');
            div.innerHTML = msg;
            document.getElementById('messages').appendChild(div);
        }

        function clearMessages(){
            document.getElementById('messages').innerHTML = '';
        }
        
       const getMoveName =  function(numberChoice) {
            if(numberChoice == 1) {
                return 'kamień';
            } else if (numberChoice == 2) {
                return 'papier'; 
            } else if (numberChoice == 3) {
                return 'nożyce';
            } else {
                return 'nieznany ruch'
            }
        }
        
        //printMessage('Mój ruch to: ' + computerMove);
   
        //printMessage('Twój ruch to: ' + playerMove);
        
        function displayResult(number) {
            const randomNo = Math.floor(Math.random() * 3 + 1);
            const computerMove = getMoveName(randomNo);
            const playerMove = getMoveName(number);
            printMessage('Mój ruch to: ' + computerMove);
            printMessage('Twój ruch to: ' + playerMove);
            if(playerMove !== 'nieznany ruch') {
                if((computerMove == 'kamień' && playerMove == 'nożyce') || (computerMove == 'nożyce' && playerMove == 'papier') || (computerMove == 'papier' && playerMove == 'kamień')) {
                    printMessage('Komputer wygrywa!');
                } else if (computerMove == playerMove) {
                    printMessage('It\' a draw');
                } else {
                    printMessage('You win!');
                }
            } else {
                printMessage('Nieznany ruch!');
            }
        }
        //displayResult(computerMove, playerMove);
        displayResult(number);
    }
    
    document.getElementById('play-rock').addEventListener('click', function() {
        playGame(1)
    });
    
    document.getElementById('play-paper').addEventListener('click', function() {
        playGame(2)
    });
    
    document.getElementById('play-scissors').addEventListener('click', function() {
        playGame(3)
    });
}

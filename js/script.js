function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

// let computerMove = `kamień`;

// printMessage('Zagrałem ' +  computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

// let playerMove = `papier`

// printMessage('Zagrałeś ' + playerMove + '! Jeśli ruch komputera to kamień, to wygrywasz!');

//printMessage(Math.random());

// const randomNo = Math.random(); 
// const randomNoPlusOne = randomNo + 1;
// const randomNoPlusOneFloor = Math.floor(randomNoPlusOne);
// console.log(randomNoPlusOneFloor);
// printMessage('Rundomowa liczba to: ' + randomNo);
// printMessage('Rundomowa liczba powiększona o jeden to: ' + randomNoPlusOne);
// printMessage('Po zaokrągleniu w dół: ' + randomNoPlusOneFloor);


const randomNo = Math.floor(Math.random() * 3 + 1);

// console.log('randomNo', randomNo);

console.log('Wylosowana liczba to: ' + randomNo);

let computerMove = 'nieznany ruch'; 

if(randomNo === 1) {
    computerMove = 'kamień';
} else if (randomNo === 2) {
    computerMove = 'papier'; 
} else if (randomNo === 3) {
    computerMove = 'nożyce';
}


printMessage('Mój ruch to: ' + computerMove);
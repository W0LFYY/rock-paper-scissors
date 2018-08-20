var games_played = 0; 
var user_score = 0;
var cpu_score = 0;
var rock = "Rock";
var paper = "Paper"
var scissors = "Scissors"
function game(weapon_value) {
	var possible_computer = ["Rock", "Paper", "Scissors"];
	var computer_weapon = possible_computer[Math.floor(Math.random() * possible_computer.length)];
	var user_weapon = weapon_value;
	var result;
	if (user_weapon === computer_weapon) {
		result = "Tie";
		games_played++;
	}
	 else if (user_weapon == "Rock" && computer_weapon == "Scissors") {
		result = "yay - You Won!";
		games_played++;
		user_score++;
	}
	else if (user_weapon == "Paper" && computer_weapon == "Rock") {
		result = "yay - You Won!";
		games_played++;
		user_score++;
	}
	else if (user_weapon == "Scissors" && computer_weapon == "Paper") {
		result = "yay - You Won!";
		games_played++;
		user_score++;
	}
	else {
		result = "hehe - You Lost!",
		games_played++;
		cpu_score++;
	}
	document.getElementById('player_choice').innerHTML = user_weapon;
	document.getElementById('cpu_choice').innerHTML = computer_weapon;
	document.getElementById('result').innerHTML = result;
	document.getElementById('games').innerHTML = games_played;
	document.getElementById('user_score').innerHTML = user_score;
	document.getElementById('cpu_score').innerHTML = cpu_score;
};
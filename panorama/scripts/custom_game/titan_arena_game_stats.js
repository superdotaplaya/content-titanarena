
var radiant_gpm = 0
var dire_gpm = 0
var player_gpm = []
var player_name = []
var player_id;
var game_time;
var time_until_duel;
var duel_start_time;
var current_duel;
var time_trunc;
var minutes;
var seconds;
var duel_start;

// STARTS and Resets the loop if any
function OnEntityKilled( data ) {
var i;
for (i = 0; i < 10; i++) {
  player_gpm[i] = Players.GetGoldPerMin(i)
  player_name[i] = Players.GetPlayerName(i)
}
$("#gpm1").text =  player_name[0] + " " + Math.trunc(player_gpm[0]) + " GPM"
$("#gpm2").text = player_name[1] + " " + Math.trunc(player_gpm[1]) + " GPM"
$("#gpm3").text = player_name[2] + " " + Math.trunc(player_gpm[2]) + " GPM"
$("#gpm4").text = player_name[3] + " " + Math.trunc(player_gpm[3]) + " GPM"
$("#gpm5").text = player_name[4] + " " + Math.trunc(player_gpm[4]) + " GPM"
$("#gpm6").text = player_name[5] + " " + Math.trunc(player_gpm[5]) + " GPM"
$("#gpm7").text = player_name[6] + " " + Math.trunc(player_gpm[6]) + " GPM"
$("#gpm8").text = player_name[7] + " " + Math.trunc(player_gpm[7]) + " GPM"
$("#gpm9").text = player_name[8] + " " + Math.trunc(player_gpm[8]) + " GPM"
$("#gpm10").text = player_name[9] + " " + Math.trunc(player_gpm[9]) + " GPM"

}

function startTimer(duel_start,current_duel)
{
	game_time = Game.GetDOTATime( false, false )
	time_trunc = Math.trunc(game_time)
	minutes = (duel_start - game_time)/60
	if (current_duel >= 1)
	{
	seconds = 60 - (game_time % 60);
	} else {
	seconds = ((minutes*60)-(duel_start-60))
	}
	if (game_time < duel_start)
	{
		$("#duel-countdown").text = "Duel starts in " + Math.trunc(minutes) + ":" + ("0" + Math.trunc(seconds)).slice(-2)
		$.Schedule(.2, function(){startTimer(duel_start,current_duel) })

	} 
	if (game_time > duel_start -.5 || game_time >= duel_start + .5)
	{
		current_duel += 1
		duel_start = (current_duel*420) + 60
		$.Schedule(.2, function(){startTimer(duel_start,current_duel) })
	}

}
function OnGameRulesStateChange ( Data )
{
$("#duel-countdown").text = "Duel starts in 1 minute"
time_until_duel = 60
duel_start_time = 60
current_duel = 0
startTimer(60,0)
}
    var handle = GameEvents.Subscribe( "entity_killed", OnEntityKilled );
    var handle1 = GameEvents.Subscribe( "game_rules_state_change", OnGameRulesStateChange	   );



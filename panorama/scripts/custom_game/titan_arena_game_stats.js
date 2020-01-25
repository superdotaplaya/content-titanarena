
var radiant_gpm = 0
var dire_gpm = 0
var player_gpm = []
var player_name = []
var player_id;
// STARTS and Resets the loop if any
function OnFoo( data ) {
var i;
for (i = 0; i < 10; i++) {
  player_gpm[i] = Players.GetGoldPerMin(i)
  player_name[i] = Players.GetPlayerName(i)
}
$("#gpm1").text =  player_name[0] + " " + player_gpm[0] + " GPM"
$("#gpm2").text = player_name[1] + " " + player_gpm[1] + " GPM"
$("#gpm3").text = player_name[2] + " " + player_gpm[2] + " GPM"
$("#gpm4").text = player_name[3] + " " + player_gpm[3] + " GPM"
$("#gpm5").text = player_name[4] + " " + player_gpm[4] + " GPM"
$("#gpm6").text = player_name[5] + " " + player_gpm[5] + " GPM"
$("#gpm7").text = player_name[6] + " " + player_gpm[6] + " GPM"
$("#gpm8").text = player_name[7] + " " + player_gpm[7] + " GPM"
$("#gpm9").text = player_name[8] + " " + player_gpm[8] + " GPM"
$("#gpm10").text = player_name[9] + " " + player_gpm[9] + " GPM"

}

    var handle = GameEvents.Subscribe( "entity_killed", OnFoo );



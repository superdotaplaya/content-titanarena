var has_voted = {}
var player = Players.GetLocalPlayer()
var player_name = Players.GetPlayerName(player)

function Vote(voted_number)
{
if (has_voted[player] != true)
{
	if (Game.GameStateIs(2))
{
$.Msg("user $#" + player + " has voted for " + voted_number + " kills")
has_voted[player] = true
GameEvents.SendCustomGameEventToServer( "player_voted", {vote: voted_number, player_name: Game.GetLocalPlayerInfo().player_name} )
}
}
}


var has_voted = {}
var player = Players.GetLocalPlayer()
function Vote(voted_number)
{
if (has_voted[player] != true)
{
$.Msg("user $#" + player + " has voted for " + voted_number + " kills")
has_voted[player] = true
GameEvents.SendCustomGameEventToServer( "player_voted", {vote: voted_number} )
}
}


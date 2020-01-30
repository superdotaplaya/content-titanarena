
function OpenShopPanel()
{
	
var player_name = Game.GetLocalPlayerInfo().player_name
var player_ident = Game.GetLocalPlayerInfo().player_id
	$.Msg(player_ident)

GameEvents.SendCustomGameEventToServer( "player_open_shop", {player_id: player_ident} )

}
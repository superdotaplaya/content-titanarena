
function loadShop()
{
  // Your web app's Firebase configuration

	player_name = Game.GetLocalPlayerInfo().player_name
		$("#shop-title").text = player_name + "'s Customization Shop"


}

function PlayerSelectDevParticle()
{
$.Msg("Player selected dev particle in shop!")


}

function PlayerSelectBetaTester()
{
$.Msg("Player selected beta tester particle in shop!")

}
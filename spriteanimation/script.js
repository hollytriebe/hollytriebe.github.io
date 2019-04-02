document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL:"./icons/titlepagehorozontal-2.png", 
  	makeResponsive:true, 
  	heroSpeed: 200, 
  	autoPlay:false, 
  	monsterSpeed:300, 
  	timeBetweenMonsters:3900, 
  	attackRadius:50, 
  	monsterHitRadius:50, 
  	jumpHeight:250, 
  	attackDuration:500, 
  	pointsPerMonsterKilled:1,
  	monsterMoveToX:105,
  	maxSimultaneousMonsters: 1});
});
document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({makeResponsive:true, heroSpeed: 200, autoPlay:false, monsterSpeed:300, timeBetweenMonsters:3700, attackRadius:50, monsterHitRadius:50, jumpHeight:250, attackDuration:500, pointsPerMonsterKilled:1});
});
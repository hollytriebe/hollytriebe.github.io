document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({makeResponsive:true, autoPlay:false, monsterSpeed:300, timeBetweenMonsters:3700, attackRadius: 500, monsterHitRadius:500, jumpHeight:250, attackSpeed:600});
});
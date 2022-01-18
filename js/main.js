var adjective = [`clouted`, `reeky`, `dissembling`, `yeasty`, `forward`, `errant`, `artless`, `spleeny`, `ruttish`, `puny`, `weedy`, `warped`, `quailing`, `fawning`, `saucy`, `gleeking`, `mangled`, `impertinent`, `goatish`, `rank`, `loggerheaded`, `churlish`, `wayard`, `lumpish`, `jarring`, `tottering`, `frothy`, `bootless`, `currish`];

function newAdjective() {
	var randomNumber = Math.floor(Math.random() * (adjective.length));
	//document.getElementById('adjective').innerHTML = adjective[randomNumber];
}

newAdjective();


var adverb = [`common kissing`, `plume plucked`, `clay brained`, `fool born`, `bettle headed`, `urchin snouted`, `fen sucked`, `dismal dreaming`, `milk livered`, `onion eyed`, `weather bitten`, 'sheep biting', `pottle deep`, `earth vexing`, `clapper clawed`, `base court`, `flap mouthed`, `bat fowling`, `rude growing`, `half faced`, `motley mined`, `folly fallen`, `full gorged`, `knotty pated`, `tickle brained`, `hasty witted`, `shard bone`, `toad spotted`, `hell harted`];

function newAdverb() {
	var randomNumber = Math.floor(Math.random() * (adverb.length));
	//document.getElementById('adverb').innerHTML = adverb[randomNumber];
}

newAdverb();


var noun = [`wagtail`, `skainsmate`, `lout`, 'lewdster', `fustilarian`, `haggard`, `puttock`, `bladder`, `flap-dragon`, `barnacle`, `flirt-grill`, `minnow`, `vassel`, `death-token`, `varlot`, `mammet`, `harpy`, `canker-blossom`, `scut`, `maggot-pie`, `hugger-mugger`, `pidgeon-pie`, `clot-pole`, `codpiece`, `apple-john`, `horn-beast`, `moldwarp`, `foot-licker`, `clack-dish`];

function newNoun() {
	var randomNumber = Math.floor(Math.random() * (noun.length));
	document.getElementById('noun').innerHTML = "Thou" + " " + adjective[randomNumber] + " " + adverb[randomNumber] + " " + noun[randomNumber];
}

newNoun();

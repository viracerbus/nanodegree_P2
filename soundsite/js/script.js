var sounds = {
	49:"lentils",
	50:"slap",
	51:"crash",
	52:"chime",
	71:"chime2",
	72:"chime3",
	53:"goodspell",
	54:"gulp",
	55:"milkcow",
	56:"beanstalk",
	57:"birdtweets",
	48:"badspell",
	81:"giantstep",
	87:"giantstep2",
	69:"horsewalk",
	82:"lentil",
	84:"babycry",
	89:"unhappybirds",
	80:"bodyfall",
	65:"birdchirpxs",
	83:"birdchirps",
	68:"birdchirpm",
	70:"birdchirpl",
	74:"crowlong",
	75:"crowshort",
	32:"stop"
};

var options = [
	"badspell",
	"chime",
	"chime2",
	"chime3",
	"beanstalk",
	"crash",
	"birdtweets",
	"goodspell",
	"giantstep",
	"giantstep2",
	"gulp",
	"milkcow",
	"babycry",
	"horsewalk",
	"lentils",
	"slap",
	"unhappybirds",
	"lentil",
	"bodyfall",
	"birdchirpxs",
	"birdchirps",
	"birdchirpm",
	"birdchirpl",
	"crowlong",
	"crowshort"
];

document.onkeydown = function(e) {
	var soundId = sounds[e.keyCode];
	if (soundId) {
		if (soundId === "stop") {
			options.forEach(function(entry) {
				//console.log(document.getElementById(entry));
				document.getElementById(entry).pause();
				document.getElementById(entry).currentTime = 0;
			})
		}
		else {
			document.getElementById(soundId).play();
		}
		}
	else console.log ("key could not be mapped : code is", e.keyCode);
}
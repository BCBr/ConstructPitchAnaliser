
// Audio manager class for handling audio playback.
let audioManager = null;

// References to loaded audio files as global variables
let DO = null;
let RE = null;


runOnStartup(async runtime =>
{
	// Initialise the audio manager. See AudioManager.js for details.
	audioManager = new AudioManager(runtime);
	//criaAudioContext();
	
	// During the loading screen, load both sound files as
	// AudioBuffers and the music track all in parallel, so
	// they are ready for immediate playback on startup.
	[DO, RE] = await Promise.all([
		audioManager.loadSound("1Do.webm"),
		audioManager.loadSound("2Re.webm"),
	]);
});

// These functions are called by the button click events.
function p1()
{
	setMainBuffer(DO);
	setAnaliser();
	audioManager.playSound(DO);
}

function p2()
{
	setMainBuffer(RE);
	setAnaliser();
	audioManager.playSound(RE);
}

function p3()
{
	setMainBuffer(MI);
	setAnaliser();
	audioManager.playSound(MI);
}

function p4()
{
	setMainBuffer(FA);
	setAnaliser();
	audioManager.playSound(FA);
}

function p5()
{
	setMainBuffer(SOL);
	setAnaliser();
	audioManager.playSound(SOL);
}
function p6()
{
	setMainBuffer(LA);
	setAnaliser();
	audioManager.playSound(LA);
}

function p7()
{
	setMainBuffer(SI);
	setAnaliser();
	audioManager.playSound(SI);
}

function p8()
{
	setMainBuffer(DO2);
	setAnaliser();
	audioManager.playSound(DO2);
}

function p9()
{
	setMainBuffer(RE2);
	setAnaliser();
	audioManager.playSound(RE2);
}

function m1()
{
	setMainBuffer(aprendiz);
	setAnaliser();
	audioManager.playSound(aprendiz);
}
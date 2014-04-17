$(document).on('ready', function() {

	var outerShell = $('<div class="outer-shell"></div>');
	var innerShell = $('<div class="inner-shell"></div>');
	var AmPmLabel = $('<div class="am-pm">PM</div>');
	var AutoLabel = $('<div class="auto">AUTO</div>');
	var clockScreen = $('<div class="clock-screen"></div>');
	var indicator = $('<div class="indicator"></div>');
	var clockText = $('<div class="clock-text">12:17</div>');
	var bottomAm = $('<div class="bottom-am">AM &nbsp; &nbsp; 53  60  70  90  110  140  170 &nbsp; &nbsp; KHz</div>');
	var bottomFm = $('<div class="bottom-fm"></div>');

	$('.container').append(outerShell);

	outerShell.append(innerShell);

	innerShell.append(AmPmLabel);
	innerShell.append(AutoLabel);
	innerShell.append(clockScreen);
	innerShell.append(bottomAm);
	innerShell.append(bottomFm);

	clockScreen.append(indicator);
	clockScreen.append(clockText);
  
});
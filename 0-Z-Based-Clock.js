var counts = {
	year52036560683837100000: 0,
	year839299365868340200: 0,
	year13537086546263552: 0,
	year218340105584896: 0,
	year3521614606208: 0,
	year56800235584: 0,
	year916132832: 0,
	year14776336: 0,
	year238328: 0,
	year3844: 0,
	year62: 0,
	daysHigher: 0,
	daysLower: 0,
	hours: 0,
	minutes: 0,
	seconds: 0
}

function setCounts (years, days, hours, minutes, seconds) {
	if ( seconds ) { counts.seconds = seconds }
	if ( minutes ) { counts.minutes = minutes }
	if ( hours ) { counts.hours = hours }

	if ( days ) {
		counts.daysHigher = Math.floor(days / 62)
		counts.daysLower = Math.floor(days % 62)
	}

	if ( years ) {
		if (years < 62) {
			counts.year62 = years
		}

		if (years > 62 && years < 3844) {
			counts.year3844 = Math.floor(years / 62)
			counts.year62 = (years % 62)
		}
	}
}

var date = new Date()

setCounts(date.getYear() + 1900, 247, date.getHours(), date.getMinutes(), date.getSeconds())

var countTo3844Year = document.getElementById('countTo3844Year')


var ids = {
	year52036560683837100000Counting: document.getElementById('year52036560683837100000Counting'),
	year839299365868340200Counting: document.getElementById('year839299365868340200Counting'),
	year13537086546263552Counting: document.getElementById('year13537086546263552Counting'),
	year218340105584896Counting: document.getElementById('year218340105584896Counting'),
	year3521614606208Counting: document.getElementById('year3521614606208Counting'),
	year56800235584Counting: document.getElementById('year56800235584Counting'),
	year916132832Counting: document.getElementById('year916132832Counting'),
	year14776336Counting: document.getElementById('year14776336Counting'),
	year238328Counting: document.getElementById('year238328Counting'),
	year3844Counting: document.getElementById('year3844Counting'),
	year62Counting: document.getElementById('year62Counting'),
	daysHigherCounting: document.getElementById('daysHigherCounting'),
	daysLowerCounting: document.getElementById('daysLowerCounting'),
	hourCounting: document.getElementById('hourCounting'),
	minuteCounting: document.getElementById('minuteCounting'),
	secondCounting: document.getElementById('secondCounting')
}

var parts = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	')', '!', '@', '#', '$', '%', '^', '&', '*', '(',
	'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
	'`', '~', '-', '_', '=', '+', '[', '{', ']', '}', '\\','|', ';',
	'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
	':', "'", '"', ',', '<', '.', '>', '/', '?',
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
	'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

const randomizerIterator = function () {
	this.ownedScaleAmount = 1
	this.positiveIteration = true
	this.nextScaleAmount = 0

	this.setScaleAmount = setScaleAmount

	return this
}

function setScaleAmount () {
	this.nextScaleAmount = (Math.random() / 100) * 10
	this.ownedScaleAmount = this.positiveIteration ? (this.ownedScaleAmount + this.nextScaleAmount) : (this.ownedScaleAmount - this.nextScaleAmount)
	this.positiveIteration = !this.positiveIteration
}

const rI = new randomizerIterator()
const timeKeeper = document.getElementById('timeKeeper')

function tickPartOfSecond () {
	rI.setScaleAmount()
	timeKeeper.setAttribute('style', `transform: translate(-50%, -50%) scale(${rI.ownedScaleAmount}, ${rI.ownedScaleAmount})`)

	if (counts.seconds === 59) { 
		counts.seconds = 0
		ids.secondCounting.innerText = parts[counts.seconds]
		if (counts.minutes === 59) {
			counts.minutes = 0
			ids.minuteCounting.innerText = parts[counts.minutes]
			if (counts.hours === 23) {
				counts.hours = 0
				ids.hourCounting.innerText = parts[counts.hours]
				if (counts.daysLower === 61) {
					counts.daysLower = 0
					ids.daysLowerCounting.innerText = parts[counts.daysLower]
					if (counts.daysHigher === 5) {
						counts.daysHigher = 0
						ids.daysHigherCounting.innerText = parts[counts.daysHigher]
						if (counts.daysLower === 54) {
							counts.daysLower = 0
							ids.daysLowerCounting.innerText = parts[counts.daysLower]
							counts.daysHigher = 0
							ids.daysHigher.innerText = parts[counts.daysHigher]
							if (counts.year62 === 61) {
								counts.year62 = 0
								ids.year62Counting.innerText = parts[counts.year62]
								if (counts.year3844 === 61) {
									counts.year3844 = 0
									ids.year3844Counting.innerText = parts[counts.year3844]
									if (counts.year238328 === 61) {
										counts.year238328 = 0
										ids.year238328Counting.innerText = parts[counts.year238328]
										if (counts.year14776336 === 61) {
											counts.year14776336 = 0
											ids.year14776336Counting.innerText = parts[counts.year14776336]
											if (counts.year916132832 === 61) {
												counts.year916132832 = 0
												ids.year916132832Counting.innerText = parts[counts.year916132832]
												if (counts.year56800235584 === 61) {
													counts.year56800235584 = 0
													ids.year56800235584Counting.innerText = parts[counts.year56800235584]
													if (counts.year3521614606208 === 61) {
														counts.year3521614606208 = 0
														ids.year3521614606208Counting.innerText = parts[counts.year3521614606208]
														if (counts.year218340105584896 === 61) {
															counts.year218340105584896 = 0
															ids.year218340105584896Counting.innerText = parts[counts.year218340105584896]
															if (counts.year13537086546263552 === 61) {
																counts.year13537086546263552 = 0
																ids.year13537086546263552Counting.innerText = parts[counts.year13537086546263552]
																if (counts.year839299365868340200 === 61) {
																	counts.year839299365868340200 = 0
																	if (counts.year52036560683837100000 === 61) {
																		for (let countOf in counts) {
																			counts[countOf] = 0
																			console.info("End of 0-Z Clock Reached. Reseting to 0.")
																		}
																	} else {
																		counts.year52036560683837100000++
																		ids.year52036560683837100000Counting.innerText = parts[counts.year52036560683837100000]
																	}
																} else {
																	counts.year839299365868340200++
																	ids.year839299365868340200Counting.innerText = parts[counts.year839299365868340200]
																}
															} else {
																counts.year13537086546263552++
																ids.year13537086546263552Counting.innerText = parts[counts.year13537086546263552]
															}
														} else counts.year218340105584896++
														ids.year218340105584896Counting.innerText = parts[counts.year218340105584896]
													} else {
														counts.year3521614606208++
														ids.year3521614606208Counting.innerText = parts[counts.year3521614606208]
													}
												} else {
													counts.year56800235584++
													ids.year916132832Counting.innerText = parts[counts.year916132832]
												}
											} else {
												counts.year916132832++
												ids.year916132832Counting.innerText = parts[counts.year916132832]
											}
										} else {
											counts.year14776336++
											ids.year14776336Counting.innerText = parts[counts.year14776336]
										}
									} else counts.year238328++
									ids.year238328Counting.innerText = parts[counts.year238328]
								} else {
									counts.year3844++
									ids.year3844Counting.innerText = parts[counts.year3844]
								}
							} else {
								counts.year62++
								ids.year62Counting.innerText = parts[counts.year62]
							}
						} else {
							counts.daysLower++
							ids.daysLowerCounting.innerText = parts[counts.daysLower]
						}
					} else {
						counts.daysHigher++
						ids.daysHigherCounting.innerText = parts[counts.daysHigher]
					}
				} else {
					counts.daysLower++
					ids.daysLowerCounting.innerText = parts[counts.daysLower]
				}
			} else {
				counts.hours++
				ids.hourCounting.innerText = parts[counts.hours]
			}
		} else {
			counts.minutes++
			ids.minuteCounting.innerText = parts[counts.minutes]
		}
	} else {
		counts.seconds++
		ids.secondCounting.innerText = parts[counts.seconds]
	}
}

ids.secondCounting.innerText = parts[counts.seconds]
ids.minuteCounting.innerText = parts[counts.minutes]
ids.hourCounting.innerText = parts[counts.hours]
ids.daysLowerCounting.innerText = parts[counts.daysLower]
ids.daysHigherCounting.innerText = parts[counts.daysHigher]
ids.year62Counting.innerText = parts[counts.year62]
ids.year3844Counting.innerText = parts[counts.year3844]
ids.year238328Counting.innerText = parts[counts.year238328]
ids.year14776336Counting.innerText = parts[counts.year14776336]
ids.year916132832Counting.innerText = parts[counts.year916132832]
ids.year56800235584Counting.innerText = parts[counts.year56800235584]
ids.year3521614606208Counting.innerText = parts[counts.year3521614606208]
ids.year218340105584896Counting.innerText = parts[counts.year218340105584896]
ids.year13537086546263552Counting.innerText = parts[counts.year13537086546263552]
ids.year839299365868340200Counting.innerText = parts[counts.year839299365868340200]
ids.year52036560683837100000Counting.innerText = parts[counts.year52036560683837100000]


window.setInterval(tickPartOfSecond, 1000)
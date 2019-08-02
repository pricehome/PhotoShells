module.exports = {
	APPLICATION_ID:
		process.env.APPLICATION_ID ||
		"85a0b9614229dfacfca600ad289483b1debb8e56c208051ac93b6400ddc866da",
	SECRET:
		process.env.SECRET ||
		"c65676844daa4e79ff263c24dcd55f6c10ba7b3054d9481784f9ac680d021e59",
	CALLBACK_URL: process.env.CALLBACK_URL || "http://localhost:3000"
}

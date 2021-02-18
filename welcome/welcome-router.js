const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json({
		message: (`Welcome ${process.env.COHORT}`),
		fact: process.env.COHORT || "I have no fun facts",
		herokuPort: process.env.PORT,
	})
})

module.exports = router

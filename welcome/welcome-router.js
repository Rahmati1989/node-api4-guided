const express = require("express")

const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json({
		message: (`Welcome ${process.env.COHORT}`),
		message: process.env.COHORT || "I have no fun facts"
	})
})

module.exports = router

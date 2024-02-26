const express = require('express')
const { getTweets, getTweet, updateweet, deleteTweet } = require('../controllers/tweetController')
const router = express.Router()

router.get('/tweets', getTweets)
router.get('/tweet/:id', getTweet)
router.post('/tweet', getTweet)
router.put('/updatetweet/:id', updateweet)
router.delete('/deletetweet/:id', deleteTweet)

module.exports = router
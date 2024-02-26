const { GETINTOBDDTWEETS, GETINTOBDDTWEET, POSTINTOBDDTWEET, UPDATEINTOBDDTWEET, DELETEINTOBDDTWEETS } = require("../models/tweetModel");

function getTweets(req, res) {
    GETINTOBDDTWEETS()
        .then(posts => {
            if (posts.length > 0) {
                res.send(posts);
            } else {
                res.send('Vous avez 0 tweets');
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération de tous les tweets :', error);
            res.status(500).send('Une erreur s\'est produite lors de la récupération des tweets');
        });
}
function getTweet(req, res) {

    GETINTOBDDTWEET(+req.params.id)
        .then(post => {
            if (post) {
                res.send(post);
            } else {
                res.status(404).send('Tweet non trouvé');
            }
        })
        .catch(error => {
            console.error('Erreur lors de la récupération du tweet par ID :', error);
            res.status(500).send('Une erreur s\'est produite lors de la récupération du tweet');
        });
}
function postTweet(req, res) {
    POSTINTOBDDTWEET(req.body)
        .then(post => {
            res.send(post);
        })
        .catch(error => {
            console.error('Erreur lors de l\'ajout du tweet :', error);
            res.status(500).send('Une erreur s\'est produite lors de l\'ajout du tweet');
        });
}
function updateweet(req, res) {
    UPDATEINTOBDDTWEET(req.body)
        .then(updatePost => {
            res.send(updatePost);
        })
        .catch(error => {
            console.error('Erreur lors de la mise à jour du tweet :', error);
            res.status(500).send('Une erreur s\'est produite lors de la mise à jour du tweet');
        });
}
function deleteTweet(req, res) {
    DELETEINTOBDDTWEETS(+req.params.id)
        .then(deletePost => {
            res.send(deletePost);
        })
        .catch(error => {
            console.error('Erreur lors de la suppression du tweet :', error);
            res.status(500).send('Une erreur s\'est produite lors de la suppression du tweet');
        });
}





module.exports = {
    getTweets,
    getTweet,
    postTweet,
    updateweet,
    deleteTweet
}
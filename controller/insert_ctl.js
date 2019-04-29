var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/';

exports.add_locker = function () {
    return function (req, res, next) {
        var data = req.body
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
            if (err) throw err;
            var dbo = db.db("CoinLocker");
            dbo.collection("Locker").insertOne(data, function (err, res) {
                if (err) throw err;
                console.log("add duration success");
                db.close();
                next()
            });
        })
    }
}
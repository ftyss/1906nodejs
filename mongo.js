const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
const uri = "mongodb://192.168.203.190";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("ln1906").collection("users");
    // perform actions on the collection object
    collection.find({}).toArray(function(err, docs) {
        console.log("Found the following records");
        console.log(docs)
    });
    console.log(1111);
    client.close();
});
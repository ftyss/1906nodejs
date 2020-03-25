const MongoClient = require('mongodb').MongoClient;
//const uri = "mongodb+srv://<username>:<password>@<your-cluster-url>/test?retryWrites=true&w=majority";
const uri = "mongodb://192.168.203.190";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("ln1906").collection("users");
    // //查找所有数据
    // collection.find({}).toArray(function(err, docs) {
    //     console.log("Found the following records");
    //     console.log(docs)
    // });

    // //按条件查找数据
    // collection.find({ 'name': "aaa" }).toArray(function(err, docs) {
    //     console.log(docs)
    // });

    // //添加数据 insertOne
    // const doc = { name: "bbbb", email: "bbb@qq.com", sev: "M" };
    // collection.insertOne(doc, function(err, result) {
    //     console.log("insertOne\n");
    //     console.log(err);
    //     console.log(result);
    // })

    // //更新数据 updateOne
    // const where1 = { name: "bbbb" };
    // const set1 = { $set: { email: "aaaa@qq.com" } };
    // collection.updateOne(where1, set1, function(err, result) {
    //     console.log("更新成功\n");
    // });

    //删除数据 deleteOne
    const where2 = { name: "bbbb" };

    collection.deleteOne(where2, function(err, result) {
        console.log("删除成功\n");
    });

    //console.log(1111);
    client.close();
});
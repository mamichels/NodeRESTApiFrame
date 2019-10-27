import mongodb, { Db } from 'mongodb';

export let db: Db;

const MongoClient = mongodb.MongoClient;
const uri = "MongoDB Connection String";

MongoClient.connect(uri, { useNewUrlParser: true }).then( client => {
    db = client.db();
    console.log('Connected to MongoDb')
})
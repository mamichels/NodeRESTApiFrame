import mongodb, { Db } from 'mongodb';

export let db: Db;

const MongoClient = mongodb.MongoClient;
const uri = "con string";

MongoClient.connect(uri, { useNewUrlParser: true }).then( client => {
    db = client.db();
    console.log('Connected to MongoDb')
})
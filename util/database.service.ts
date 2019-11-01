import mongodb, { Db } from 'mongodb';

export let db: Db;

const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://roomVoteHandler:61nZAfzvzSGJu5CJ@roomvote-lymox.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(uri, { useNewUrlParser: true }).then( client => {
    db = client.db();
    console.log('Connected to MongoDb')
})
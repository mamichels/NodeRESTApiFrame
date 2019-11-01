import mongodb, { Db } from 'mongodb';
import environment from '../environment.json';

export let db: Db;

const MongoClient = mongodb.MongoClient;
const uri = environment.dbConnectionString;

MongoClient.connect(uri, { useNewUrlParser: true }).then( client => {
    db = client.db();
    console.log('Connected to MongoDb')
})
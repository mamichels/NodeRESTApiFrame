import ModelDto from '../dto/model.dto';
import { db } from '../util/database.service';
import { ObjectID } from 'bson';

export default class DemoDao {

    constructor() {
    }

    public getAll(): Promise<ModelDto[]> {
        return db.collection('models').find().toArray() as Promise<ModelDto[]>;
    }

    public getById(id: number): Promise<ModelDto | null> {
        return db.collection('models').findOne({_id: ObjectID.createFromHexString(id.toString())});
    }

    public addVote(model: ModelDto): Promise<any> {
        return db.collection('models').insertOne(model)
    }

    public editVote(model: ModelDto): Promise<any> {
        return db.collection('models').updateOne({ _id: ObjectID.createFromHexString(model.id.toString()) }, { $set: { description: model.description } })
    }

    public deleteVote(modelId: string): Promise<boolean | any> {
        return db.collection('models').deleteOne({_id: ObjectID.createFromHexString(modelId)});
    }
}

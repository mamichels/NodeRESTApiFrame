import ModelDto from '../dto/model.dto';
import DemoDao from '../dao/demo.dao';

export default class DemoDomain {

    constructor(private readonly demoDao: DemoDao) {
    }
 
    public getAll(): Promise<ModelDto[]> {
        return this.demoDao.getAll();
    }

    public getById(id: number): Promise<ModelDto | null> {
        return this.demoDao.getById(id);
    }

    public add(model: ModelDto): Promise<any> {
        return this.demoDao.addVote(model);
    }

    public edit(model: ModelDto): Promise<any> {
        return this.demoDao.editVote(model);
    }

    public delete(model: string): Promise<boolean | any> {
        return this.demoDao.deleteVote(model);
    }
}

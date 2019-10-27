export default class ModelDto {
    id: number;
    description: string;

    constructor(model: ModelDto) {
        this.id = model.id;
        this.description = model.description;
    }
}

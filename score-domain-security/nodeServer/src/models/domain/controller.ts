import { DomainModel } from "./model";
import { DomainRecord } from "./type";

export interface IDomain {
    create: (params: DomainRecord) => Promise<boolean>
}

export class Domain implements IDomain {
    async create(params: DomainRecord): Promise<boolean> {
        try {
            await DomainModel.create(params);

            return true;
        } catch (error) {
            return false;
        }
    }
}
import { IDomain } from "../models/domain/controller";

class DomainController {
    domain;

    constructor(domain: IDomain) {
        this.domain = domain;
    }

    async createDomain(domain: string) {
        try {
            return await this.domain.create({ domain });
        } catch (error) {
            throw new Error();
        }
    }

    //deleteDomain(id: number) {}
}

export default DomainController;
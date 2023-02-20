import { IDomain } from "../models/domain/controller";
import { isDomain } from "../utils";

class DomainController {
    domain;

    constructor(domain: IDomain) {
        this.domain = domain;
    }

    async createDomain(domain: string) {
        try {
            if (isDomain(domain)) {
                return await this.domain.create({ domain });
            } else {
                throw new Error();
            }
        } catch (error) {
            throw new Error();
        }
    }

    //deleteDomain(id: number) {}
}

export default DomainController;
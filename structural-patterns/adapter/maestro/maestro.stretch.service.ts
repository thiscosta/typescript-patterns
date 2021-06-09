import { MaestroStretch } from "../@types/types";

export class MaestroStretchService {

    getMaestroStretches(): MaestroStretch {
        return {
            destination: {
                city: 'Maestro: Campinas',
                state: 'Maestro: São Paulo',
                street: 'Maestro: Rua X',
                zipCode: 'Maestro: 123',
            },
            origin: {
                city: 'Maestro: Campinas',
                state: 'Maestro: São Paulo',
                street: 'Maestro: Rua X',
                zipCode: 'Maestro: 123',
            }
        }
    }

}
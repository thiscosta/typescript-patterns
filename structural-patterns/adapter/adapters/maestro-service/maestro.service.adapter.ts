import { MaestroStretch } from "../../@types/types";
import { MaestroStretchService } from "../../maestro/maestro.stretch.service";
import { TransformersStretchService } from "../../transformers/transformers.stretch.service";

export class MaestroServiceAdapter extends MaestroStretchService {

    constructor(private transformersService: TransformersStretchService) {
        super();
    }

    getMaestroStretches(): MaestroStretch {
        const transformersAddress = this.transformersService.getTransformersStretches()
        return {
            origin: {
                city: transformersAddress.origem.cidade,
                state: transformersAddress.origem.estado,
                street: transformersAddress.origem.rua,
                zipCode: transformersAddress.origem.cep
            },
            destination: {
                city: transformersAddress.destino.cidade,
                state: transformersAddress.destino.estado,
                street: transformersAddress.destino.rua,
                zipCode: transformersAddress.destino.cep
            }
        }
    }
} 
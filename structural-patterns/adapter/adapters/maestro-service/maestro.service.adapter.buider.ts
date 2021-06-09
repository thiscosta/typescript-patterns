import { TransformersStretchService } from "../../transformers/transformers.stretch.service";
import { MaestroServiceAdapter } from "./maestro.service.adapter";

export class MaestroServiceAdapterBuilder {
    static builder(): MaestroServiceAdapterFacadeBuild {
        return new MaestroServiceAdapterFacadeBuild();
    }
}

class MaestroServiceAdapterFacadeBuild {

    build(transformersService: TransformersStretchService) : MaestroServiceAdapter {
        return new MaestroServiceAdapter(transformersService);
    }

}



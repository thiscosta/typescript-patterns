import { MaestroStretchService } from "../maestro/maestro.stretch.service";

export class CollectPlanner {

    constructor(private maestroService: MaestroStretchService) {}

    planCollect() {
        const maestroStretches = this.maestroService.getMaestroStretches();
        console.log('Coleta planejada para o endereco ', maestroStretches)
    }
}
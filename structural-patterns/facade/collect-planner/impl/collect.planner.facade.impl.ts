import { BanguelaService } from "../../external/banguela/banguela.service";
import { LocalsService } from "../../external/locals/locals.service";
import { MaestroService } from "../../external/maestro/maestro.service";
import { TransformersService } from "../../external/transformers/transformers.service";
import { CollectPlannerFacade } from "../collect.planner.facade";

export class CollectPlannerFacadeImpl implements CollectPlannerFacade {

    constructor(
        private banguelaService: BanguelaService,
        private localsService: LocalsService,
        private maestroService: MaestroService,
        private transformersService: TransformersService
    ) {}

    plan(subOrderId): any {
        const maestroOrder = this.maestroService.getMaestroOrder(subOrderId)
        const transformersData = this.transformersService.getTransformersData(maestroOrder.basketId)
        const inboundReceiptStore = this.banguelaService.getReceiptStore(maestroOrder)
        const isReceiptStoreDifferentFromTransformers = transformersData.stretches[0].destination = inboundReceiptStore.receipt
        const address = isReceiptStoreDifferentFromTransformers
            ? this.localsService.getLocals(inboundReceiptStore.receipt)  
            : transformersData.stretches[0].destination;
        console.log('Collect planned', address)
    }
}
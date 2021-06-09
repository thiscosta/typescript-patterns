import { CollectPlannerFacadeImpl } from "./collect-planner/impl/collect.planner.facade.impl"
import { BanguelaService } from "./external/banguela/banguela.service"
import { LocalsService } from "./external/locals/locals.service"
import { MaestroService } from "./external/maestro/maestro.service"
import { TransformersService } from "./external/transformers/transformers.service"

(() => {
    new CollectPlannerFacadeImpl(
        new BanguelaService(),
        new LocalsService(),
        new MaestroService(),
        new TransformersService()
    ).plan('uuid-aleatorio')
})()
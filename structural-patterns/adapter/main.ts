import { MaestroServiceAdapterBuilder } from "./adapters/maestro-service/maestro.service.adapter.buider"
import { CollectPlannerBuilder } from "./collect-planner/collect.planner.builder"
import { MaestroStretchService } from "./maestro/maestro.stretch.service"
import { TransformersStretchService } from "./transformers/transformers.stretch.service"

(() => {
    const maestroStretchService = new MaestroStretchService()
    const collectPlannerMaestro = CollectPlannerBuilder.builder().build(maestroStretchService)
    collectPlannerMaestro.planCollect()

    const transformersService = new TransformersStretchService()
    const maestroStretchServiceAdapter = MaestroServiceAdapterBuilder.builder().build(transformersService)
    const collectPlannerMaestroAdapter = CollectPlannerBuilder.builder().build(maestroStretchServiceAdapter)
    collectPlannerMaestroAdapter.planCollect()
})()
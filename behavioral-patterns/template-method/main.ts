import { MaestroEventHandlerType } from "./@types/types";
import { MaestroEventHandlerBuilder } from "./event-handler/maestro.events.handler.builder";

(() => {
    MaestroEventHandlerBuilder
        .builder()
        .build(MaestroEventHandlerType.CONVENTIONAL)
        .handleEvent();
    MaestroEventHandlerBuilder
        .builder()
        .build(MaestroEventHandlerType.SHIPFROMSELLER)
        .handleEvent();
    MaestroEventHandlerBuilder
        .builder()
        .build(MaestroEventHandlerType.DROPOFF)
        .handleEvent();
})()
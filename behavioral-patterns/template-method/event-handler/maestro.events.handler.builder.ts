import { MaestroEventHandlerType } from "../@types/types";
import { ConventionalMaestroEventHandler } from "./conventional.maestro.events.handler";
import { DropoffMaestroEventHandler } from "./dropoff.maestro.events.handler";
import { MaestroEventHandler } from "./maestro.events.handler";
import { ShipFromSellerMaestroEventHandler } from "./shipfromseller.maestro.events.handler copy";


export class MaestroEventHandlerBuilder {
    static builder(): MaestroEventHandlerBuild {
        return new MaestroEventHandlerBuild();
    }
}

class MaestroEventHandlerBuild {

    build(handlerType: MaestroEventHandlerType) : MaestroEventHandler {
        const handlerByType = {
            [MaestroEventHandlerType.CONVENTIONAL]: new ConventionalMaestroEventHandler(),
            [MaestroEventHandlerType.SHIPFROMSELLER]: new ShipFromSellerMaestroEventHandler(),
            [MaestroEventHandlerType.DROPOFF]: new DropoffMaestroEventHandler(),
        }
        return handlerByType[handlerType];
    }

}



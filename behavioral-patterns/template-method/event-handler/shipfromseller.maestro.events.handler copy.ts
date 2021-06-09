import { MaestroEventHandler } from "./maestro.events.handler";

export class ShipFromSellerMaestroEventHandler extends MaestroEventHandler {

    protected notifyEvents() {
        console.log('Notificado o event de ship from seller \n')
    }

}
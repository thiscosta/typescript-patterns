import { MaestroEventHandler } from "./maestro.events.handler";

export class DropoffMaestroEventHandler extends MaestroEventHandler {

    protected notifyEvents() {
        console.log('Notificado o event dropoff \n')
    }

}
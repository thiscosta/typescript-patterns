import { MaestroEventHandler } from "./maestro.events.handler";

export class ConventionalMaestroEventHandler extends MaestroEventHandler {

    protected notifyEvents() {
        console.log('Notificado o event convencional \n')
    }

}
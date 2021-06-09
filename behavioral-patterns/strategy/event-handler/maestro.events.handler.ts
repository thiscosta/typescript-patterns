import { NotificationStrategy } from "./notification-strategies/notification.strategy";

export class MaestroEventHandler {

    private notificationStrategy: NotificationStrategy;

    setNotificationStrategy(notificationStrategy: NotificationStrategy) {
        this.notificationStrategy = notificationStrategy;
    }

    handleEvent() {
        this.getMaestroOrder();
        this.getStretches();
        this.saveCarrier();
        this.notifyEvents();
    }

    private getMaestroOrder() {
        console.log('Buscou order no maestro')
    }
    private getStretches() {
        console.log('Buscou trecho no transformers')
    }
    private saveCarrier() {
        console.log('Salvou carrier')
    }
    
    protected notifyEvents() {
        this.notificationStrategy.execute()
    }

}
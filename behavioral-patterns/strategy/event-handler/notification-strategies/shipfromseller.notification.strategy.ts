import { NotificationStrategy } from "./notification.strategy";

export class ShipFromSellerNotificationStrategy implements NotificationStrategy {

    execute() {
        console.log('Notificação convencional,')
    }

}
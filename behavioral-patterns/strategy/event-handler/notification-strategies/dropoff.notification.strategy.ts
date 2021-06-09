import { NotificationStrategy } from "./notification.strategy";

export class DropoffNotificationStrategy implements NotificationStrategy {

    execute() {
        console.log('Notificação convencional,')
    }

}
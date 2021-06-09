import { NotificationStrategy } from "./notification.strategy";

export class ConventionalNotificationStrategy implements NotificationStrategy {

    execute() {
        console.log('Notificação convencional,')
    }

}
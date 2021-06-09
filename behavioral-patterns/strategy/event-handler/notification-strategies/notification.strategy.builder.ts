import { NotificationStrategy } from "./notification.strategy";
import { NotificationStrategyType } from "../../@types/types";
import { ConventionalNotificationStrategy } from "./conventional.notification.strategy";
import { ShipFromSellerNotificationStrategy } from "./shipfromseller.notification.strategy";
import { DropoffNotificationStrategy } from "./dropoff.notification.strategy";


export class NotificationStrategyBuilder {
    static builder(): NotificationStrategyBuild {
        return new NotificationStrategyBuild();
    }
}

class NotificationStrategyBuild {

    build(strategy: NotificationStrategyType) : NotificationStrategy {
        const notificationByStrategy = {
            [NotificationStrategyType.CONVENTIONAL]: new ConventionalNotificationStrategy(),
            [NotificationStrategyType.SHIPFROMSELLER]: new ShipFromSellerNotificationStrategy(),
            [NotificationStrategyType.DROPOFF]: new DropoffNotificationStrategy(),
        }
        return notificationByStrategy[strategy];
    }

}



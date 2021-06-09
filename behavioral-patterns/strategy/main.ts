import { NotificationStrategyType } from "./@types/types";
import { MaestroEventHandler } from "./event-handler/maestro.events.handler";
import { NotificationStrategyBuilder } from "./event-handler/notification-strategies/notification.strategy.builder";

(() => {
    const conventionalStrategy = NotificationStrategyBuilder
        .builder()
        .build(NotificationStrategyType.CONVENTIONAL);

    const shipFromSellerStrategy = NotificationStrategyBuilder
        .builder()
        .build(NotificationStrategyType.SHIPFROMSELLER);

    const dropoffStrategy = NotificationStrategyBuilder
        .builder()
        .build(NotificationStrategyType.DROPOFF);

    const maestroEventHandler = new MaestroEventHandler();
 
    //Conventional
    maestroEventHandler.setNotificationStrategy(conventionalStrategy);
    maestroEventHandler.handleEvent();

    //Ship from seller
    maestroEventHandler.setNotificationStrategy(shipFromSellerStrategy);
    maestroEventHandler.handleEvent();

    //Dropoff
    maestroEventHandler.setNotificationStrategy(dropoffStrategy);
    maestroEventHandler.handleEvent();
        
})()
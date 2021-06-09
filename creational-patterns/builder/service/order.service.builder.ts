import { OrderServiceFacadeImpl } from './impl/order.service.facade.impl';
import { OrderServiceFacade } from './order.service.facade';

export class OrderServiceBuilder {
    static builder(): OrderServiceFacadeBuild {
        return new OrderServiceFacadeBuild();
    }
}

class OrderServiceFacadeBuild {

    private _logger?: any;

    logger(logger: any): OrderServiceFacadeBuild {
        this._logger = logger;
        return this;
    }

    build(_orderDao: any, _rabbitmqPublisher: any) : OrderServiceFacade {
        return new OrderServiceFacadeImpl(_orderDao, _rabbitmqPublisher, this._logger);
    }

}



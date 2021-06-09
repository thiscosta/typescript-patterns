import { OrderServiceFacade } from '../order.service.facade';

export class OrderServiceFacadeImpl implements OrderServiceFacade {
    constructor(
        private orderDao: any,
        private rabbitmqPublisher: any,
        private logger?: any
    ) {}

    async getOrder(): Promise<any> {
        return this.orderDao.findOrder()
    }
    async createOrder(order: any): Promise<any> {
        const createdOrder = await this.orderDao.createOrder(order);
        this.rabbitmqPublisher.publish(createdOrder);
        this.logIfEnabled(createdOrder);
        return createdOrder;
    }

    private async logIfEnabled(order: any) {
        await this.logger?.log(order);
    }
}
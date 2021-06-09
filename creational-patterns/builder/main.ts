import { OrderServiceBuilder } from "./service/order.service.builder"

(() => {

    const orderDao = {
        async findOrder(): Promise<any> {},
        async createOrder(order: any): Promise<any> { 
            console.log('Created order: ', order)
            return order
        }
    }

    const rabbitmqPublisher = {
        async publish(order: any): Promise<any> { console.log('published order', order) }
    }

    const orderServiceWithoutLogger = OrderServiceBuilder
        .builder()
        .build(orderDao, rabbitmqPublisher)

    const orderServiceWithLogger = OrderServiceBuilder
        .builder()
        .logger({ log: (order: any) => { console.log("Logging: ", JSON.stringify(order)) }})
        .build(orderDao, rabbitmqPublisher)


    orderServiceWithoutLogger.getOrder()
    orderServiceWithLogger.getOrder()

    orderServiceWithoutLogger.createOrder({ name: 'Order without logger' })
    orderServiceWithLogger.createOrder({ name: 'Order with logger' })
})()
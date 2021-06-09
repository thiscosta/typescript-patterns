export interface OrderServiceFacade {
    getOrder(): Promise<any>
    createOrder(order: any): Promise<any>
}
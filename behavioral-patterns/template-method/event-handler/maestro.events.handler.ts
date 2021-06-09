export abstract class MaestroEventHandler {

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
    
    protected abstract notifyEvents()

}
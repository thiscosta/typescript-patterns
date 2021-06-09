export class TransformersService {

    getTransformersData(basketId): any {
        console.log('getTransformersData ', basketId)
        return { stretches: [{
            destination: '123'
        }] }
    }

}
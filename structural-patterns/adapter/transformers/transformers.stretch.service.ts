import { TransformersStretch } from "../@types/types";


export class TransformersStretchService {

    getTransformersStretches(): TransformersStretch {
        return {
            destino: {
                cidade: 'Transformers: Campinas',
                estado: 'Transformers: São Paulo',
                rua: 'Transformers: Rua X',
                cep: 'Transformers: 123'
            },
            origem: {
                cidade: 'Transformers: Campinas',
                estado: 'Transformers: São Paulo',
                rua: 'Transformers: Rua X',
                cep: 'Transformers: 123'
            }
        }
    }

}
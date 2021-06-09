export interface MaestroAddress {
    zipCode: string;
    state: string;
    city: string;
    street: string;
}

export interface MaestroStretch {
    origin: MaestroAddress;
    destination: MaestroAddress;
}

export interface TransformersAddress {
    cep: string;
    estado: string;
    cidade: string;
    rua: string;
}

export interface TransformersStretch {
    origem: TransformersAddress;
    destino:TransformersAddress;
}
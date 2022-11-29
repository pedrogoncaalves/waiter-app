


export interface Order {
    _id: string;
    table: string;
    status: 'DONE' | 'WAITING' | 'IN_PRODUCTION'
    products: Array<{
        _id: string;
        quantity: number;
        product: {
            name: string;
            imagePath: string;
            price: number;
            
        }
    }>

}



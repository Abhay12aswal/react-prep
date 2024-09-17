const score :Array<number>=[];
const names : number [] = []

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree <type>(val: type): type{
    return val
}

identityThree("3")

function identityFour<T>(val: T): T{
    return val
}

interface Bootle{
    brand: string,
    type: number
}

identityFour<Bootle>({brand: 'adf',type:1});
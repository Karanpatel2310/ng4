// export class Ingredient {
//     public name: string;
//     public amount: number;

//     constructor(name: string, amount: number) {
//         this.name = name;
//         this.amount = amount;
//     }
// }

// Above code and below code working are same also below code is shortcut of above code in typescript

export class Ingredient {
    constructor(public name: string, public amount: number) {}
}
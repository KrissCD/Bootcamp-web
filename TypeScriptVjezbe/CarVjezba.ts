class Car {
    private make: string;
    private model: string;
    private year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

public getInfo(): string {
    return this.make + " " + this.model + " (" + this.year + ")";
}


public startEngine(): void {
    console.log("Engine Started")
}

public static getNumberOfWheels(): number {
    return 4;
}

}


const myCar = new Car("Ferrari","Portofino M", 2022);

console.log(myCar);
myCar.startEngine();

console.log(Car.getNumberOfWheels());


class ElectricCar extends Car {
    private batteryCapacity: number;

    constructor(make: string, model: string, year: number, batteryCapacity: number) {
        super(make, model, year);
        this.batteryCapacity = batteryCapacity
    }

    public charge(): void {
        console.log("Charging battery to " + this.batteryCapacity + "kWh")
    }

    public getInfo(): string {
        return super.getInfo() + " - Battery: " + this.batteryCapacity + " kWh";
    }   
}

const myElectric = new ElectricCar("Lucid", "Air", 2023, 100);
console.log(myElectric.getInfo());
myElectric.startEngine();

myElectric.charge();

console.log(Car.getNumberOfWheels());



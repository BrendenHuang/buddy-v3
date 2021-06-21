export class Workout {
    name: string;
    description: string;
    id: string;


    constructor(name: string, description: string, id?:string) {
    this.name = name;
    this.description = description;
    this.id = id;
    }
}
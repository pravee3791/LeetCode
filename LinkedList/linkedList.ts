// interface ILNode<T>{
//     val: T,
//     next: ILNode<T> | null,
// }

// interface ILinkedList<T> {
//     head: ILNode<T>| null,
//     size:number,
//     add:(element:ILNode<T>) => void,
//     insertAt?: (element:ILNode<T>, location:number) => void,
//     removeFrom?: (location:number)=>void,
//     removeElement?: (element:ILNode<T>)=>void,
    
//     // Helper Methods
//     isEmpty?:()=>boolean,
//     size_Of_List?:() => number,
//     PrintList?:() =>void,
// }

// class LNode<T> implements ILNode<T>{
//     public val: T ;
//     public next: LNode<T>|null = null;
//     constructor(val:T){
//         this.val = val;
//     }
// }

// class LinkedList<T> implements ILinkedList<T>{
//      public head: ILNode<T> | null;
//      public size: number;
//      constructor(){
//          this.head = null;
//          this.size = 0;
//      }
//      add = (element:ILNode<T>) =>{
//         const newnode:ILNode<T> = new LNode(element);
//         const current: any = null;
//         if(this.head === null){
//             this.head = newnode;
//         }

//      }

// }

interface Person {
    name: string,
    age: number,
    description : (name: string, age:string) => void;
}

class Person implements Person {
    public name: string;
    public age: number;
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    public description = (name: string, age: string) => {
        console.log(`The ${this.name} is ${this.age} years old.`)
    };
} 

interface SeniorConsultant {
    employeeId: number;
    person: Person;
    job: () => void;
}

class SeniorConsultant implements SeniorConsultant{
    employeeId: number;
    person: Person | null;
    constructor(employeeId:number){
        this.employeeId = employeeId;
    }
    add = (person:Person) =>{
        this.person = new Person;
    }
    
}


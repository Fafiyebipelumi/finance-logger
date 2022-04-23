import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
const form = document.querySelector('.new-item-form');
// Inputs
const type = document.querySelector('#type');
const ToFrom = document.querySelector('#tofrom');
const Details = document.querySelector('#details');
const Amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [ToFrom.value, Details.value, Amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
// Tuples
// // ENUMS
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR, PERSON }
// interface Resource<T> {
//     uid: number;
//     resourceType: number;
//     data: T;
// }
// const docOne: Resource<object> = {
//     uid: 1,
//     resourceType: ResourceType.BOOK,
//     data: { title: 'Name of the wind' }
// }
// const docTwo: Resource<object> = {
//     uid: 10,
//     resourceType: ResourceType.PERSON,
//     data: { name: 'Pelumi' }
// }
// console.log(docOne, docTwo);
// GENERICS
// const addUID = <T>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return { ...obj, uid }
// }
// let docOne = addUID({ name: 'Pelumi', age: 40 })
// console.log(docOne.age);
// // With Interfaces
// interface Resource<T> {
//     uid: number;
//     resourceName: string;
//     data: T;
// }
// const docThree: Resource<object> = {
//     uid: 1,
//     resourceName: 'Pelumi',
//     data: { name: 'Farmo' }
// }
// const docFour: Resource<string[]> = {
//     uid: 2,
//     resourceName: 'Shopping List',
//     data: ['Bread', 'Milk', 'Toilet Roll']
// }
// console.log(docThree);
// console.log(docFour);
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('Pelumi', 'Project on frontend web', 100)
// docTwo = new Payment('Kayode', 'Project on backend web', 200)
// let docs: HasFormatter[] = []
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne = new Invoice('Pelumi', 'Project on Pagechap', 100);
// const invTwo = new Invoice('Kayode', 'Project on School website', 300);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);
// invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
// })
// // Interfaces
// interface IsPerson {
//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number
// }
// const me: IsPerson = {
//     name: 'Pelumi',
//     age: 30,
//     speak(language: string): void {
//         console.log(language)
//     },
//     spend(amount: number): number {
//         console.log('I spent', amount)
//         return amount
//     }
// }
// const greetPerson = (person: IsPerson) => {
//     console.log('Hello', person.name)
// }
// greetPerson(me);
// console.log(me);

// type UserName = (n: number ,m : number)=> number;

// const func: UserName = (n,m)=>{
//     console.log(n,m);
//     return n*m;
// }

// const User={
//     name: 'hitesh',
//     email: 'hitesh@gmail.com',
//     isActive: true 
// }


// function createCourse():{name: string , price: number}{
//     return {name: "reactjs", price: 233};
// }

// createCourse()

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean
// }

// type Mystring = string

// function createUser (user: User):User{
//     return {name: user.name,email:  user.email,isActive:true}
// }   

// const newUser = createUser({name:"abhay", email:'abhay', isActive:true});
// console.log(newUser)

//array -------------------------------------------------

// const allUsers: User[]=[];
// const newUser: Array<number>=[];

// type User = {
//     name: string,
//     isActive: boolean
// }

// const allUsers: User[]=[];

// allUsers.push({name: 'abhay', isActive: true})

//union ----------------------------------------------------

// let score: number | string = 43;

// const data: number[] = [1,2,3];
// const data2: string[]=["1","2","3"];

// const data3 : (string | number) []= ["1","2",3];


//enums -------------------------------------------------

// enum searChoice {
//     aisle=10,
//     middle=23,
//     window='window',
// }

// const hcSeat = searChoice.aisle;

//interface ---------------------------------------------------

// interface User {
//     email: string,
//     userId: number,
//     googleId?: string,
//     startTrail: ()=> void,
//     endTrail(): string,
//     getCoupon(couponname: string,value: number): number,
// }


// interface Admin extends User {
//     role: "admin" | "ta"
// }

// const hitesh: Admin = {email: "H@gmail.com",userId:1,
//     startTrail: ()=>{
//         console.log('hi')
//     },
//     endTrail(){
//         return "hi",
//     },
//     getCoupon: (name: 'hi', off: 12)=> {
//         return 12
//     },
//     role: "admin"
// };


//setup -----------------

//classes ---------------------------------------


// class User {
//     email: string
//     name: string
//     city: string = ''
//     constructor(email: string , name: string){
//         this.email= email;
//         this.name=name
//     }
// }

// const hitesh= new User( "@gamadad", "hitesh")
// hitesh.city='jaipur'

//------------------------------------------------------------------------
//private , public

// class User {

//     readonly city: string = 'jaipur'
//     constructor(
//         public email: string ,
//         public name: string,
//         private userId: string 
//         ){
//     }
// }

// const hitesh= new User( "@gamadad", "hitesh",'1')



//-----------------------------------------------------------------------------------
//getter setter

// class User {
//     private _courseCount = 1

//     readonly city: string= "jaipur"

//     constructor(
//         public email: string,
//         public name: string
//     ){

//     }

//     private deleteToken(){
//         console.log("delete token")
//     }

//     get getAppleEmail(): string {
//         return `apple${this.email}`
//     }

//     get getCourseCount (): number {
//         return this._courseCount
//     }

//     set courseCount (courseNum:number) {
//         if(courseNum <= 1){
//             throw new Error("course count should be more than 1")
//         }
//         this._courseCount= courseNum
//     }

// }



// -------------------------------------------------------------------
//interface

// interface TakePhoto{
//     cameraMode: string
//     filter: string
//     burst: number
// }

// class Instagram implements TakePhoto{
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ){}
// }

//  interface Story {
//     createStory(): void
// }

// class Youtube implements TakePhoto , Story{
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number,
//         public short: string,
//     ){}

//     createStory(): void {
//         console.log("story was created!")
//     }
// }


//Abstract classes -----------------------------------------------------------------------

// abstract class TakePhoto {
//     constructor (
//         public cameraMode: string,
//         public filter: string
//     ){}

//     abstract getSepia():void 
// }


// class Instagram extends TakePhoto{
//     constructor(
//         public cameraMode: string,
//         public filter: string,
//         public burst: number
//     ){
//         super(cameraMode , filter)
//     }

//     getSepia(): void {
//         console.log('sepia')
//     }
// }

// const hitesh= new Instagram("adfs",'dafd',1);
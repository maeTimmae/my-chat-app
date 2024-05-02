export type User = {
    firstName : string,
    lastName : string,
    email: string,
    password: string,
    avatar? : File;
    friends? : User[]
}
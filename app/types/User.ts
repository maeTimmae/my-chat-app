export type User = {
    firstName : FormDataEntryValue | null,
    lastName : FormDataEntryValue | null,
    email: FormDataEntryValue | null,
    password: FormDataEntryValue | null,
    avatar? : File;
    friends? : User[]
}
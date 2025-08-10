export type ClassifiedType = {
    id: number,
    heading: string,
    content: string,
    contact: {
        name: string;
        contactnumber?: string;
        emailaddress?: string
    }
}
import {useContext, createContext} from "react";

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

export type ClassifiedContextType = {
    classified: ClassifiedType;
}

export const ClassifiedContext = createContext<ClassifiedContextType | undefined>(undefined);
export function useClassifiedContext() {
    const context = useContext(ClassifiedContext);
    if(!context) {
        throw new Error("useClassifiedContext must be used within a ClassifiedContext");
    }
    return context;
}
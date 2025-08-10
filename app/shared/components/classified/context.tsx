import {useContext, createContext} from "react";
import { type ClassifiedType } from "~/shared/types/ClassifiedType";

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
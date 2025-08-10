import {useContext, createContext} from "react";

interface ClassifiedAlternativeProps {
    children: React.ReactNode;
    classified: Classified;
}

export type Classified = {
    id: number,
    heading: string,
    content: string,
    contact: {
        name: string;
        contactnumber?: string;
        emailaddress?: string
    }
}

type ClassifiedAlternativeContext = {
    classified: Classified;
}

const ClassifiedAlternativeContext = createContext<ClassifiedAlternativeContext | undefined>(undefined);
function useClassifiedContext() {
    const context = useContext(ClassifiedAlternativeContext);
    if(!context) {
        throw new Error("useClassifiedContext must be used within a ClassifiedAlternative");
    }
    return context;
}

export const ClassifiedAlternative: React.FC<ClassifiedAlternativeProps> = ({ classified, children }) => {
    return (
        <ClassifiedAlternativeContext.Provider value={{classified}}>
            <div className="basis-1/4 classified-box">
            {children}
            </div>
        </ClassifiedAlternativeContext.Provider>       
    );
};

export const ClassifiedHeading = () => {
    const { classified} = useClassifiedContext();
    return (
        <ClassifiedAlternativeContext.Provider value={{classified}}>
            <div className="heading-box"><h1>{ classified.heading }</h1></div>
        </ClassifiedAlternativeContext.Provider>       
    );
};

export const ClassifiedContent = () => {
    const { classified} = useClassifiedContext();
    return (
        <ClassifiedAlternativeContext.Provider value={{classified}}>
            <p>{ classified.content }</p>
        </ClassifiedAlternativeContext.Provider>       
    );
};

export const ClassifiedContact = () => {
    const { classified} = useClassifiedContext();
    return (
        <ClassifiedAlternativeContext.Provider value={{classified}}>
            <div className="contact-box">
                <p>Contact: { classified.contact.name } at { classified.contact.contactnumber }</p>
            </div>
        </ClassifiedAlternativeContext.Provider>       
    );
};

export const ClassifiedContactEmailOnly = () => {
    const { classified} = useClassifiedContext();
    return (
        <ClassifiedAlternativeContext.Provider value={{classified}}>
            <div className="contact-box">
                <p>Drop an email { classified.contact.emailaddress}</p>
            </div>
        </ClassifiedAlternativeContext.Provider>       
    );
};

export const ClassifiedContactConditional = () => {
    const { classified} = useClassifiedContext();
    return (
        <ClassifiedAlternativeContext.Provider value={{classified}}>
            <div className="contact-box">
                <p>Get in touch with { classified.contact.name }. 
                { (classified.contact.emailaddress) ? " Email: " + classified.contact.emailaddress + "." : "" }
                { (classified.contact.contactnumber) ? " Contact Number: " + classified.contact.contactnumber + "." : "" }
                </p>
            </div>
        </ClassifiedAlternativeContext.Provider>       
    );
};
import {useContext, createContext} from "react";

interface ClassifiedProps {
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

type ClassifiedContext = {
    classified: Classified;
}

const ClassifiedContext = createContext<ClassifiedContext | undefined>(undefined);
function useClassifiedContext() {
    const context = useContext(ClassifiedContext);
    if(!context) {
        throw new Error("useClassifiedContext must be used within a ClassifiedContext");
    }
    return context;
}

export const Classified: React.FC<ClassifiedProps> = ({ classified, children }) => {
    return (
        <ClassifiedContext.Provider value={{classified}}>
            <div className="basis-1/4 classified-box">
            {children}
            </div>
        </ClassifiedContext.Provider>       
    );
};

export const ClassifiedHeading = () => {
    const { classified} = useClassifiedContext();
    return (
        <ClassifiedContext.Provider value={{classified}}>
            <div className="heading-box"><h1>{ classified.heading }</h1></div>
        </ClassifiedContext.Provider>       
    );
};

export const ClassifiedContent = () => {
    const { classified} = useClassifiedContext();
    return (
        <ClassifiedContext.Provider value={{classified}}>
            <p>{ classified.content }</p>
        </ClassifiedContext.Provider>       
    );
};

export const ClassifiedContact = () => {
    const { classified} = useClassifiedContext();
    return (
        <ClassifiedContext.Provider value={{classified}}>
            <div className="contact-box">
                <p>Contact: { classified.contact.name } at { classified.contact.contactnumber }</p>
            </div>
        </ClassifiedContext.Provider>       
    );
};

export const ClassifiedContactEmailOnly = () => {
    const { classified} = useClassifiedContext();
    return (
        <ClassifiedContext.Provider value={{classified}}>
            <div className="contact-box">
                <p>Drop an email { classified.contact.emailaddress}</p>
            </div>
        </ClassifiedContext.Provider>       
    );
};

export const ClassifiedContactConditional = () => {
    const { classified} = useClassifiedContext();
    return (
        <ClassifiedContext.Provider value={{classified}}>
            <div className="contact-box">
                <p>Get in touch with { classified.contact.name }. 
                { (classified.contact.emailaddress) ? " Email: " + classified.contact.emailaddress + "." : "" }
                { (classified.contact.contactnumber) ? " Contact Number: " + classified.contact.contactnumber + "." : "" }
                </p>
            </div>
        </ClassifiedContext.Provider>       
    );
};
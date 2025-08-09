import {useContext, createContext, type PropsWithChildren} from "react";
import pkg from "react";
const PropsWithChildren = pkg;

export type Classified = {
    id: number,
    heading: string,
    content: string,
    contact: {
        name: string;
        contactnumber?: string;
        emailladdress?: string
    }
}

type ClassifiedProps = PropsWithChildren & {
    classified: Classified;
}


type ClassifiedContext = {
    classified: Classified;
}

const ClassifiedContext = createContext<ClassifiedContext | undefined>(undefined);

function useClassifiedContext() {
    const context = useContext(ClassifiedContext);
    if(!context) {
        throw new Error("useClassifiedContext must be used within a Classified");
    }
    return context;
}

export default function Classified({children, classified}: ClassifiedProps) {
    return(
        <ClassifiedContext.Provider value={{classified}}>
            <div className="basis-1/4 classified-box">
                {children}
            </div>
        </ClassifiedContext.Provider>
    )
}

Classified.ID = function ClassifiedID() {
    const { classified} = useClassifiedContext();

    return <p>{ classified.id }</p>
}

Classified.Heading = function ClassifiedHeading() {
    const { classified} = useClassifiedContext();

    return <div className="heading-box"><h1>{ classified.heading }</h1></div>;
}

Classified.Content = function ClassifiedContent() {
    const { classified} = useClassifiedContext();

    return <p>{ classified.content }</p>
}

Classified.Contact = function ClassifiedContact() {
    const { classified} = useClassifiedContext();

    return (<div className="contact-box"><p>Contact: { classified.contact.name } at { classified.contact.contactnumber }</p></div>);
}

Classified.ContactNumberOnly = function ClassifiedContactNumberOnly() {
    const { classified} = useClassifiedContext();

    return <p>{ classified.contact.contactnumber }</p>
}
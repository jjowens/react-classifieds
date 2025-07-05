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

export default function Classified({children, classified}: React.PropsWithChildren<ClassifiedProps>) {
    return(
        <ClassifiedContext.Provider value={{classified}}>
            <div>
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

    return <h1>{ classified.heading }</h1>
}

Classified.Content = function ClassifiedContent() {
    const { classified} = useClassifiedContext();

    return <p>{ classified.content }</p>
}

Classified.Contact = function ClassifiedContact() {
    const { classified} = useClassifiedContext();

    return <p>Contact: { classified.contact.name } at { classified.contact.contactnumber }</p>
}

Classified.ContactNumberOnly = function ClassifiedContactNumberOnly() {
    const { classified} = useClassifiedContext();

    return <p>{ classified.contact.contactnumber }</p>
}
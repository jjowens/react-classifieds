import { ClassifiedContext, useClassifiedContext } from "./context";

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
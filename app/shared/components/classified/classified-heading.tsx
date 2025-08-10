import { ClassifiedContext, useClassifiedContext } from "./context";

export const ClassifiedHeading = () => {
    const { classified} = useClassifiedContext();
    return (
        <ClassifiedContext.Provider value={{classified}}>
            <div className="heading-box"><h1>{ classified.heading }</h1></div>
        </ClassifiedContext.Provider>       
    );
};

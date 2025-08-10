import { ClassifiedContext, useClassifiedContext } from "./context";

export const ClassifiedContent = () => {
    const { classified} = useClassifiedContext();
    return (
        <ClassifiedContext.Provider value={{classified}}>
            <p>{ classified.content }</p>
        </ClassifiedContext.Provider>       
    );
};
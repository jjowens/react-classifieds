import { ClassifiedContext, useClassifiedContext } from "~/shared/context/ClassifiedContextType";

export const ClassifiedContent = () => {
    const { classified} = useClassifiedContext();
    return (
        <ClassifiedContext.Provider value={{classified}}>
            <p>{ classified.content }</p>
        </ClassifiedContext.Provider>       
    );
};
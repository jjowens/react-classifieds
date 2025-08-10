import { ClassifiedContext } from "./context";
import { type ClassifiedType } from "~/shared/types/ClassifiedType";

interface ClassifiedProps {
    children: React.ReactNode;
    classified: ClassifiedType;
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
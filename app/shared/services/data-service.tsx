import { data } from "~/shared/data/mock-data"

const dataService = () => {
    

    const getAllData = () => {
        return data;
    }

    const filterData = (title?: string, content?: string, contactName?: string) => {
        return data;
    }

    return {
        getAllData,
        filterData
    }

};

export {
    dataService
}

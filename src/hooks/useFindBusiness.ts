import { Business } from "../types";

export const useFindBusiness = (bussnessesData: Business[], id: string) => {
    return bussnessesData.find(el => el.id === id);
}
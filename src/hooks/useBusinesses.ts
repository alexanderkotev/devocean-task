import axios from "axios";
import { useQuery } from "react-query";
import { Business } from "../types";

export const useBusinesses = () => {
    return useQuery("businesses", async () => {
        const { data } = await axios.get(
        "https://api.jsonbin.io/b/6231abada703bb67492d2b8f"
        );
        return data as Business[];
    });
}

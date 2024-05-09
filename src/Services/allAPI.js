import { commonAPI } from "./commonAPI";
import { SERVER_URL} from "./serverUrl";

//register
export const registerAPI = async (reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

//get all details
export const getstudentDetailAPI = async (reqBody)=>{
    return await commonAPI("GET",`${SERVER_URL}/register`,"",reqBody)
}
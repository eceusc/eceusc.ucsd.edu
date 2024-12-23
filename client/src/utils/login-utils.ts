import axios from 'axios';


const SERVER_URL = "http://localhost:8080";

/**
 * This function sends a request to the server with user credentials for authentication
 * @param email - Email ID submitted by the user
 * @param password - Password submitted by the user
 */
export async function loginAuthentication(email: String, password: String): Promise<any>{
    try{
        const data = {email, password};
        const response = await axios.post(`${SERVER_URL}/auth/login`,data);
        return response.data;
    } catch(err: any){
        console.log(`Error in loginAuthentication: ${err}`);
    }
}

/**
 * This function sends a request to the server with user credentials for sign up
 * @param email - Email ID submitted by the user
 * @param password - Password submitted by the user
 * @returns 
 */
export async function signup(email: String, password: String): Promise<{ status: number; message: string }>{
    try{
        const data = {email, password};
        console.log(`Signup function called with ${data}`)
        const response: Response = await fetch(`${SERVER_URL}/auth/signup`,{
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });
        const responseData = await response.json();
        return {
            status: response.status,
            message: responseData.message || ""
        };
    } catch(err: any){
        console.log(`Error in loginAuthentication: ${err}`);
        return {
            status: 500,
            message: "Network error or server unreachable",
        };
    }
}
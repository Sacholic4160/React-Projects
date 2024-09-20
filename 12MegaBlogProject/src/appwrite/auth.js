import conf from "../conf/conf.js";

import { Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(conf.appwirteUrl).setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    async createAccount(email, password, name){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
                //
            }
            else{
                return userAccount
            }

            
        } catch (error) {
            throw error
        }
    }

    async login (email, password) {
        try {

           const loginUser = await this.account.createEmailPasswordSession(email, password);
            if(loginUser){
                return loginUser;
            }
            else{
                return this.createAccount
            }
            
        } catch (error) {
            throw error; 
        }
    }

    async getCurrentUser() {
        try {
            return this.account.get();
        } catch (error) {
            throw error
        }
    }

    async logout() {
        try {
            return this.account.deleteSession('current')
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService();

export default authService;



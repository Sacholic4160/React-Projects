import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite"


export class DBService {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client.setEndpoint(conf.appwirteUrl).setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client, conf.appwriteBucketId);
    }

    async createPost(title, slug, content, featuredImage, status, userId) {

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }

            )

        } catch (error) {
            throw error
        }
    }

    async updatePost(slug, { title, content, featuredImage, status, userId }) {
        try {

            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            throw error
        }


    }

    async deletePost(slug) {
        try {

            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug)

        } catch (error) {
            throw error
        }
    }

}

const dbService = new DBService();
export default dbService
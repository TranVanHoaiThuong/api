import Database from "../db/database.js";
class User {
    constructor() {
        this.db = new Database();
    }
    getUsers = async() => {
        let sql = "SELECT id, firstname, lastname, email, usercode FROM mdl_user WHERE id <> 1";
        await this.db.connect();
        let users = await this.db.doQuery(sql);
        await this.db.pool.close();
        return users;
    }

    getByID = async(id) => {
        let users = await this.getUsers();
        let result = users.find(item => {
            return item.id == id;
        });
        return result;
    }
}
export default User;
import User from "../models/userModel.js";

export const getAllUser = async () => {
    let user = new User();
    let data = await user.getUsers();
    return data;
}

export const getByID = (id) => {
    let user = new User();
    return user.getByID(id);
}
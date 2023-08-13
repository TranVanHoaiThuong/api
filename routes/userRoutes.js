import express from "express";
import * as UserController from "../controllers/userController.js";

const router = express.Router();

router.get('/', (req, res) => {
    UserController.getAllUser().then(data => {
        res.status(200).json({data: data});
    })
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    let user = UserController.getByID(id);
    let response = {};
    if(user === undefined) {
        response.data = null;
        response.message = `Userid ${id} not exists`;
    } else {
        response.data = user;
    }
    res.status(200).json(response);
});

export default router;
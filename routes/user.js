const { Router } = require("express");
const {
    userGet
} = require("../controllers/user")
// const { check } = require("express-validator")

// const { RoleValidate,ValidateEmail,existeIdUser } = require("../helpers/dbvalidate")
// const {ValidateCampos,limitValidate  } = require("../middleware/usuario")
// const {validateJWT } = require("../middleware/validar-jwt")
// const {validateRol } = require("../middleware/validate-rol")




const router = Router();

router.get("/",[], userGet);




module.exports = router;

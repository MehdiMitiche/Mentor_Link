const express = require('express') ; 
const companyRouter = express.Router() ; 

const companyController = require('../controllers/companyController')

companyRouter.post('/', companyController.addCompany)
companyRouter.get('/',companyController.getCompany)
companyRouter.put('/',companyController.updateCompany)
companyRouter.delete('/',companyController.deleteCompany)

module.exports = companyRouter
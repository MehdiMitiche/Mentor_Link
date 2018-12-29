const mongoose = require('mongoose')
const companySchema = require('../models/Company')

const Company = mongoose.model('Companie', companySchema )

//CRUD OPERATIONS
const getCompany = () => {

}

const addCompany = () => {
	
}

const updateCompany = () => {
	
}

const deleteCompany = () => {
	
}

module.exports = {
	getCompany,
	addCompany,
	updateCompany,
	deleteCompany
}
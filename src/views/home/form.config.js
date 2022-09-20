const  validateSchema  =  {
    username: [{required: true, message: 'Username is required'}],
    password: [{required: true, message: 'password is required'}],
    phoneNumber: [{required: true, message: 'phoneNumber is required'}]
}

export default validateSchema
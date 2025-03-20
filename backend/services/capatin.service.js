const captainSchema = require('../models/captain.model')

module.exports.createCaptin = async({
    firstname,
    lastname,
    email,
    password,
    color,
    plate,
    capacity,
    vechileType
})=>{
    if(!firstname || !lastname || !email || !password || !color || !plate || !capacity || !vechileType){
        throw new Error('All fields are required')
    }
    const captain = await captainSchema.create({
        fullname:{
            firstname,
            lastname
        },
        email,
        password,
        vechile:{
            color,
            plate,
            capacity,
            type:vechileType
        }
    })
    return captain
} 
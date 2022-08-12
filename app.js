const request= require('request')
const geoCode = require('./utils/geocode.js')
const foreCast = require('./utils/forecast.js')

geoCode(process.argv[2],(err,data)=>{
    if(err){
        console.log(err)
    }else{
        foreCast(data[0].latitude,data[0].longitude,(err,res)=>{
            if(err){
                console.log(err)
            }else{
                console.log(`Currently temperature is ${res.temperature} out. It feels like ${res.feelslike}`)
            }
        })
    }
})
const express = require('express')
const db = require('./db')
const utils = require('./utils')
const router = express.Router()

router.get('/',(request,response)=>{
    const connection =db.connect()
    const statement = 'select id,title,address from product'
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.post('/',(request,response)=>{
    const {title,address} = request.body
    const connection =db.connect()
    const statement = `insert into product (title,address) values ('${title}','${address}')`
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})
/*
router.put('/',(request,response)=>{
    const connection =db.connect()
    const statement = 'select id,title,address from product'
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})

router.delete('/',(request,response)=>{
    const connection =db.connect()
    const statement = 'select id,title,address from product'
    connection.query(statement,(error,data)=>{
        connection.end()
        response.send(utils.createResult(error,data))
    })
})*/
module.exports = router
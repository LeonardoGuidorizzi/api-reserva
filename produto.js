/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Objetivo:        Arquivo responsável pela manipulação de dados com o Banco de Dados (insert, update, select, delete) 
 * Autor:           Miguel Antonio
 * Data_criação:    01/12/2022                
 * Versão:          1.0
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */

const { selectPizzaByID } = require('./pizza')




const selectAllProduto = async function (){
    const {PrismaClient} = require('@prisma/client')

    const prisma = new PrismaClient()

    const rsProduto = await prisma.$queryRaw `select cast (id as float) as id, tipo from tbl_produto order by id desc`


    if (rsProduto.lenght > 0){
        return rsProduto
    }else{
        return false
    }
}


selectProdutoByID =  async function(id){

    const {PrismaClient} = require('@prisma/client')
    const prisma = new PrismaClient()

    let sql =     `select cast(id as float) = ${id};`


    

    const rsProduto = await prisma.$queryRawUnsafe(sql)

    if (rsProduto.lenght > 0){
        return rsProduto
    }else{
        return false
    }




}


updateProdutoByID =  async function(id){

    const {PrismaClient} = require('@prisma/client')
    const prisma = new PrismaClient()

    let sql = `
    
    
    
    
    
    
    
    
    `

    const rsProduto = await prisma.$queryRawUnsafe(sql)

    if (rsProduto.lenght > 0){
        return rsProduto
    }else{
        return false
    }




}



const insertProduto = async function (){
    const {PrismaClient} = require('@prisma/client')
    const prisma = new PrismaClient()

    try {
        
    

    let sql = `
    
    
    
    
    
    
    
    
    
    `


    const result = await prisma.$queryRawUnsafe(sql)

    if (result){
        return true
    }else{
        return false
    }

} catch (error) {
    return false
}
}




const deleteProduto = async function (){
    const {PrismaClient} = require('@prisma/client')
    const prisma = new PrismaClient()

    let sql = `
    
        DELETE FROM tbl_produto WHERE id = ${id}
    
    `


    const rsProduto = await prisma.$queryRawUnsafe(sql)

    if (rsProduto.lenght > 0){
        return rsProduto
    }else{
        return false
    }
}
const selectAllBebidas = async function (){
    const{ PrismaClient } = require ('@prisma/client')
    const prisma = new PrismaClient()

    let sql = `
    
    
    
    
    
    
    
    `


    const rsBebidas = await prisma.$queryRawUnsafe(sql)

    if (rs.Bebida.lenght > 0) {
        return rsBebidas
    }else{
        return false
    }
}


const insertBebidas = async function (){

 const {PrismaClient} = require ('@prisma/client')

    const prisma = new PrismaClient()
 

}
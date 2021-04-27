const fs = require('fs')
const colors = require('colors')

const crearArchivo = async ( base = 5, listar, hasta ) => {
    const nombreArchivo = `./salida/tabla-${base}.txt`
    let salida = ''
    let consola = ''
    
    try {
        
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} x ${index} = ${ base * index }\n`
            consola += `${base} ${'x'.green} ${index} ${'='.green} ${ base * index }\n`
        }
        
        if(listar){
            console.log('======================'.green)
            console.log('    Tabla del: '.green, colors.yellow(base))
            console.log('======================'.green)
            console.log(consola)
        }
        
        fs.writeFileSync(nombreArchivo,salida)
        return nombreArchivo
    } catch (error) {
        throw error
    }
    
}

module.exports = {
    crearArchivo
}
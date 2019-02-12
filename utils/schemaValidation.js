const Ajv = require('ajv');

/**
 * Name:schemaValidation
 * Desc: this function help to validate your data acording to your validation schema          design
 * @param:schema
 * @param:data
 */
 async function schemaValidation(schema,data){
    return new Promise((resolve,reject)=>{
        try{
            // create object of ajv.
            const ajv = new Ajv({ removeAdditional: true });
            const valid = ajv.validate(schema, data);
            if (!valid){
                resolve(ajv.errors);
            }
            resolve(null);
        }catch(error){
            reject(error);
        }
    })
     
}

module.exports = {
    schemaValidation
}
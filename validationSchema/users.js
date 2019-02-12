const createUserSchema = {
    "type": "object",
    "properties": {
      "name": { 
          "type":"string",
          "minLength":3,
      },
      "email": { 
          "type":"string",
          "format":"email"
       },
       "mobile":{
           "type":"string",
           "minLength":10,
           "maxLength":10,
       },
       "placementId":{
            "type":"string",
            "minLength":3,
       },
        "sponserId":{
            "type":"string",
            "minLength":3,
       },
       "placement":{
           "type":"string",
           "enum":["left","right"]
       },
       "userId":{
            "type":"string",
            "minLength":3,
       },
       "password":{
            "type":"string",
            "minLength":3,
       }
    },
    "additionalProperties": false,
    "required":["name","email"]
};
module.exports = {
    createUserSchema
}
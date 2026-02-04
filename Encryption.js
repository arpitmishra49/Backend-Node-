
const crypto= require('crypto');
function hashPassword(password,salt){
    return new Promise((resolve,reject)=>{
        crypto.pbkdf2(password,salt,10000,64,'sha512',(err,derivedKey)=>{
            if(err) reject(err);
            else resolve(derivedKey.toString('hex'));
        });
    });
}
const userSalt =crypto.randomBytes(16).toString('hex');
console.log('User Salt:', userSalt);
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const schema = mongoose.Schema

const userSchema = new schema({
   email:{
    type:String,
    required:true,
    unique:true
   },
   password:{
    type:String,
    required:true,
    unique:true
   }
})

userSchema.pre(
    'save',
    async function (next){
        const user = this
        const hash = await bcrypt.hash(user.password, 10)
        user.password = hash
        next()
    }

)

userSchema.methods.isValidPassword = async function (password){
    const user = this
    const compare = await bcrypt.compare(password, user.password)
    return compare
}

module.exports = mongoose.model('users', userSchema)
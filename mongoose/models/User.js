const mongoose  =require(`mongoose`);
const bcrypt  =require(`bcrypt`);

const userschema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 30,
    },
    password:{
        type:String,
        required:true,
        minlength: 6,
    },
});

userSchema.pre(`save`,async function (next) {
    if(!this.isModified('password')) return next();

    const salt= await bcrypt.getSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

userSchema.methods.matchPassword=async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
};

const User= mongoose.model(`User`,userSchema);
module.exports= User;
import bcrypt from 'bcrypt';

async function hashPassword(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
}

export default hashPassword;
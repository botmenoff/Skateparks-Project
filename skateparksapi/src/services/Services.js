const bcrypt = require('bcrypt');

async function hashPassword(password) {
    try {
        const saltRounds = 10; // Number of salt rounds to use for hashing
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error('Error hashing password');
    }
}

module.exports = {
    hashPassword,
}
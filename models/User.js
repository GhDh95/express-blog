const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();

const User = {
    getUsers: async () => {
        const users = await prisma.users.findMany();
        return users;
    },
    addUser: async (data) => {
        const user = await prisma.users.create({
            data
        });
        return user;
    }
}

module.exports = User;
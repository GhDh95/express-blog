const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient();


const Post = {
    getPosts: async () => {
        const posts = await prisma.posts.findMany();
        return posts;
    },
    getPost: async (id) => {
        const post = await prisma.posts.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        return post;
    },
    createPost: async (data) => {
        const post = await prisma.posts.create({
            data: {
                title: data.title,
                body: data.article,

            }
        });
        return post;
    },
    getPost: async (id) => {
        const post = prisma.posts.findUnique({
            where: {
                id: parseInt(id)
            }
        });
        return post;
    }
}

module.exports = Post;
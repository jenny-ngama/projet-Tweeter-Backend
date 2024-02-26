const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

function GETINTOBDDTWEETS() { return prisma.post.findMany() };
function GETINTOBDDTWEET(id) { return prisma.post.findUnique({ where: { id } }) };
function POSTINTOBDDTWEET(data) { return prisma.post.create({ data: data }) };
function UPDATEINTOBDDTWEET(post) { return prisma.post.update({ where: { id: post.id }, data: post }) };
function DELETEINTOBDDTWEETS(id) { return prisma.post.delete({ where: { id } }) };


module.exports = {
    GETINTOBDDTWEETS,
    GETINTOBDDTWEET,
    POSTINTOBDDTWEET,
    UPDATEINTOBDDTWEET,
    DELETEINTOBDDTWEETS,

}
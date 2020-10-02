module.exports = {
  Query: {
    me: (parent, args, { me }) => me,
    user: (parent, args, { models }) => models.users.filter(user => user.id == args.id)[0],
    users: (_, __, { models }) => models.users,
  },
  User: {
    username: (parent, args, context, info) => `Sr(a). ${parent.username}`,
    messages: (parent, _, { models }) => models.messages.filter(message => message.userId == parent.id)  

  },
}
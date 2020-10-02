module.exports = {
  Query: {
    message: (_, args, { models }) => models.messages.filter(message => message.id == args.id)[0],
    messages: (_, __, { models }) => models.messages
  },

  Mutation: {
    createMessage: (parent, { text, userId }, { models }) => {
      const message = {
        id: (models.messages.length + 1).toString(),
        text,
        userId
      }
      
      models.messages.push(message)

      return {
        id: message.id,
        text: message.text,
        userId
      }
    },
    deleteMessage: (parent, { id }, { models }) => {
      const deletedMessage = models.messages.filter(deletedMessage => deletedMessage.id == id)[0]
      const remainingMessages = models.messages.filter(message => {
        return message.id !== id
      })

      models.messages = remainingMessages

      return deletedMessage
    },

    updateMessage: (_, {id, text}, { models }) => {
      const updatedMessage = {
        id, 
        text
      }

      const newMessages = models.messages.map(message => {
        if (message.id == id) {
          return {
            ...message,
            id,
            text
          }
        }
        return message
      })

      models.messages = newMessages
      return updatedMessage
    }
  },
  Message: {
    user: (parent, _, { models }) => models.users.filter(user => {
        return parent.userId == user.id
      })[0]  
  }
}
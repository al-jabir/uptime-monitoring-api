const handler = {}

handler.mafiaHandler = (reqeustProperties,callback) => {
    console.log(reqeustProperties)
  callback( 200, {
    message:'This is a mafia url'
  })
}

module.exports = handler;
const handler = {}

handler.notFoundHandler = (reqeustProperties,callback) =>{
    console.log(reqeustProperties)
    callback(400,{
        message : 'Your requested URL was not found'
    })
}

module.exports = handler;
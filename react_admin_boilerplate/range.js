module.exports=(req,res,next)=>{
  res.header('Content-Range','posts 0-20/20')
  next()
}
//this act as middleware to add the Content-Header that is required in react to display data. as in react we don have the privilage like the express routes and adding headers we add a middleware.

import App from './app'
const app = new App()
const port = +(process.env.PORT || 3000)

const server = app.listen(port, () => {
  console.log(`Starting ExpressJS server on Port ${port}`)
})

server.on('connection', function (socket: any) {
  socket.setTimeout(5 * 1000)
})

// process.on('SIGINT', () => {
//   console.info('SIGINT signal received.')
//   // console.log(server.close)
//   // process.exit()
//   server.close(() => {
//     console.log('close')
//     process.exit(0)
//   })

//   // server.close(async (error: any) => {
//   //   try {
//   //     if (error) {
//   //       throw error
//   //     } else {
//   //       await app.stopServices()
//   //       process.exit(0)
//   //     }
//   //   } catch (error) {
//   //     console.error(error)
//   //     process.exit(1)
//   //   }
//   // })
// })

export default server

import App from './app'
const app = new App()
const port = +(process.env.PORT || 3000)

const server = app.listen(port, () => {
  console.log(`Starting ExpressJS server on Port ${port}`)
})

process.on('SIGINT', async () => {
  console.info('SIGINT signal received')
  try {
    await app.stopServices()
    console.log('> services stopped')
    server.close()
    process.exit(0)
  } catch (error) {
    console.error(error)
    server.close()
    process.exit(1)
  }
})

export default server

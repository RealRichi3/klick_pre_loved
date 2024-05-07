import Redis from 'ioredis'

const REDIS_URL = process.env.REDIS_URL as string;
const redisClient = new Redis(REDIS_URL)
console.log(REDIS_URL)

redisClient.on('error', (error) => {
    console.log('An error occured while connecting to REDIS')
    console.error(error)
    console.error(error)
    console.log("Error is coming from redis")
    process.exit(1)
})

redisClient.on('connect', () => console.log('Connected to REDIS'))

export default redisClient
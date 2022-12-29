const NODE_ENV = process.env.NODE_ENV

export const debug = (data: any, self: { file: string, fn: string } = { file: 'logger.ts', fn: 'debug' }) => {
    console.log(NODE_ENV)
    if (NODE_ENV === "development") {
        console.log(`🚀 ~ file: ${self.file} ~ ${self.fn} ~ data : `, data)
    }
}
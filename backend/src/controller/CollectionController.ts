import { Request, Response } from "express"
import { getCollections } from "../services/CollectionsServices"

const NAMESPACE = 'CONTROLLER'

export default {
    async getCollections(req: Request, res: Response) {
        try {
            const result = await getCollections()
            return res.status(200).json({ msg: 'yes', data: result })
        } catch (error: any) {
            console.log("%c 🎎: getCollections -> error ", "font-size:16px;background-color:#fca06b;color:white;", error)
            return res.status(503).json({ msg: error.message })
        }
    }
}
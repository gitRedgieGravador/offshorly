
import db from '../models'
export const getCollections = async () => {
    try {
        const collections = await db.Collection.findAll()
        return collections
    } catch (error) {
        return error
    }
}
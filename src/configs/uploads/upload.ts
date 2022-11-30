import multer from "multer";
import { resolve } from "path";
import crypto from "crypto"

const tmpFolder = resolve(__dirname, '..', '..', '..', 'tmp')

export default {
    tmpFolder,
    storage: multer.diskStorage({
        destination: tmpFolder,
        filename: (_, file, cb ) => {
            const extension = file.originalname.split('.')[1]
            const newFileName = crypto.randomBytes(64).toString('hex');

            cb(null, `${newFileName}.${extension}`)
        } 
    })
}
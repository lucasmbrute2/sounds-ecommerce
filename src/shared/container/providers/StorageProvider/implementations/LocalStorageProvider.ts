//TODO Create a Storage abstraction
import { IStorageProvider } from "../IStorageProvider";
import fs from "fs"
import { resolve } from "path";
import upload from "../../../../../configs/uploads/upload";

export class LocalStorageProvider implements IStorageProvider {
    async save(file: string, folder: string): Promise<String> {
        await fs.promises.rename(
            resolve(upload.tmpFolder, file),
            resolve(`${upload.tmpFolder}/${folder}`, file)
        )
    
        return file
    }
    
    async delete(file: string, folder: string): Promise<void> {
        const filename = resolve(`${upload.tmpFolder}/${folder}`, file)

        try {
            await fs.promises.truncate(filename)
        } catch (error) {
            return;
        }

        await fs.promises.unlink(filename)
    }
}
import { accessSync, constants, readdirSync, readFileSync, statSync } from "fs";
import { extname, join } from "path";
import { FileDetail, FileMetaData } from "./file.interface";

const isDirectory = (path: string) => statSync(path).isDirectory();

const hasAccess = (path: string, type: number): boolean => {
    try {
        accessSync(path, type);
        return true
    } catch (err) {
        return false;
    }
}

export const getFiles = (path: string) => {
    const files: FileMetaData[] = readdirSync(path).map(name => {
        return {
            name: name, isDirectory: isDirectory(join(path, name))
        }
    });
    console.log('files', files);
    return files;
}

export const getFileDetails = (path: string): FileDetail => {

    return {
        size: statSync(path).size,
        createdDate: new Date(statSync(path).birthtime),
        type: extname(path),
        canRead: hasAccess(path, constants.R_OK),
        canWrite: hasAccess(path, constants.W_OK),
        canExecute: hasAccess(path, constants.X_OK)
    };
}

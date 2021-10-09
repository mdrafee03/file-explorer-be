import { readdirSync, statSync } from "fs";
import { extname, join } from "path";

const isDirectory = (path: any) => statSync(path).isDirectory();
const getDirectories = (path: string) =>
    readdirSync(path).map(name => join(path, name)).filter(isDirectory);

const isFile = (path: any) => statSync(path).isFile();
const getFiles = (path: any) =>
    readdirSync(path).map(name => join(path, name)).filter(isFile);

const getFilesRecursively = (path: string, ext?: string) => {
    let dirs = getDirectories(path);
    let files: any = dirs
        .map(dir => getFilesRecursively(dir, ext))
        .reduce((a, b) => a.concat(b), []);
    return files.concat(getFiles(path)).filter((file: string) => ext ? extname(file) === ext: file);
};

export default getFilesRecursively;
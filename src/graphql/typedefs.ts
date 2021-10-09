import { readFileSync } from "fs";
import { join } from "path";
import getFilesRecursively from "../utils/getFileRecursively";
const gqlFiles = getFilesRecursively(join(__dirname, './typedefs'));
let typeDefs = '';

gqlFiles.forEach((file: string) => {
  typeDefs += readFileSync(file, {
    encoding: 'utf8',
  });
});

export default typeDefs;
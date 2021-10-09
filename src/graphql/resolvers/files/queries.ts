import { getFileDetails, getFiles } from "../../services/fileService/fileservice.service";

const files = [
    {
        name: 'file 1',
        size: 100
    }
]
const fileQueries = {
    files: async (_: any, args: {path: string}) => {
        return getFiles(args.path);
    },
    file: async(_: any, args: {path: string}) => {
        return getFileDetails(args.path);
    }
};

export default fileQueries
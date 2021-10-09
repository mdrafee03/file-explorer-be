export interface FileDetail {
    size?: number;
    type?: string;
    createdDate?: Date;
    canRead?: boolean;
    canWrite?: boolean;
    canExecute?: boolean;
}

export interface FileMetaData {
    name: string;
    isDirectory: boolean;
}

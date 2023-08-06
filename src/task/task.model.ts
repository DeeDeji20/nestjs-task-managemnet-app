export interface Task{
    id:String;
    title: String;
    description: String;
    satus: TaskStatus;
}


export enum TaskStatus{
    OPEN ='OPEN',
    IN_PROGRESS ='IN_PROGRESS',
    DONE ='DONE',
}
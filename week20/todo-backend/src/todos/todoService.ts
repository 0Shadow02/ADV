import {Todo} from "./todo"
export type TodoCreation = Pick<Todo, "title" | "description" >

export class TodoService {
      public get(todoId:string):Todo{
        return {
            id: todoId,
            title: "moked todo",
            description: "moked todo",
            done: false
        }
      }

      public create(todoId:string):Todo{
        console.log("moke db call")
        return {
            id: todoId,
            title: "moked todo",
            description: "moked todo",
            done: false
        }
      }
}


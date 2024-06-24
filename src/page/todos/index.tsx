import {useEffect} from "react";

import {getTodosService} from "@/service/todos";
import {setDefault, checkedChange, TodoItem} from "@/store/todo";
import {RootState, useDispatch, useSelector} from "@/store";
import {Checkbox} from "@/component/ui/checkbox"
import classNames from "classnames";
import { DateTime } from 'luxon';


export default function TodosPage() {
    const dispatch = useDispatch()
    const todos = useSelector((state: RootState) => state.todo.todos)

    useEffect(() => {
        getTodosService()
            .then(response => {
                dispatch(setDefault({
                    todos: response.data
                }))
            })
            .catch(error => {
                console.error(error)
            })
    }, []);

    const onCheckedChange = (index: number, todo: TodoItem): void => {
        dispatch(checkedChange({index, checked: !todo.completed}))
    }

    return (
        <div className="max-w-4xl mx-auto py-10">
            <div className="flex flex-col gap-2 capitalize">
                {todos.map((todo: TodoItem, index: number) => (
                    <div key={index}
                         className={classNames("border bg-slate-50 border-slate-200 rounded-md px-3 py-2 flex items-start justify-between gap-2", {
                             "opacity-30 line-through": todo.completed
                         })}
                         onClick={() => onCheckedChange(index, todo)}>
                        <div className="flex items-center gap-2">
                            <Checkbox checked={todo.completed}
                                      onCheckedChange={() => onCheckedChange(index, todo)}/>
                            <span>{todo.title}</span>
                        </div>
                        <div className="text-blue-700 whitespace-nowrap">
                            {DateTime.fromISO(todo.date).toRelative()}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

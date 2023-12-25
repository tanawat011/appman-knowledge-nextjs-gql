"use client";

import { useQuery, gql, useMutation } from "@apollo/client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function TodoPage() {
  const [v, setV] = useState("");

  const { data, refetch } = useQuery(gql`
    query GetTodos {
      todos
    }
  `);

  useEffect(() => {
    refetch();
  }, [])

  const [addTodo] = useMutation(gql`
    mutation AddTodo($todo: String!) {
      addTodo(todo: $todo)
    }
  `);

  const onAddTodo = async () => {
    setV("");
    await addTodo({ variables: { todo: v } });
    await refetch();
  };

  const [deleteTodo] = useMutation(gql`
    mutation DeleteTodo($idx: Int!) {
      deleteTodo(idx: $idx)
    }
  `);

  const onDeleteTodo = async (idx: number) => {
    await deleteTodo({ variables: { idx } });
    await refetch();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <h1>TodoPage</h1>

      <input
        className="text-black"
        value={v}
        onChange={(e) => setV(e?.target?.value)}
      />
      <button className="bg-gray-600 rounded px-1" onClick={onAddTodo}>
        add
      </button>

      <div>List</div>
      <ul className="list-disc">
        {data?.todos.map((todo: string, idx: number) => (
          <li key={todo} className="mb-1">
            <div className="flex gap-4">
              <p><Link href={`/todo/${idx}`} className="cursor-pointer">{todo}</Link></p>
              <button
                className="bg-gray-600 rounded px-1"
                onClick={() => onDeleteTodo(idx)}
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

"use client";

import { useQuery, gql, useMutation } from "@apollo/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function TodoPage() {
  const { id } = useParams();
  const [v, setV] = useState("");

  const { data } = useQuery(gql`
    query GetTodo {
      todo(idx: ${id})
    }
  `);

  useEffect(() => {
    setV(data?.todo);
  }, [data?.todo]);

  const [updateTodo] = useMutation(gql`
    mutation UpdateTodo($idx: Int!, $todo: String!) {
      updateTodo(idx: $idx, todo: $todo)
    }
  `);

  const onUpdateTodo = async () => {
    await updateTodo({ variables: { idx: Number(id), todo: v } });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <input
        className="text-black"
        value={v}
        onChange={(e) => setV(e?.target?.value)}
      />
      <button className="bg-gray-600 rounded px-1" onClick={onUpdateTodo}>
        update
      </button>
    </div>
  );
}

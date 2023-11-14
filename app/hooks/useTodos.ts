import useSWR from "swr";

async function fetcher(key: string) {
  return fetch(key).then((res) => res.json());
}

export const useTodos = () => {
  const API_URL = "http:localhost:8080";

  const { data, isLoading, error, mutate } = useSWR(
    `${API_URL}/allTodos`,
    fetcher
  );

  return {
    todos: data,
    isLoading,
    error,
    mutate,
  };
};

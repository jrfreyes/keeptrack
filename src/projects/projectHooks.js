import { useState, useEffect } from "react";
import { projectAPI } from "./projectAPI";
import { Project } from "./Project";
import { useMutation, useQuery, useQueryClient } from "react-query";

export function useProjects() {
  const [page, setPage] = useState(0);
  let queryInfo = useQuery(
    ["projects", page],
    () => projectAPI.get(page + 1),
    {
      keepPreviousData: true,
    }
  )
  console.log(queryInfo);
  return { ...queryInfo, page, setPage }
}

export function useSaveProject() {
  const queryClient = useQueryClient();
  return useMutation((project) => projectAPI.put(project), {
    onSuccess: () => queryClient.invalidateQueries('projects'),
  });
}
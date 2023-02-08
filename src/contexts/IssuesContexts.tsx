import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Issues {
  number: number;
  title: string;
  created_at: Date;
  body: string;
}

interface IssuesContextsType {
  issues: Issues[];
  totalPosts: number;
  fecthIssues: (content?: string) => Promise<void>;
}
interface IssuesProviderProps {
  children: ReactNode;
}
export const IssueContexts = createContext({} as IssuesContextsType);

export function IssueProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issues[]>([]);
  const [totalPosts, setTotalPosts] = useState(0);

  async function fecthIssues(content?: string) {
    if (content === undefined) {
      content = "";
    }
    const response = await api.get("/search/issues?", {
      params: {
        q: `repo:wagnermateus/github-blog ${content}`,
      },
    });

    const dataItems = response.data.items;
    const dataTotalCount = response.data.total_count;

    setIssues(dataItems);
    setTotalPosts(dataTotalCount);
  }
  useEffect(() => {
    fecthIssues();
  }, []);
  return (
    <IssueContexts.Provider value={{ issues, fecthIssues, totalPosts }}>
      {children}
    </IssueContexts.Provider>
  );
}

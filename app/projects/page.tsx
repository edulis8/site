import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "Under Construction 🚧",
};

export default async function AboutPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
    <div className='flex flex-col items-start gap-4'>
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Projects</h1>
          <p className="text-xl text-muted-foreground">
          A few code examples. Under construction. More to come.
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="flex flex-col">
        <div className="min-w-48 max-w-48 flex flex-col gap-2">
          <div className="flex space-x-4"><p className="whitespace-nowrap">Minesweeper:</p>
              <a href="https://minesweeper-react-dfs.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Demo</a>
              <p>|</p>
              <a href="https://github.com/edulis8/minesweeper-react-dfs" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Code</a>
          </div>
          <div className="flex space-x-4"><p className="whitespace-nowrap">DAG Workflow Runner:</p>
              <a href="https://dag-workflow-runner.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Demo</a>
              <p>|</p>
              <a href="https://github.com/edulis8/DAG-workflow-runner" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Code</a>
          </div>
          <div className="flex space-x-4"><p className="whitespace-nowrap">This Website:</p>
              <a href="https://github.com/edulis8/site" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Code</a>
          </div>
        </div>
      </div>
    </div>
  );
}

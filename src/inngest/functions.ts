import { gemini, createAgent } from "@inngest/agent-kit";

import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event }) => {
     const codeAgent= createAgent({
      name: "code-agent",
      system: "You are an expert Next.js Developer.  You write readable,  maintainable code. You write simple ext.js & react snippets.",
      model: gemini({ model: "gemini-1.5-flash"}),
    });

    const { output } = await codeAgent.run(
      `Write the Following snippets: ${event.data.value}`,
  );
     return { output };
    

    

    
  },
);

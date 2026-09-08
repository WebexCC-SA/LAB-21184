<!-- --8<-- "test123.md" -->

Now that you have a Plan it is time to break your plan into actionable tasks for the AI to use for implementation 

## Break out the plan into tasks
> In the Agent Prompt enter the command: <copy>/speckit-tasks</copy>
>
> ---

### Review the new tasks.md file 
> Note that the tasks are broken into phases  
> You will see infrastructure and prerequisites which are listed as blockers before user stories can be implemented  
> You should also see a variation of **Purpose**, **Goal**, **Testing** and **Checkpoints** listed in each phase.  
> **Purpose** is used for non-functional requirements (infrastructure ) and **Goals** is used for functional requirements (User Stories)  
>
> ---

#### Commit the changes to your repository
This will allow you to easily identify the changes which are made as you progress through the project as well as let you revert to a previous point in the code history.  
> Click the Source Control button in the left menu ![alt text](assets/sourceControl.png)  
> Click the `+` next to Changes to add all changes to the commit  
> Add a commit message: <copy>Tasks Created</copy>   
> Click the Commit button  
> Return to the Explorer  
> ??? gif w50 "Show Me"
     ![alt text](assets/Commit.gif)
> ---


## Analyze the tasks created against the Constitution, Spec, and Plan  
> To ensure that all of the tasks are in teh correct order and do not cause conflicts, you will use the analyze skill/agent  
> In the Agent Prompt enter the command: <copy>/speckit-analyze</copy>  
> If there are any issues, the AI will list them out along with how critical the issues are.  
> If you have any critical issues, you will need to address them prior to implementation.  
> The AI will offer to suggest fixes and/or provide some tasks which may need to be addressed manually.  
>
> ---

### After you resolve issues identified by analyze
> Review what changes were made to the tasks and/or any other files.  
> 
> ---


#### Commit the changes to your repository
This will allow you to easily identify the changes which are made as you progress through the project as well as let you revert to a previous point in the code history.  
> Click the Source Control button in the left menu ![alt text](assets/sourceControl.png)  
> Click the `+` next to Changes to add all changes to the commit  
> Add a commit message: <copy>Analyze Complete</copy>   
> Click the Commit button  
> Return to the Explorer  
> ??? gif w50 "Show Me"
     ![alt text](assets/Commit.gif)
> ---




In this step you will be defining **WHAT** the tool does, but not how the feature will be implemented.  

## Understanding the specification.

BYOC middleware that connects Webex Messaging (bot account) to Webex Contact Center.

### Authoritative Documents

- Use `webhooks.md` as the authoritative source for Webex Messaging webhooks.
- Use the official Webex OpenAPI specification as the authoritative source for Webex
  Messaging API endpoints.
- Use `webhooks-cc.md` as the authoritative source for WxCC webhook events and payloads.
- Use `bring-your-own-custom-messaging-channel.md` as the authoritative source for WxCC
  BYOC behavior.
- Use the official WxCC OpenAPI specification as the authoritative source for WxCC task
  API contracts.
- Use the hook-to-socket specification as the authoritative source for the WebSocket
  connection and message-envelope structure. Review and follow it when extracting and
  validating Webex Messaging and WxCC webhook payloads.
- Review and follow each authoritative source before designing or implementing the
  middleware.

### Lab Integration Constraints

- In this lab, all Webex Messaging and WxCC webhook payloads pass through the hosted
  hook-to-socket middleware.
- The webhook payload is delivered inside the WebSocket message envelope.

### Conversation and Task Behavior

- Support text-only messaging for this lab.
- When a WxCC task is closed, notify the Webex user that the chat has ended.
- When an active WxCC task exists for the Webex conversation, append valid inbound
  messages to that task.
- When no active WxCC task exists for the Webex conversation, create a new task.
- Each Webex conversation must remain associated with its active WxCC task so subsequent
  inbound messages append to that task and outbound task events return to the same
  conversation.
- For task creation, map `Origin.id` to the Webex user `personEmail` and `Origin.name` to
  the Webex user `displayName`.

### Message Direction and Routing

- Evaluate WxCC task lifecycle event direction using `data.direction`.
- Evaluate WxCC task-message event direction using `data.messageDirection`.
- If Webex and WxCC events share a webhook path, explicitly classify the event source and
  direction before processing.
- Only inbound traffic may create or append tasks or trigger Webex message ingestion.
- Route outbound WxCC messages to the Webex conversation using the Messages API and do not
  echo them back to the WxCC task.
- Webex messages originating from `WXCC_BUSINESS_ADDRESS` MUST be ignored and MUST NOT
  create or append a WxCC task.

### Validation and Idempotency

- Reject empty, non-text, malformed, or unsupported payloads before creating or appending
  a WxCC task, and record the rejection for troubleshooting.
- Handle duplicate or replayed Webex and WxCC webhook events idempotently.
- A repeated inbound Webex event MUST NOT create a duplicate WxCC task or append the same
  message more than once.
- A repeated inbound WxCC task-message event MUST NOT send a duplicate Webex message.
- Idempotency MUST use stable identifiers from the authoritative webhook payloads and MUST
  remain effective for the lifetime of the running process.

### API Contracts and Deviations

- Define and validate all external API request and response contracts against their
  authoritative specifications before implementation.
- Treat published contracts as authoritative and do not invent local request/response
  payloads, simplified DTOs, or undocumented transformations.
- The WxCC task-creation API is expected to return `202 Accepted` in the lab environment
  instead of the documented `201 Created` response. Treat this as an approved
  implementation deviation only when recorded in `deviations.md`, and continue validating
  the response body against the authoritative schema.

### Authentication and Configuration

- The Webex bot account must authenticate using a static bot token.
- The WxCC service account must authenticate using the refresh-token workflow.
- Load configuration from `.env` and validate required values before processing messages.
- Provide a service-organized `.env.example` with required variable templates and root URLs
  restricted to scheme plus top-level domain.
- Credentials, tokens, secrets, and sensitive personal data must be redacted from logs,
  tests, documentation examples, build artifacts, and other project artifacts.

### Observability

- Every API call, task transition, routing decision, validation rejection, and failure must
  produce a structured JSON log entry containing a timestamp, operation name, outcome,
  relevant identifiers, and error context. Silent failures are not acceptable.

---



<!-- [Download this file](assets/BYOC.pdf){:download="BYOC.pdf"} -->

<!-- [Download this spec for the Webhook to WebSocket middleware utilization](assets/hook-to-socket-spec.txt){: download="hook-to-socket-spec.md"} -->


## Let's Specify the Feature

### Add the helper files to your project

> [Download these documentation files](assets/labFiles.zip){:download="docs.zip"}  
> Create a new folder named `docs` in your project folder  
> Unzip the downloaded file and place copy the files into your new docs folder  


### 
 
??? code
    ```
    /speckit-specify

    BYOC middleware that connects Webex Messaging (bot account) to Webex Contact Center.

    - Use `webhooks.md` as the authoritative source for Webex Messaging webhooks.
    - Use the official Webex OpenAPI specification as the authoritative source for Webex
    Messaging API endpoints.
    - Use `webhooks-cc.md` as the authoritative source for WxCC webhook events and payloads.
    - Use `bring-your-own-custom-messaging-channel.md` as the authoritative source for WxCC
    BYOC behavior.
    - Use the official WxCC OpenAPI specification as the authoritative source for WxCC task
    API contracts.
    - Use the hook-to-socket specification as the authoritative source for the WebSocket
    connection and message-envelope structure. Review and follow it when extracting and
    validating Webex Messaging and WxCC webhook payloads.
    - Review and follow each authoritative source before designing or implementing the
    middleware.

    - In this lab, all Webex Messaging and WxCC webhook payloads pass through the hosted
    hook-to-socket middleware.
    - The webhook payload is delivered inside the WebSocket message envelope.

    - Support text-only messaging for this lab.
    - When a WxCC task is closed, notify the Webex user that the chat has ended.
    - When an active WxCC task exists for the Webex conversation, append valid inbound
    messages to that task.
    - When no active WxCC task exists for the Webex conversation, create a new task.
    - Each Webex conversation must remain associated with its active WxCC task so subsequent
    inbound messages append to that task and outbound task events return to the same
    conversation.
    - For task creation, map `Origin.id` to the Webex user `personEmail` and `Origin.name` to
    the Webex user `displayName`.

    - Evaluate WxCC task lifecycle event direction using `data.direction`.
    - Evaluate WxCC task-message event direction using `data.messageDirection`.
    - If Webex and WxCC events share a webhook path, explicitly classify the event source and
    direction before processing.
    - Only inbound traffic may create or append tasks or trigger Webex message ingestion.
    - Route outbound WxCC messages to the Webex conversation using the Messages API and do not
    echo them back to the WxCC task.
    - Webex messages originating from `WXCC_BUSINESS_ADDRESS` MUST be ignored and MUST NOT
    create or append a WxCC task.

    - Reject empty, non-text, malformed, or unsupported payloads before creating or appending
    a WxCC task, and record the rejection for troubleshooting.
    - Handle duplicate or replayed Webex and WxCC webhook events idempotently.
    - A repeated inbound Webex event MUST NOT create a duplicate WxCC task or append the same
    message more than once.
    - A repeated inbound WxCC task-message event MUST NOT send a duplicate Webex message.
    - Idempotency MUST use stable identifiers from the authoritative webhook payloads and MUST
    remain effective for the lifetime of the running process.

    - Define and validate all external API request and response contracts against their
    authoritative specifications before implementation.
    - Treat published contracts as authoritative and do not invent local request/response
    payloads, simplified DTOs, or undocumented transformations.
    - The WxCC task-creation API is expected to return `202 Accepted` in the lab environment
    instead of the documented `201 Created` response. Treat this as an approved
    implementation deviation only when recorded in `deviations.md`, and continue validating
    the response body against the authoritative schema.

    - The Webex bot account must authenticate using a static bot token.
    - The WxCC service account must authenticate using the refresh-token workflow.
    - Load configuration from `.env` and validate required values before processing messages.
    - Provide a service-organized `.env.example` with required variable templates and root URLs
    restricted to scheme plus top-level domain.
    - Credentials, tokens, secrets, and sensitive personal data must be redacted from logs,
    tests, documentation examples, build artifacts, and other project artifacts.

    - Every API call, task transition, routing decision, validation rejection, and failure must
    produce a structured JSON log entry containing a timestamp, operation name, outcome,
    relevant identifiers, and error context. Silent failures are not acceptable.
    ```



#### Review the Spec and Checklist (the path needs updated AND instructions need to be expanded)
> Navigate to the **specs** directory
> Review the spec.md file  
> Note that there are:  
    - user stories    
> ---

#### Add Clarification Using AI skill
> Enter command: <copy>/speckit-clarify</copy>  
> Answer any questions based on the specification explanation (If you have any questions ask the proctors)  
> --- 
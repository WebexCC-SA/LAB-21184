



#### The Constitution should reflect the following criteria:

> An API first Specification - Use only known and documented APIs   
> Zero Known Vulnerabilities - Do not introduce vulnerabilities for the sake of convenience   
> Structured Observability by Default - Every action will produce a log   
> POC Simplicity (YAGNI) - You Aren't Gonna Need It - Don't add fluff and unnecessary features   
> Secure Auth & Secret Hygiene    
> ---

??? code "Copy this prompt into the AI Agent interaction"
    ```md
    /speckit.constitution

    Create a constitution for the BYOC Middleware project that establishes non-negotiable principles for development and compliance.

    The project is a Node.js backend service that bridges Webex Messaging to Webex Contact Center. It must be production-ready, observable, and maintainable.

    Define these core principles:

    1. **API-First Specification**: All integrations with external services (Webex, WxCC) MUST validate every endpoint against the official published OpenAPI specification before any code is written. Endpoint URLs and spec source links MUST be documented in code comments. Any deviation from the published spec MUST be explicitly approved and filed in `deviations.md`.

    2. **Zero Known Vulnerabilities**: All npm dependencies MUST pass `npm audit --audit-level=moderate` with zero findings before being merged. Transitive vulnerabilities rated Medium or higher MUST be resolved or the feature deferred.

    3. **Structured Observability by Default**: Every API call, state transition, error, and significant decision MUST produce a JSON log entry containing: timestamp, operation name, outcome (success/failure), relevant identifiers, and error context. Silent failures are not acceptable.

    4. **POC Simplicity (YAGNI)**: The middleware is a proof of concept. Complexity must be justified by a concrete current requirement. No premature abstraction, plugin architectures, or speculative generalization.

    5. **Secure Auth & Secret Hygiene**: Authentication MUST use official Webex OAuth/token guidance, and credentials/secrets MUST be injected through environment-based configuration with strict redaction in logs and artifacts.

    Include development workflow requirements, governance procedures, and version management. Use semantic versioning for amendments.
    ```

#### Allow the Agent to create the Constitution and then review the output.
> Navigate to .specify/memory/constitution.md  
> Open the file in preview mode
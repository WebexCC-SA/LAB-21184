(function () {
  "use strict";

  const WEBEX_WEBHOOKS_URL = "https://webexapis.com/v1/webhooks";
  const BOT_TOKEN_KEY = "botToken";
  const POD_INFO_KEY = "podInfo";

  const STATIC_WEBHOOK = {
    name: "byoc-relay-messages-created",
    resource: "messages",
    event: "created",
    secret: "AlbDwtA76K_TpCp7GweKcMTzbi2gsGxmIJplFUKZ0A-IQX0mKw6v3ly4LrfZARhN",
    ownedBy: "creator",
  };

  function readRequiredSessionValues() {
    const botToken = sessionStorage.getItem(BOT_TOKEN_KEY)?.trim();
    const podInfo = sessionStorage.getItem(POD_INFO_KEY)?.trim();
    const missing = [];

    if (!botToken) missing.push(BOT_TOKEN_KEY);
    if (!podInfo) missing.push(POD_INFO_KEY);

    if (missing.length > 0) {
      alert(
        `Missing sessionStorage variable(s): ${missing.join(
          ", "
        )}. Please update them and run the script again.`
      );
      return null;
    }

    return { botToken, podInfo };
  }

  async function webexRequest(url, options) {
    const response = await fetch(url, {
      ...options,
      headers: {
        Accept: "application/json",
        ...(options.headers || {}),
      },
    });

    const body = await response.json().catch(() => ({}));
    if (!response.ok) {
      const detail = body.message || body.errors?.[0]?.description || response.statusText;
      throw new Error(`Webex API ${response.status}: ${detail}`);
    }
    return body;
  }

  async function ensureWebexWebhook() {
    const sessionValues = readRequiredSessionValues();
    if (!sessionValues) return;

    const targetUrl = `https://hook-to-socket.onrender.com/v1/pairs/${encodeURIComponent(
      sessionValues.podInfo
    )}/webhook`;
    const authorization = `Bearer ${sessionValues.botToken}`;

    const existingResponse = await webexRequest(WEBEX_WEBHOOKS_URL, {
      method: "GET",
      headers: { Authorization: authorization },
    });

    const hasWebhook = Array.isArray(existingResponse?.items)
      ? existingResponse.items.length > 0
      : Boolean(
          existingResponse &&
            typeof existingResponse === "object" &&
            Object.keys(existingResponse).length > 0
        );

    if (hasWebhook) {
      alert("A Webex webhook was returned. No new webhook was created.");
      return { created: false, response: existingResponse };
    }

    const created = await webexRequest(WEBEX_WEBHOOKS_URL, {
      method: "POST",
      headers: {
        Authorization: authorization,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...STATIC_WEBHOOK,
        targetUrl,
      }),
    });

    alert("Webex webhook successfully created.");
    return { created: true, webhook: created };
  }

  // The button should call window.ensureWebexWebhook().
  window.ensureWebexWebhook = ensureWebexWebhook;
})();
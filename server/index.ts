import { serve } from "bun";
import { createDatabase } from "./megration/initial_megration";
import { createConnections } from "./router/chat-routes";
await createDatabase()
await createConnections()

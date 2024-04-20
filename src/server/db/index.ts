import { drizzle } from "drizzle-orm/postgres-js";

import * as schema from "./schema";
import { sql } from "@vercel/postgres";


export const db = drizzle(sql, {schema});

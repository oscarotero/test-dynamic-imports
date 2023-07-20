import {} from "https://deno.land/std@0.177.0/http/server.ts";
import {} from "./file.ts";

const version = "0.177.0";
const mod = `https://deno.land/std@${version}/http/server.ts`;

const { serve } = await import(mod);

const file_path = import.meta.resolve("./file.ts");

const { default: content } = await import(file_path);

serve(() => new Response(content));

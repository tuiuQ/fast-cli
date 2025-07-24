import { template } from "./template.js";
import { RenderCtx } from "./types.js";

export function render(ctx: RenderCtx): string {
  let out = template;

  (Object.keys(ctx) as Array<keyof RenderCtx>).forEach((key) => {
    const value = ctx[key] ?? "";
    out = out.replace(new RegExp(`{{${key}}}`, "g"), value);
  });

  return out;
}

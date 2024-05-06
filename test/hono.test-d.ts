import { it, assertType } from "vitest";
import { useRoute } from "wouter-hono";

it("should only accept strings", () => {
  // @ts-expect-error
  assertType(useRoute(Symbol()));
  // @ts-expect-error
  assertType(useRoute());
  assertType(useRoute("/"));
});

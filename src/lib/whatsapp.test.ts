import { describe, expect, it } from "vitest";
import { buildWhatsAppLink } from "./whatsapp";

describe("buildWhatsAppLink", () => {
  it("strips formatting from the phone number", () => {
    expect(buildWhatsAppLink("+55 (11) 98765-4321")).toBe("https://wa.me/5511987654321");
  });

  it("encodes the pre-filled message", () => {
    expect(buildWhatsAppLink("5500000000000", "Olá! Avaliação?")).toBe(
      "https://wa.me/5500000000000?text=Ol%C3%A1!%20Avalia%C3%A7%C3%A3o%3F",
    );
  });
});

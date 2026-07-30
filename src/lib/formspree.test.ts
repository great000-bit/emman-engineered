import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { submitToFormspree } from "./formspree";

describe("submitToFormspree", () => {
  const fetchMock = vi.fn();

  beforeEach(() => {
    vi.stubGlobal("fetch", fetchMock);
  });

  afterEach(() => {
    vi.resetAllMocks();
    vi.unstubAllGlobals();
  });

  it("uses the contact endpoint for Contact Form submissions and sends required fields", async () => {
    fetchMock.mockResolvedValue({ ok: true });

    const result = await submitToFormspree("Contact Form", {
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "",
      service: "Training",
      message: "Hello",
    });

    expect(result.ok).toBe(true);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://formspree.io/f/xdaqjqwe",
      expect.objectContaining({
        method: "POST",
        headers: { Accept: "application/json" },
      }),
    );

    const body = (fetchMock.mock.calls[0][1] as { body: FormData }).body;
    expect(body.get("name")).toBe("Jane Doe");
    expect(body.get("email")).toBe("jane@example.com");
    expect(body.get("_replyto")).toBe("jane@example.com");
    expect(body.get("phone")).toBeNull();
    expect(body.get("service")).toBe("Training");
    expect(body.get("message")).toBe("Hello");
    expect(body.get("form_type")).toBe("Contact Form");
    expect(body.get("website")).toBe("Creative Emman Limited");
    expect(body.get("_subject")).toBe("New Contact Message - Creative Emman Limited");
    expect(body.get("_gotcha")).toBe("");
  });

  it("uses the applications endpoint for Professional Role Application submissions and omits empty optional fields", async () => {
    fetchMock.mockResolvedValue({ ok: true });

    const result = await submitToFormspree("Professional Role Application", {
      applicationType: "Professional Role",
      fullName: "Jane Doe",
      email: "jane@example.com",
      phone: "1234567890",
      location: "Lagos",
      roleApplyingFor: "Designer",
      areaOfExpertise: "UI/UX Design",
      yearsOfExperience: "3",
      portfolioLink: "",
      linkedinLink: "",
      cvLink: "https://example.com/cv.pdf",
      coverLetter: "Hello",
      availability: "Immediate",
    });

    expect(result.ok).toBe(true);
    expect(fetchMock).toHaveBeenCalledWith(
      "https://formspree.io/f/mykqknqa",
      expect.objectContaining({ method: "POST" }),
    );

    const body = (fetchMock.mock.calls[0][1] as { body: FormData }).body;
    expect(body.get("applicationType")).toBe("Professional Role");
    expect(body.get("_replyto")).toBe("jane@example.com");
    expect(body.get("portfolioLink")).toBeNull();
    expect(body.get("linkedinLink")).toBeNull();
  });

  it("uses the applications endpoint for Internship Application submissions", async () => {
    fetchMock.mockResolvedValue({ ok: true });

    const result = await submitToFormspree("Internship Application", {
      applicationType: "Internship",
      fullName: "Jane Intern",
      email: "intern@example.com",
      phone: "1234567890",
      location: "Port Harcourt",
      internshipArea: "UI/UX Design Intern",
      skillLevel: "Beginner",
      portfolioLink: "https://example.com/portfolio",
      linkedinLink: "",
      motivation: "I want to learn.",
      availability: "Immediate",
    });

    expect(result.ok).toBe(true);
    expect(fetchMock).toHaveBeenCalledWith("https://formspree.io/f/mykqknqa", expect.any(Object));
    const body = (fetchMock.mock.calls[0][1] as { body: FormData }).body;
    expect(body.get("applicationType")).toBe("Internship");
    expect(body.get("_replyto")).toBe("intern@example.com");
    expect(body.get("internshipArea")).toBe("UI/UX Design Intern");
  });

  it("returns ok: false when Formspree response is not ok", async () => {
    fetchMock.mockResolvedValue({ ok: false });

    const result = await submitToFormspree("Contact Form", {
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "",
      service: "Other",
      message: "Hello",
    });

    expect(result.ok).toBe(false);
  });

  it("returns ok: false on fetch failure", async () => {
    fetchMock.mockRejectedValue(new Error("Network error"));

    const result = await submitToFormspree("Contact Form", {
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "",
      service: "Other",
      message: "Hello",
    });

    expect(result.ok).toBe(false);
  });
});

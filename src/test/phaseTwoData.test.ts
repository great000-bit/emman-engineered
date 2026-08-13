import { describe, expect, it } from "vitest";
import { industries } from "@/data/industries";
import { allServices, serviceCategories } from "@/data/serviceCategories";
import { servicePricing } from "@/data/pricingData";

describe("phase two public architecture", () => {
  it("exposes the required service pillars", () => {
    expect(serviceCategories.map((category) => category.slug)).toEqual(["build", "grow", "scale", "train"]);
  });

  it("uses unique service routes and gives every service a pricing state", () => {
    const slugs = allServices.map((service) => service.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(slugs.every((slug) => Boolean(servicePricing[slug]?.amount))).toBe(true);
  });

  it("exposes the exact required industry routes", () => {
    expect(industries.map((industry) => industry.slug)).toEqual(["oil-gas", "education", "real-estate", "healthcare", "hospitality", "smes-startups"]);
  });
});

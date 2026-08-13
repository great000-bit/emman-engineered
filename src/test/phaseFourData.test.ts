import { describe, expect, it } from "vitest";
import { aboutTeamMembers, founderTeamMember, getTeamMember, teamMembers } from "@/data/teamMembers";
import { heroPhraseSets } from "@/data/heroData";
import { getServicePrice } from "@/data/pricingData";

describe("Phase Four team and hero architecture", () => {
  it("keeps punctuation in every animated hero phrase", () => {
    heroPhraseSets.flat().forEach((phrase) => expect(phrase.endsWith(".")).toBe(true));
  });

  it("excludes the founder only from the About marquee", () => {
    expect(teamMembers).toContain(founderTeamMember);
    expect(aboutTeamMembers).not.toContain(founderTeamMember);
    expect(aboutTeamMembers).toHaveLength(teamMembers.length - 1);
  });

  it("provides a unique working slug for every team member", () => {
    const slugs = teamMembers.map((member) => member.slug);
    expect(new Set(slugs).size).toBe(teamMembers.length);
    teamMembers.forEach((member) => expect(getTeamMember(member.slug)?.id).toBe(member.id));
  });

  it("provides profile essentials for every About marquee member", () => {
    aboutTeamMembers.forEach((member) => {
      expect(member.firstName).toBeTruthy();
      expect(member.role).toBeTruthy();
      expect(member.fullBio).toBeTruthy();
      expect(member.image).toBeTruthy();
    });
  });

  it("keeps the approved creative-production and training prices", () => {
    const approvedPrices: Record<string, [string, string]> = {
      "graphic-design": ["From ₦10,000", "From $10"],
      photography: ["From ₦15,000", "From $10"],
      "corporate-photography": ["From ₦40,000", "From $25"],
      "photography-content": ["From ₦50,000", "From $35"],
      videography: ["From ₦100,000", "From $65"],
      "video-editing": ["From ₦30,000 / project", "From $20 / project"],
      "videography-content": ["From ₦150,000", "From $95"],
      "graphic-design-training": ["From ₦100,000 / participant", "From $65 / participant"],
      "digital-marketing-training": ["From ₦150,000 / participant", "From $95 / participant"],
      "ui-ux-training": ["From ₦200,000 / participant", "From $125 / participant"],
      "web-development-training": ["From ₦400,000 / participant", "From $250 / participant"],
    };

    Object.entries(approvedPrices).forEach(([slug, [amount, usdAmount]]) => {
      expect(getServicePrice(slug)).toMatchObject({ amount, usdAmount });
    });
  });
});

import { describe, expect, it } from "vitest";
import { heroPhraseSets } from "@/data/heroData";
import { pricingTableSections, getServicePrice } from "@/data/pricingData";
import { getService } from "@/data/serviceCategories";
import { portfolioProjects } from "@/data/portfolioData";
import { teamMembers } from "@/data/teamMembers";
import { blogPosts } from "@/data/blogData";
import { blogArticles, getArticleById } from "@/data/blogArticlesData";

describe("Phase Three content architecture", () => {
  it("keeps the mandatory hero reel phrases", () => {
    expect(heroPhraseSets).toEqual([
      ["We\u00a0build.", "We\u00a0grow.", "We\u00a0scale."],
      ["We\u00a0design.", "We\u00a0develop.", "We\u00a0deliver."],
      ["We\u00a0create.", "We\u00a0launch.", "We\u00a0transform."],
    ]);
  });

  it("provides all twelve requested pricing niches", () => {
    expect(pricingTableSections).toHaveLength(12);
    expect(pricingTableSections.map((section) => section.id)).toEqual([
      "websites", "ui-ux", "branding", "software", "maintenance", "growth",
      "social", "automation", "photography", "video", "motion", "training",
    ]);
  });

  it("links every pricing row to a real service and central price", () => {
    pricingTableSections.flatMap((section) => section.serviceSlugs).forEach((slug) => {
      expect(getService(slug), slug).toBeDefined();
      expect(getServicePrice(slug)?.amount, slug).toBeTruthy();
      expect(getServicePrice(slug)?.usdAmount, slug).toBeTruthy();
    });
  });

  it("has genuine repository data for trust and team rails", () => {
    expect(new Set(portfolioProjects.map((project) => project.clientName)).size).toBeGreaterThan(0);
    expect(teamMembers.length).toBeGreaterThan(0);
  });

  it("publishes only the first 100 customers launch article", () => {
    expect(blogPosts).toHaveLength(1);
    expect(blogArticles).toHaveLength(1);
    expect(blogPosts[0].id).toBe("first-100-customers-online-nigeria");
    expect(getArticleById(blogPosts[0].id)?.tocItems).toHaveLength(9);
    expect(getArticleById(blogPosts[0].id)?.content.length).toBeGreaterThan(25);
  });
});

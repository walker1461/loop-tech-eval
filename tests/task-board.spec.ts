import { test, expect } from "@playwright/test";

test("login", async ({ page }) => {
    await page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    await page.getByRole("textbox", { name: "Username" }).click();
    await page.getByRole("textbox", { name: "Username" }).fill("admin");
    await page.getByRole("textbox", { name: "Password" }).click();
    await page.getByRole("textbox", { name: "Password" }).fill("password123");
    await page.getByRole("button", { name: "Sign in" }).click();
    await expect(page.getByText("Projects"));
});

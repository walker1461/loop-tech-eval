import { test } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { BoardPage } from "../pages/BoardPage";
import testData from "../tests/testData.json";

test.describe("Task board tests", () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login("admin", "password123");
    });

    for (const testCase of testData) {
        test(testCase.name, async ({ page }) => {
            const dashboard = new BoardPage(page);

            await dashboard.navigateToApp(testCase.application);
            await dashboard.verifyTaskInColumn(testCase.task, testCase.column);
            await dashboard.verifyTaskTags(testCase.task, testCase.tags);
        });
    }
});

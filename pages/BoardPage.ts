import { Page, expect, Locator } from "@playwright/test";

export class BoardPage {
    constructor(private page: Page) {}

    // navigation
    async navigateToApp(appName: string) {
        await this.page
            .getByRole("button", { name: new RegExp(appName, "i") })
            .click();
    }

    // helpers
    private getColumn(columnName: string): Locator {
        return this.page
            .getByRole("heading", {
                name: new RegExp(`${columnName}`),
                level: 2,
            })
            .locator("xpath=..");
    }

    private getTask(taskName: string): Locator {
        return this.page.getByRole("heading", { name: taskName, level: 3 });
    }

    private getTaskCard(taskName: string): Locator {
        return this.getTask(taskName).locator("xpath=..");
    }

    // assertions
    async verifyTaskInColumn(taskName: string, columnName: string) {
        const column = this.getColumn(columnName);
        const task = this.getTask(taskName);

        // column exists
        await expect(column).toBeVisible();

        // task exists
        await expect(task).toBeVisible();

        // task is in correct column
        await expect(column).toContainText(taskName);
    }

    async verifyTaskTags(taskName: string, tags: string[]) {
        const card = this.getTaskCard(taskName);

        for (const tag of tags) {
            // task card contains correct tag(s)
            await expect(card).toContainText(tag);
        }
    }
}

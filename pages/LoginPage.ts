import { Page } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto("https://animated-gingersnap-8cf7f2.netlify.app/");
    }

    async login(username: string, password: string) {
        await this.page
            .getByRole("textbox", { name: "Username" })
            .fill(username);
        await this.page
            .getByRole("textbox", { name: "Password" })
            .fill(password);
        await this.page.getByRole("button", { name: "Sign in" }).click();
    }
}

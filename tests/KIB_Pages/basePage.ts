import { Locator, Page } from "@playwright/test";
export default class basePage {
    protected readonly page:Page;
    constructor(page:Page) {
        this.page=page;
    }

       protected async enterTextToElement(element: Locator, text: string) {
        await element.scrollIntoViewIfNeeded();           // Scroll للعنصر لو مش ظاهر
        await element.waitFor({ state: 'visible', timeout: 10000 });  // انتظر يظهر
        await element.fill(text);                         // اكتب فيه
    }

    protected async clickOnElement(element: Locator) {
        await element.scrollIntoViewIfNeeded();
        await element.waitFor({ state: 'visible', timeout: 10000 });
        await element.click();
    }
}
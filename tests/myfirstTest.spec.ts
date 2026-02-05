import { test,expect } from "@playwright/test";
import { title } from "node:process";

test('My first test',async({page})=>{
    await page.goto('https://www.google.com/')
    await expect(page).toHaveTitle('Google');
} 


);
import { By, Builder, Browser, Key} from "selenium-webdriver";
import { expect } from 'chai';
const productColor = ['Red','Black','Blue','Green'];
const productSize = ['M','L'];
const ProductName = "Nike air zoom pegasus 35";
function getRandomIntNumber(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
  }

async function testRun() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
        await driver.manage().window().maximize();
        await driver.get("https://demo.evershop.io/"); 
        await driver.findElement(By.className('search-icon')).click(); // Click on the search icon
        //const searchXpath = "//input[@placeholder='Search']";
        // await driver.findElement(By.xpath(searchXpath)).sendKeys(ProductName);//another type or next one
        await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(ProductName);// Locate search input field
        await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER); // Type the product name and press ENTER
        const getProduct = `(//span[contains(text(),'Nike air zoom pegasus 35')])[${getRandomIntNumber(2,3)}]`;
        //const actualValue = await driver.findElement(By.xpath(getProduct)).getText();
        await driver.findElement(By.xpath(getProduct)).click();
        let size = productSize[getRandomIntNumber(0,1)];
        let color = productColor[getRandomIntNumber(0,3)];
        const getSize = `//a[contains(text(),'${size}') and @href='#']`;
        await driver.findElement(By.xpath(getSize)).click();
        await driver.sleep(2000);
        const getColor = `//a[contains(text(),'${color}') and @href='#']`;
        await driver.findElement(By.xpath(getColor)).click();
        
        //const actualValue = await driver.findElement(By.xpath("(//a[@href='/men/nike-air-zoom-pegasus-35-146'])[2]")).getText();
        //expect(ProductName).to.include(actualValue);
        // Wait for search results to load
        await driver.sleep(5000);
        await driver.quit();
    }

testRun();
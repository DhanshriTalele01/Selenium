package com.fbook;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
public class Chromefbook {

	public static void main(String[] args)  {
		WebDriver driver=new ChromeDriver();
		driver.get("https://www.facebook.com/");
		//driver.close();
		driver.findElement(By.id("email")).sendKeys("9766966101");
		driver.findElement(By.id("email")).clear();
		driver.findElement(By.id("email")).sendKeys("9766966101");
		driver.findElement(By.name("pass")).sendKeys("Dhan@123");
		driver.findElement(By.name("login")).click();
	}

}

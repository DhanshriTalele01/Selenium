package com.fbook;
import java.util.Scanner;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import java.util.Scanner;
public class Loginfbook1 {

	public static void main(String[] args) throws InterruptedException{
		Scanner sc=new Scanner(System.in);
		WebDriver driver= new ChromeDriver();
		driver.get("https://www.facebook.com");
		driver.findElement(By.id("email")).sendKeys("dhanshritalele96@gmail.com");
		driver.findElement(By.name("pass")).sendKeys("drtfacebook");
		driver.findElement(By.name("login")).click();
		
	}

}

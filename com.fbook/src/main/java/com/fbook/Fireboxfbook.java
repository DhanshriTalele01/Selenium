package com.fbook;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
public class Fireboxfbook {

	public static void main(String[] args) {
		
		WebDriver john=new FirefoxDriver();
		john.get("https://www.facebook.com/");
	}

}

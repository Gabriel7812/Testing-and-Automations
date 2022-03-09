package Test;

import java.util.concurrent.TimeUnit;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class TestBasic {

	@Test
	public static void main(String[] args) {
		// Aqui voce informa onde o chromedriver está em sua maquina
		System.setProperty("webdriver.chrome.driver",
				"C:\\automacoes-projetos-iniciais-prontos\\Java_and_Selenium WebDriver-JUnit\\chromedriver\\chromedriver.exe");

		// Aqui está atribuindo ao navegador para abrir em um novo navegador
		WebDriver navegador = new ChromeDriver();

		// Aqui voce está informando ao SQD o tempo máximo que ele deve esperar
		// para tentar realizar o teste
		// Pois em alguns casos a pagina pode demorar para aparecer
		navegador.manage().timeouts().implicitlyWait(7, TimeUnit.SECONDS);

		// Aqui voce ira indicar o endereço web que deseja acessar
		navegador.get("https://google.net");

		// Encontrando a barra de pesquisa
		WebElement element = navegador.findElement(By.name("q"));

		// Digitando a palavra a ser pesquisada na barra de pesquisa
		element.sendKeys("Automações em java com selenium webdriver e junit");

		// Clicando no botão para efetuar a pesquisa
		element.submit();
	}

}

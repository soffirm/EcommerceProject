package org.utilities;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {
	public static void generateJvmReport(String jsonPath) {
		
		File f= new File("C:\\Users\\USER\\eclipse-workspace\\ProjectCucumber\\JvmReport");
		
		Configuration c= new Configuration(f, "Amazon Cart Feature");
		
		c.addClassifications("Platform", "Windows 10");
		c.addClassifications("Language used", "Java");
		c.addClassifications("Feature", "Amazon Cart Feature");
		c.addClassifications("Browser Name", "Chrome Browser");
		
		List<String>li= new ArrayList<String>();
		li.add(jsonPath);
		
		ReportBuilder r= new ReportBuilder(li, c);
		
		r.generateReports();
		
		
		
	
	}
	
	

}

	
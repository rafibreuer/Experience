
package webcrawling;

import java.io.IOException;
import java.util.logging.*;
import org.jsoup.*;
import org.jsoup.nodes.*;
import org.jsoup.select.*;


public class WebCrawling {

    public static void main(String[] args) {
        try {
      Document doc = Jsoup.connect("http://kolleldeals.blogspot.com/").get();
      Elements paragraphs = doc.select(".post-body");
      for(Element p : paragraphs)
         if(p.text().toLowerCase().contains("laptop")){
        System.out.println(p.text());
        }
    } 
    catch (IOException ex) {
      Logger.getLogger(WebCrawling.class.getName())
            .log(Level.SEVERE, null, ex);
    }
    }
    
}

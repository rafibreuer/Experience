/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package webcrawling;

import java.io.IOException;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

/**
 *
 * @author rafi
 */
public class Crawler {

    public void crawl(Consumer consumer) {
        try {
            Document doc = Jsoup.connect(consumer.getUrl()).get();
            Elements body = doc.select("body");
            consumer.setSearchResult("No result for: " + consumer.getSearchText());
            for (Element p : body) {
                if (p.text().toLowerCase().contains(consumer.getSearchText())) {
                    consumer.setSearchResult(consumer.getSearchText());
                }
            }
        } catch (IOException ex) {
            Logger.getLogger(Crawler.class.getName())
                    .log(Level.SEVERE, null, ex);
        }
    }

    public Crawler() {
    }

}

package webcrawling;

import java.io.IOException;
import java.util.logging.*;
import org.jsoup.*;
import org.jsoup.nodes.*;
import org.jsoup.select.*;

/**
 *
 * @author rafi
 */
public class Consumer {

    public void Start() {
        crawl();
    }

    private void crawl() {
        String crawlUrl = this.getCrawlUrl("http://kolleldeals.blogspot.com/");
        String searchText = this.getSearch("laptop");
        try {
            Document doc = Jsoup.connect(crawlUrl).get();
            Elements paragraphs = doc.select(".post-body");
            for (Element p : paragraphs) {
                if (p.text().toLowerCase().contains(searchText)) {
                    System.out.println(p.text());
                }
            }
        } catch (IOException ex) {
            Logger.getLogger(WebCrawling.class.getName())
                    .log(Level.SEVERE, null, ex);
        }
    }

    private String getCrawlUrl(String url) {
        return url;
    }

    private String getSearch(String text) {
        return text;
    }
}

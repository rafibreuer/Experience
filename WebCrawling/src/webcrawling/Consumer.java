package webcrawling;

/**
 *
 * @author rafi
 */
public class Consumer {

    private String searchText;
    private String url;

    public Consumer() {
    }

    public Consumer(String url, String text) {
        this.url = url;
        this.searchText = text;
    }

    public void Start() {
        new Crawler().crawl(this);
    }

    public void setSearchText(String text) {
        this.searchText = text;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUrl() {
        return this.url;
    }

    public String getSearchText() {
        return this.searchText;
    }
}

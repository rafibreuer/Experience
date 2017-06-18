package webcrawling;

/**
 *
 * @author rafi
 */
public class Consumer {
//http://kolleldeals.blogspot.com/

    private String searchText;
    private String url;
    private String searchResult;

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

    public String getSearchResult() {
        return this.url + "\n has: " + this.searchResult;
    }
    public void setSearchResult(String result) {
        this.searchResult=result;
    }
}

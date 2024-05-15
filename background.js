browser.pageAction.onClicked.addListener((tab) => {
    const re = /(?:twitter|x)\.com(\/.*\/status\/[0-9]+).*/;
    if (!re.test(tab.url))
        return;
    const newUrl = new URL(tab.url);
    newUrl.search = "";
    newUrl.hash = "";
    path = tab.url.match(re)[1];
    newUrl.pathname = (
        path + (path.endsWith("/") ? "" : "/") + "retweets/with_comments"
    );
    console.log(`Tab ${tab.id} -> ${newUrl}`);
    browser.tabs.create({ url: newUrl.href, openerTabId: tab.id });
});
console.log("Added listeners for pageAction.");

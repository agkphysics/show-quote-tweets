browser.pageAction.onClicked.addListener((tab) => {
    if (!/twitter\.com\/.*\/status/.test(tab.url))
        return;
    const newUrl = new URL(tab.url);
    newUrl.search = "";
    newUrl.hash = "";
    newUrl.pathname = (
        newUrl.pathname +
        (newUrl.pathname.endsWith("/") ? "" : "/") +
        "retweets/with_comments"
    );
    console.log(`Tab ${tab.id} -> ${newUrl}`);
    browser.tabs.create({ url: newUrl.href });
});
console.log("Added listeners for pageAction.");

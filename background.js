browser.pageAction.onClicked.addListener((tab) => {
    if (!/twitter\.com\/.*\/status/.test(tab.url))
        return;
    const newUrl = (
        tab.url +
        (tab.url.endsWith("/") ? "" : "/") +
        "retweets/with_comments"
    );
    console.log(`Tab ${tab.id} -> ${newUrl}`);
    browser.tabs.create({ url: newUrl });
});
console.log("Added listeners for pageAction.");

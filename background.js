chrome.tabs.onCreated.addListener(function () {
    chrome.tabs.update({'url': "http://www.sproutsocial.com"});
});

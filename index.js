// Get the current active tab and fetch its details
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    document.getElementById('page-title').innerText = tab.title;
    document.getElementById('page-url').innerText = tab.url;
});

// Change the page title when the button is clicked
document.getElementById('change-title').addEventListener('click', () => {
    const newTitle = document.getElementById('new-title').value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            func: (title) => {
                document.title = title;
            },
            args: [newTitle]
        });
    });
});

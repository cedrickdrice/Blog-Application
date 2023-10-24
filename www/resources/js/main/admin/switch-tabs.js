document.addEventListener('DOMContentLoaded', function() {
    // Header Tab
    const blogPostTab = document.getElementById('blog-post-tab');
    const blogSettingsTab = document.getElementById('blog-settings-tab');

    const blogPostContent = document.getElementById('blog-post-tab-content');
    const blogSettingsContent = document.getElementById('blog-settings-tab-content');

    const ACTIVE_TAB = 'header-tab__group--active';
    const HIDE_SECTION = 'tab-content--hidden';

    blogSettingsTab.addEventListener('click', function() {
        blogSettingsTab.classList.add(ACTIVE_TAB);
        blogPostTab.classList.remove(ACTIVE_TAB);
        blogSettingsContent.classList.remove(HIDE_SECTION);
        blogPostContent.classList.add(HIDE_SECTION);
    })

    blogPostTab.addEventListener('click', function() {
        blogPostTab.classList.add(ACTIVE_TAB);
        blogSettingsTab.classList.remove(ACTIVE_TAB);
        blogPostContent.classList.remove(HIDE_SECTION);
        blogSettingsContent.classList.add(HIDE_SECTION);
    })

    // Feed settings tab
    const settingsFeedTab = document.getElementById('settings-feed-tab');
    const settingsDisplayTab = document.getElementById('settings-display-tab');
    const settingsStyleTab = document.getElementById('settings-style-tab');

    const settingFeedContent = document.getElementById('settings-feed-content');
    const settingDisplayContent = document.getElementById('settings-display-content');
    const settingStyleContent = document.getElementById('settings-style-content');

    const SETTINGS_ACTIVE_TAB = 'settings-content__tab--active';
    const SETTINGS_HIDE_SECTION = 'settings-content__content--hidden';

    function setDisplayTabActive() {
        settingsFeedTab.classList.remove(SETTINGS_ACTIVE_TAB);
        settingsDisplayTab.classList.add(SETTINGS_ACTIVE_TAB);
        settingsStyleTab.classList.remove(SETTINGS_ACTIVE_TAB);
        settingFeedContent.classList.add(SETTINGS_HIDE_SECTION);
        settingDisplayContent.classList.remove(SETTINGS_HIDE_SECTION);
        settingStyleContent.classList.add(SETTINGS_HIDE_SECTION);
    }

    function setFeedTabActive() {
        settingsFeedTab.classList.add(SETTINGS_ACTIVE_TAB);
        settingsDisplayTab.classList.remove(SETTINGS_ACTIVE_TAB);
        settingsStyleTab.classList.remove(SETTINGS_ACTIVE_TAB);
        settingFeedContent.classList.remove(SETTINGS_HIDE_SECTION);
        settingDisplayContent.classList.add(SETTINGS_HIDE_SECTION);
        settingStyleContent.classList.add(SETTINGS_HIDE_SECTION);
    }

    function setStyleTabActive() {
        settingsFeedTab.classList.remove(SETTINGS_ACTIVE_TAB);
        settingsDisplayTab.classList.remove(SETTINGS_ACTIVE_TAB);
        settingsStyleTab.classList.add(SETTINGS_ACTIVE_TAB);
        settingFeedContent.classList.add(SETTINGS_HIDE_SECTION);
        settingDisplayContent.classList.add(SETTINGS_HIDE_SECTION);
        settingStyleContent.classList.remove(SETTINGS_HIDE_SECTION);
    }

    settingsFeedTab.addEventListener('click', setFeedTabActive);

    settingsDisplayTab.addEventListener('click', setDisplayTabActive);

    settingsStyleTab.addEventListener('click', setStyleTabActive);
});

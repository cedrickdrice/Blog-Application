<template>
    <!-- Feed Settings -->
    <section id="settings-feed-content" class="settings-content__content">
        <div class="title-tooltip">
            <div class="title-tooltip__text">Blog Feed Settings</div>
            <div class="tooltip__icon"><a href="#none">?</a></div>
        </div>
        <table border="0" cellpadding="0" cellspacing="0" class="blog-settings-options" aria-label="Settings Table">
            <tr>
                <td scope="col">Store</td>
                <td scope="col">
                    <div class="mSelect blog-settings-options__choose-store blog-store-name">
                        <div class="value">
                            <span>Choose Store </span>
                        </div>
                        <button type="button" class="cover eSelect">Choose Store</button>
                        <div ref="store_name" class="dropdown storeName">
                            <ul @click="getInputValue($event, 'shop_no', 'feed', 'value')" class="option">
                                <li class="selected">
                                    <a value="0">Choose Store</a>
                                </li>
                                <li v-for="oShop in aShops" :key="oShop.shop_no">
                                    <a :value="oShop.shop_no">{{ oShop.shop_name }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td scope="col">Blog Provider</td>
                <td scope="col">
                    <div class="mSelect blog-settings-options__blog-provider  blog-feed-provider">
                        <div class="value">
                            <span>Select Blog Provider </span>
                        </div>
                        <button type="button" class="cover eSelect">Select Blog Provider</button>
                        <div ref="feed_provider" class="dropdown">
                            <ul @click="getInputValue($event, 'blogging_site_no', 'feed', 'value')" class="option">
                                <li class="selected">
                                    <a value="0">Select Blog Provider</a>
                                </li>
                                <li v-for="oProvider in aProvider" :key="oProvider.site_no">
                                    <a :value="oProvider.site_no">{{ oProvider.blog_name }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td scope="col">Feed Title</td>
                <td scope="col"><input ref="feed_title" @change="getInputValue($event, 'feed_title', 'feed')" type="text" class="setting-input blog-feed-title" placeholder="Enter the title of this feed"></td>
            </tr>
            <tr>
                <td scope="col">Feed URL <div class="tooltip__icon"><a href="#none">?</a></div></td>
                <td scope="col"><input ref="feed_url" @change="getInputValue($event, 'feed_url', 'feed')" type="text" class="setting-input blog-feed-url" placeholder="Enter the blog feed's URL"></td>
            </tr>
            <tr>
                <td scope="col">Display Blog Feed</td>
                <td scope="col">
                    <div class="mSelect">
                        <div class="value">
                            <span>Disabled </span>
                        </div>
                        <button type="button" class="cover eSelect">Disabled</button>
                        <div ref="show_feed" class="dropdown">
                            <ul @click="getInputValue($event, 'show_feed', 'feed', 'value')" class="option">
                                <li class="selected"><a value="false">Disabled</a></li>
                                <li><a value="true">Enabled</a></li>
                            </ul>
                        </div>
                    </div>
                </td>
            </tr>
            <tr>
                <td scope="col">Placement</td>
                <td scope="col">
                    <div id="feed-button--loc-selector" class="feed-button feed-button--loc-selector">open location selector</div> <a href="#none" class="settings-redirect">View in Mall</a>
                </td>
            </tr>
        </table>
        <div class="save-container">
            <div @click="inheritSave" class="feed-button feed-button--save">Save Settings</div>
        </div>
    </section>
    <!-- // Feed settings -->
</template>

<script>

export default {
    data() {
        return {
            aShops: [],
            aProvider: [],
            oBlogFeed : {},
            sComponentRef: 'oBlogFeedRef'
        }
    },
    mounted() {
        this.getCafe24Shops();
        this.getBlogProviders();
        this.oBlogFeed = this.blogFeedDefault;
    },
    updated() {
        this.setInitialData();
    },
    props: ['inheritSave', 'getInputValue', 'blogFeedDefault', 'setInputInitialData'],
    methods: {
        setInitialData () {
            let aInputs = [
                {
                    reference : 'feed_provider',
                    type : 'dropdown',
                    value : this.blogFeedDefault.blogging_site_no
                },
                {
                    reference : 'show_feed',
                    type : 'dropdown',
                    value : this.blogFeedDefault.show_feed
                },
                {
                    reference : 'feed_title',
                    type : 'text',
                    value : this.blogFeedDefault.feed_title
                },
                {
                    reference : 'feed_url',
                    type : 'text',
                    value : this.blogFeedDefault.feed_url
                },
            ];
            this.setInputInitialData(aInputs, this.sComponentRef);
        },
        /**
         * Get Mall available shops
         */
        getCafe24Shops() {
            axios.get('/api/admin/feeds/shops').
            then(oResponse => {
                let aShop = oResponse.data.data.shops;
                aShop.forEach((oValue) => {
                    this.aShops.push({
                        shop_name : oValue.shop_name,
                        shop_no : oValue.shop_no
                    });
                });
            })
            .catch(function (error) {
                console.log(error);
            });
        },

        /**
         * Get Blog Providers available on Blog-App
         */
        getBlogProviders() {
            axios.get('/api/admin/provider/list').
            then(oResponse => {
                let aProvider = oResponse.data.data;
                aProvider.forEach((aValue) => {
                    this.aProvider.push({
                        blog_name : aValue.blog_name,
                        site_no : aValue.site_no
                    });
                });
            })
            .catch(function (oError) {
                console.log(oError);
            });
        }
    }
}
</script>


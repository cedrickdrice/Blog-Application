<template>
    <div>
        <div class="blog-feed-heading">
            <div class="feed-button feed-button--back">List</div>
            <div class="blog-feed-heading__title">Blog Feed Name</div>
        </div>
        <div class="header-tab">
            <div id="blog-post-tab" class="header-tab__group header-tab__group--active">Blog Posts</div>
            <div id="blog-settings-tab" class="header-tab__group">Blog Feed Settings</div>
        </div>
        <!-- Blog feed settings -->
        <section id="blog-settings-tab-content" class="tab-content tab-content--hidden settings-content">
            <div class="settings-content__tab-group">
                <div id="settings-feed-tab" class="settings-content__tab settings-content__tab--active">Feed</div>
                <div id="settings-display-tab" class="settings-content__tab settings-content__tab--disabled">Display</div>
                <div id="settings-style-tab" class="settings-content__tab settings-content__tab--disabled">Style</div>
            </div>
            <div class="settings-flex">
                <admin-blog-setting-feed ref="oBlogFeedRef" :set-input-initial-data="setInputInitialData" :blog-feed-default="oBlogFeedDefault" :inherit-save="blogSettingSave" :get-input-value="getInputValue"></admin-blog-setting-feed>
                <admin-blog-setting-display ref="oBlogDisplayRef" :set-input-initial-data="setInputInitialData" :blog-feed-data="oBlogFeed" :blog-display-data="oBlogDisplay" :blog-display-default="oBlogDisplayDefault" :inherit-save="blogSettingSave" :get-input-value="getInputValue" :get-image-object="getImageObject"></admin-blog-setting-display>
                <admin-blog-setting-style ref="oBlogStyleRef" :blog-style-data="oBlogStyle" :blog-style-default="oBlogStyleDefault" :inherit-save="blogSettingSave" :get-input-value="getInputValue"></admin-blog-setting-style>
                <admin-blog-setting-preview ref="oLivePreview" :blog-display-data="oBlogDisplay" :blog-feed-no="iBlogFeedNo" :blog-feed-data="oBlogFeed" v-show="bDisplayPreview"></admin-blog-setting-preview>
            </div>
        </section>
    </div>
</template>

<script>
import oAlerts from '../../main/admin/lib-alerts-button.js';

export default {
    mounted() {
        this.setBeforeUnload();
        this.setDataSettingsDefault();
    },
    data() {
        return {
            oDataValidated: [],
            bDisplayPreview : false,
            oBlogFeed : {},
            oBlogDisplay : {},
            oBlogStyle : {},
            oImageObject : '',
            iBlogFeedNo : window.location.pathname.split('/')[3],
            oBlogFeedDefault : {
                blogging_site_no        : 0,
                feed_title              : '',
                feed_url                : '',
                show_feed               : false,
                shop_no                 : 0,
                location_selector_no    : 1,
                store_name              : "Store Name"
             },
            oBlogDisplayDefault : {
                post_limit_count        : 125,
                post_description_count  : 250,
                post_per_page           : 5,
                show_thumbnail          : true,
                layout_no               : 1,
                thumbnail_filepath      : 'sample filepath'
            },
            oBlogStyleDefault : {
                feed_title: {
                    module_no           : 1,
                    font_type           : "Default",
                    font_size           : 18,
                    font_color          : "#000000",
                    show_description    : true
                },
                blog_post_title: {
                    module_no           : 2,
                    font_type           : "Default",
                    font_size           : 12,
                    font_color          : "#555555",
                    show_description    : true
                },
                date_and_time: {
                    module_no           : 3,
                    font_type           : "Default",
                    font_size           : 10,
                    font_color          : "#ABAEB5",
                    show_description    : true
                },
                post_description: {
                    module_no           : 4,
                    font_type           : "Default",
                    font_size           : 12,
                    font_color          : "#555555",
                    show_description    : true
                },
                read_more: {
                    module_no           : 5,
                    font_type           : "Default",
                    font_size           : 12,
                    font_color          : "#008BCC",
                    show_description    : true
                }
            }
        };
    },
    methods: {
        /**
         * Initialize default value to object that will be manipulated.
         */
        setDataSettingsDefault () {
            let oFeedDefault =  this.oBlogFeedDefault;
            let oDisplayDefault =  this.oBlogDisplayDefault;
            let oStyleDefault =  this.oBlogStyleDefault;

            // JSON.parse deep copies the default data thus prevents passing data by reference.
            this.oBlogFeed = JSON.parse(JSON.stringify(oFeedDefault));
            this.oBlogDisplay = JSON.parse(JSON.stringify(oDisplayDefault));
            this.oBlogStyle = JSON.parse(JSON.stringify(oStyleDefault));
        },

        /**
         * Set the input value from the default or loaded blog settings
         * @param aInputs
         * @param sReference
         */
        setInputInitialData (aInputs, sReference) {
            aInputs.forEach((oValue) => {
                if (oValue.type === 'dropdown' || oValue.type === 'radio') {
                    let oQuery = this.$refs[sReference].$refs[oValue.reference].querySelector('[value="' + oValue.value + '"]');
                    if (oQuery !== null) {
                        this.$refs[sReference].$refs[oValue.reference].querySelector('[value="' + oValue.value + '"]').click();
                    }
                } else if ((oValue.type === 'text' || oValue.type === 'number') && oValue.value !== '') {
                    this.$refs[sReference].$refs[oValue.reference].value = oValue.value;
                } else if (oValue.type === 'file') {
                    this.$refs[sReference].$refs[oValue.reference].setAttribute('src', oValue.value);
                }
            });
        },

        /**
         * Set the value of the model dynamically
         * @param oArr
         * @param aPath
         * @param mValue
         */
        setDynamicArrayValue(oArr, aPath, mValue){
            if (aPath.length === 1){
                oArr[aPath[0]] = mValue;
            } else {
                let aNext = aPath.shift();
                this.setDynamicArrayValue(oArr[aNext], aPath, mValue);
            }
        },

        /**
         * Pass the value of input to the object model
         * @param oEvent
         * @param sObj
         * @param sModule
         * @param sAttr
         */
        getInputValue(oEvent, sObj, sModule, sAttr) {
            let mValue = '';

            let sType = oEvent.target.type;

            if (sAttr !== '' && sAttr !== undefined) {
                mValue = oEvent.target.getAttribute(sAttr);
            } else if (sType === 'checkbox') {
                mValue = oEvent.target.checked;
            } else if (sType === 'file') {
                mValue = oEvent.target.src;
            } else {
                mValue = oEvent.target.value;
            }

            let mData = (mValue === 'true' || mValue === 'false') ?  JSON.parse(mValue) : mValue; //converts string bool value to bool
            sObj = sObj.replaceAll(" ", "").split(",");
            if (sModule === 'feed') {
                this.setDynamicArrayValue(this.oBlogFeed, sObj, mData);
            } else if (sModule === 'display') {
                this.setDynamicArrayValue(this.oBlogDisplay, sObj, mData);
                this.$refs.oLivePreview.reinitializeLayout(this.oBlogDisplay);
            } else if (sModule === 'style') {
                this.setDynamicArrayValue(this.oBlogStyle, sObj, mData);
            }
        },

        /**
         * Get the image object and pass it as request parameter
         */
        async getImageObject (oEvent) {
            let oFile = oEvent.target.files[0];
            let oReader = new FileReader();
            let oReaderObj = '';
            let oReaderPromise = new Promise(function(resolve, reject) {
                oReader.addEventListener("load", function () {
                    oReaderObj = oReader.result;
                    resolve(oReaderObj);
                }, false);
                if (oFile !== undefined && oFile !== '') {
                    oReader.readAsDataURL(oFile);
                }
            });

            return await oReaderPromise;
        },

        /**
         * Validate data based on types
         * @param sType
         * @param sData
         * @param sMessage
         * @returns {{message: string, is_validated: boolean}}
         */
        checkDataValidation (sType, sData, sMessage) {
            let sMsg = '';
            let bValidated = true;
            if (sType.includes('required') === true && (sData === '' || sData === undefined || parseInt(sData) === 0)) {
                bValidated = false;
                if (sMessage === '' || sMessage === undefined ) {
                    sMsg = 'This field is required';
                } else {
                    sMsg = sMessage;
                }
            } else if (sType.includes('url') === true) {
                if (this.isValidURL(sData) === false) {
                    bValidated = false;
                    sMsg = 'URL format is not valid';
                }
            }
            this.oDataValidated.push(bValidated);
            return {'message' : sMsg, 'is_validated': bValidated};
        },

        /**
         * Regex checker for valid URL.
         * @param string
         * @returns {boolean}
         */
        isValidURL (string) {
            const res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
            return (res !== null)
        },

        /**
         * Return error prompt to be appended on the inputs
         * @param sMessage
         * @returns {*|string}
         */
        setPromptElement (sMessage) {
            return sMessage === '' ? sMessage : '<div class="blog-prompt-message" style="padding-left: 10px; padding-bottom: 10px"><span style="color: red;">  ' + sMessage + '</span></div>'
        },

        /**
         * Check if the data provided on input is valid before passing for request.
         * @returns {boolean}
         */
        validateRequestData () {
            this.oDataValidated = [];
            document.querySelectorAll('.blog-prompt-message').forEach(function (sElem) {
                sElem.remove();
            });
            let oFeedStore = document.querySelector('.blog-store-name');
            let oFeedProvider = document.querySelector('.blog-feed-provider');
            let oFeedTitle = document.querySelector('.blog-feed-title');
            let oFeedUrl = document.querySelector('.blog-feed-url');

            let oFeedStoreValidation = this.checkDataValidation(['required'], this.oBlogFeed.shop_no);
            let oFeedProviderValidation = this.checkDataValidation(['required'], this.oBlogFeed.blogging_site_no);
            let oFeedTitleValidation = this.checkDataValidation(['required'], this.oBlogFeed.feed_title);
            let oFeedUrlValidation = this.checkDataValidation(['required', 'url'], this.oBlogFeed.feed_url);

            oFeedStore.insertAdjacentHTML('afterend', this.setPromptElement(oFeedStoreValidation.message));
            oFeedProvider.insertAdjacentHTML('afterend', this.setPromptElement(oFeedProviderValidation.message));
            oFeedTitle.insertAdjacentHTML('afterend', this.setPromptElement(oFeedTitleValidation.message));
            oFeedUrl.insertAdjacentHTML('afterend', this.setPromptElement(oFeedUrlValidation.message));

            return this.oDataValidated.includes(false) !== true;
        },

        /**
         * Enable disabled tabs after the successful input validation of blog feed.
         */
        enableDisplayStyleTabs () {
            let oDisplayTab = document.querySelector('#settings-display-tab');
            let oStyleTab = document.querySelector('#settings-style-tab');
            oDisplayTab.classList.remove('settings-content__tab--disabled');
            oStyleTab.classList.remove('settings-content__tab--disabled');
            oDisplayTab.click();
            this.bDisplayPreview = true;
        },

        /**
         * Request for saving the blog settings
         */
        blogSettingSave () {
            if (this.validateRequestData() === true) {
                let oCurrentObj = this;
                axios.post('/api/admin/feeds/store', {
                    feed: this.oBlogFeed,
                    display: this.oBlogDisplay,
                    styles: [
                        this.oBlogStyle.feed_title,
                        this.oBlogStyle.blog_post_title,
                        this.oBlogStyle.date_and_time,
                        this.oBlogStyle.post_description,
                        this.oBlogStyle.read_more,
                    ],
                }).then(function (response) {
                        if (oCurrentObj.bDisplayPreview === false) {
                            oCurrentObj.enableDisplayStyleTabs();
                            oAlerts.saveFeedSettings();
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            } else {
                oAlerts.requiredField();
            }
        },

        /**
         * Request for saving the blog settings
         */
        getBlogSettings () {
            axios.get('/api/admin/feeds/settings/' + this.iBlogFeedNo).
            then(oResponse => {
                let oData = oResponse.data.data;
                this.oBlogFeedDefault = oData.feed;
                this.oBlogDisplayDefault = oData.feed_display_setting;
            })
            .catch(function (error) {
                console.log(error);
            });
        },

        /**
         * Checks value before unloading the page.
         */
        setBeforeUnload () {
            let oCurrentObj = this;
            window.onbeforeunload = function() {
                return true;
            };
        }
    }
}
</script>


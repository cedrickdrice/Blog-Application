<template>
    <!-- Display Settings -->
    <section id="settings-display-content" class="settings-content__content settings-content__content--hidden">
        <div class="settings-content__content-flex-cont">
            <div class="title-tooltip title-tooltip--with-refresh">
                <div class="title-tooltip__text">Feed Display Settings</div>
                <div class="tooltip__icon"><a href="#none">?</a></div>
            </div>
            <div class="feed-button feed-button--reset-setting feed-button--reset-display-setting">Reset Settings</div>
        </div>
        <table border="0" cellpadding="0" cellspacing="0" class="blog-settings-options" aria-label="Settings Table">
            <tr>
                <td scope="col">Post Title Limit</td>
                <td scope="col">
                    <div class="quantity">
                        <input ref="post_limit_count"
                               @change="getEventDispatch($event, 'post_limit_count', 'display')"
                               @mouseout="getEventDispatch($event, 'post_limit_count', 'display')"
                               @blur="getEventDispatch($event, 'post_limit_count', 'display')"
                               type="number" min="1" :max="blogDisplayDefault.post_limit_count" step="1" :value="blogDisplayDefault.post_limit_count" class="equipCatValidation">
                    </div>
                    <span class="blog-settings-options__span">Characters</span>
                </td>
            </tr>
            <tr>
                <td scope="col">Post Description Limit</td>
                <td scope="col">
                    <div class="quantity">
                        <input ref="post_description_count"
                               @change="getEventDispatch($event, 'post_description_count', 'display')"
                               @mouseout="getEventDispatch($event, 'post_description_count', 'display')"
                               @blur="getEventDispatch($event, 'post_description_count', 'display')"
                               id="post-desc-input" type="number" min="1" :max="blogDisplayDefault.post_description_count" step="1" :value="blogDisplayDefault.post_description_count" class="equipCatValidation">
                    </div>
                    <span class="blog-settings-options__span">Characters</span>
                </td>
            </tr>
            <tr>
                <td scope="col">Posts per page</td>
                <td scope="col">
                    <div class="quantity">
                        <input ref="post_per_page"
                               @change="getEventDispatch($event, 'post_per_page', 'display')"
                               @mouseout="getEventDispatch($event, 'post_per_page', 'display')"
                               @blur="getEventDispatch($event, 'post_per_page', 'display')"
                               id="post-per-page-input" type="number" min="1" max="2000" step="1" :value="blogDisplayDefault.post_per_page" class="equipCatValidation">
                    </div>
                </td>
            </tr>
            <tr>
                <td scope="col">Thumbnails</td>
                <td scope="col">
                    <div class="mSelect blog-settings-options__thumb">
                        <div class="value">
                            <span>Enabled </span>
                        </div>
                        <button type="button" class="cover eSelect">Enabled</button>
                        <div ref="show_thumbnail" class="dropdown">
                            <ul @click="getEventDispatch($event, 'show_thumbnail', 'display', 'value')" class="option">
                                <li class="selected"><a value="true">Enabled</a></li>
                                <li><a value="false">Disabled</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="img-file-wrapper">
                        <p class="upload-file">
                            <label for="imgUpload">upload</label>
                        </p>
                        <input ref="thumbnail_filepath" @change="setImageSrc($event, 'thumbnail_filepath', 'display', 'src')" type="file" name="imgUpload" id="imgUpload" style="display: none;" accept="image/png, image/jpeg">
                    </div>
                    <span class="upload-file-text">filename...png</span>
                </td>
            </tr>
            <tr>
                <td scope="col">Layout</td>
                <td scope="col">
                    <div ref="layout_no" class="blog-settings-options__radio">
                        <div class="blog-settings-options__radio-flex-cont">
                            <!-- List option -->
                            <div class="blog-settings-options__single-option">
                                <div>
                                    <input @click="getEventDispatch($event, 'layout_no', 'display', 'value')"  type="radio" value="1" name="blog-layout-options" id="list-layout-option">
                                    <label for="list-layout-option">List</label>
                                </div>
                                <img class="blog-settings-options__layout-preview" src="/images/layout-list-icon.svg" alt="List Layout preview">
                            </div>
                            <!-- Grid option -->
                            <div class="blog-settings-options__single-option">
                                <div>
                                    <input @click="getEventDispatch($event, 'layout_no', 'display', 'value')"  type="radio" value="2" name="blog-layout-options" id="grid-layout-option">
                                    <label for="grid-layout-option">Grid</label>
                                </div>
                                <img class="blog-settings-options__layout-preview" src="/images/layout-grid-icon.svg" alt="Grid Layout preview">
                            </div>

                        </div>
                        <!-- Hidden for future improvement-->
                        <div class="blog-settings-options__radio-flex-cont" style="display: none;">
                            <!-- Carousel option -->
                            <div class="blog-settings-options__single-option">
                                <input @click="getEventDispatch($event, 'layout_no', 'display', 'value')"  type="radio" value="2" name="blog-layout-options" id="carousel-layout-option">
                                <label for="carousel-layout-option">Carousel</label>
                                <img class="blog-settings-options__layout-preview" src="/images/layout-carousel-icon.svg" alt="Carousel Layout preview">
                            </div>
                            <!-- Timeline option -->
                            <div class="blog-settings-options__single-option">
                                <input type="radio" value="timeline" name="blog-layout-options" id="timeline-layout-option">
                                <label for="timeline-layout-option">Timeline</label>
                                <img class="blog-settings-options__layout-preview" src="/images/layout-timeline-icon.svg" alt="Carousel Layout preview">
                            </div>
                        </div>
                        <!-- Hidden for future improvement-->
                        <div class="blog-settings-options__radio-flex-cont" style="display: none;">
                            <!-- Small widget option -->
                            <div class="blog-settings-options__single-option">
                                <div>
                                    <input type="radio" value="widget" name="blog-layout-options" id="widget-layout-option">
                                    <label for="widget-layout-option">Small Widget</label>
                                </div>
                                <img class="blog-settings-options__layout-preview" src="/images/layout-widget-icon.svg" alt="List Layout preview">
                            </div>
                            <!-- Slider option -->
                            <div class="blog-settings-options__single-option">
                                <input type="radio" value="slider" name="blog-layout-options" id="slider-layout-option">
                                <label for="slider-layout-option">Slider</label>
                                <img class="blog-settings-options__layout-preview" src="/images/layout-slider-icon.svg" alt="Carousel Layout preview">
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
        <div class="save-container">
            <div @click="inheritSave" class="feed-button feed-button--save">Save Settings</div>
        </div>
    </section>
    <!-- // Display Settings -->
</template>

<script>

export default {
    data() {
        return {
            oBlogDisplay : {},
            sComponentRef: 'oBlogDisplayRef'
        }
    },
    mounted() {
        this.oBlogDisplay = this.blogDisplayDefault;
        this.setInitialData();
    },
    props: ['inheritSave', 'blogDisplayDefault', 'getInputValue', 'blogFeedData', 'blogDisplayData', 'getImageObject', 'setInputInitialData'],
    methods: {
        setInitialData () {
            let aInputs = [
                {
                    reference : 'thumbnail_filepath',
                    type : 'file',
                    value : this.blogDisplayDefault.thumbnail_filepath
                },
                {
                    reference : 'show_thumbnail',
                    type : 'dropdown',
                    value : this.blogDisplayDefault.show_thumbnail
                },
                {
                    reference : 'layout_no',
                    type : 'radio',
                    value : this.blogDisplayDefault.layout_no
                },
            ];
            this.setInputInitialData(aInputs, this.sComponentRef);
        },

        /**
         * Get the dispatched event and execute preview display
         * @param oEvent
         * @param sObj
         * @param sModule
         * @param sAttr
         */
        getEventDispatch(oEvent, sObj, sModule, sAttr) {
            this.getInputValue(oEvent, sObj, sModule, sAttr);
            this.setPreviewDisplay();
        },

        /**
         * Set the image src for fetching
         * @param oEvent
         * @param sObj
         * @param sModule
         * @param sAttr
         */
        setImageSrc(oEvent, sObj, sModule, sAttr) {
            let oCurrent = this;
            this.getImageObject(oEvent).then(dataURL => {
                oEvent.target.setAttribute('src', dataURL);
                oCurrent.getEventDispatch(oEvent, sObj, sModule, sAttr);
            });
        },

        /**
         * Set the live preview of the data inputs from display form.
         */
        setPreviewDisplay() {
            const oBLogDisplay = this.blogDisplayData;
            const oPostTitle = document.querySelectorAll('.settings-preview__post-title');
            const oPostDesc = document.querySelectorAll('.settings-preview__content');

            // Post title limit ==========================
            const iPostTitleLimitValue = oBLogDisplay.post_limit_count;
            // store the text and limit its string if a user adjusted the post title limit
            const sPostTitleValue = 'This is the Blog Post Title';
            const sLimitTitle = sPostTitleValue.substring(0, iPostTitleLimitValue) + '...';

            oPostTitle.forEach(function(oItem) {
                oItem.innerHTML = sLimitTitle;
            })

            // Post Description limit ==========================
            const iPostDescLimitValue = oBLogDisplay.post_description_count;
            const sPostDescValue = 'Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum';
            const sLimitDesc = sPostDescValue.substring(0, iPostDescLimitValue) + '...';
            oPostDesc.forEach(function(oItem) {
                oItem.innerHTML = sLimitDesc;
            })

            // Thumbnail dropdown value ==========================
            const oPostThumbnails = document.querySelectorAll('.setting-preview__thumbnail');
            const oPostContainer = document.querySelector('.settings-preview__container');

            if (oBLogDisplay.show_thumbnail === false ) {
                oPostThumbnails.forEach(function(item) {
                    item.setAttribute('style', 'display:none !important');
                })
            } else if(oBLogDisplay.show_thumbnail === true) {
                oPostThumbnails.forEach(function(item) {
                    if (oPostContainer.classList.contains('settings-preview__container--layout-slider')) {
                        item.setAttribute('style', 'display:block');
                    }
                    else if (!item.classList.contains('setting-preview__thumbnail--slider-hidden')) {
                        item.setAttribute('style', 'display:block !important');
                    }
                })
            }

            // Layout ==========================
            const oGridLayout = 'settings-preview__container--layout-grid';
            const allPost = document.querySelectorAll('.settings-preview__items');
            if ( parseInt(oBLogDisplay.layout_no) === 1) {
                oPostContainer.classList.remove(oGridLayout);
                allPost.forEach(function(item) {
                    item.setAttribute('style', 'width:auto');
                })
            } else if (parseInt(oBLogDisplay.layout_no) === 2) {
                oPostContainer.classList.add(oGridLayout);
            }
        }
    }
}
</script>


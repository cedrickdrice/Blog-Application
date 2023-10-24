<template>
    <!-- Style settings -->
    <section id="settings-style-content" class="settings-content__content settings-content__content--hidden">
        <div class="settings-content__content-flex-cont">
            <div class="title-tooltip title-tooltip--with-refresh">
                <div class="title-tooltip__text">Feed Style Settings</div>
                <div class="tooltip__icon"><a href="#none">?</a></div>
            </div>
            <div class="feed-button feed-button--reset-setting feed-button--reset-style-setting">Reset Settings</div>
        </div>
        <table border="0" cellpadding="0" cellspacing="0" class="blog-settings-options blog-settings-options--style" aria-label="Settings Table">
            <tr class="blog-settings-options__heading">
                <td scope="col"></td>
                <td scope="col">Style</td>
                <td scope="col">Display on Page</td>
            </tr>
            <tr v-for="aStyleTemplate in oBlogStyleTemplate " :key="aStyleTemplate.row_class" :class="aStyleTemplate.row_class">
                <td scope="col">{{ aStyleTemplate.row_title }}</td>
                <td scope="col">
                    <div class="blog-settings-options__flex">
                        <div :class="'mSelect ' +  aStyleTemplate.font_class">
                            <div class="value">
                                <span>Default </span>
                            </div>
                            <button type="button" class="cover eSelect">Default</button>
                            <div class="dropdown">
                                <ul @click="getEventDispatch($event, aStyleTemplate.font_object, 'style', 'value')" class="option">
                                    <li class="selected"><a :value="blogStyleDefault[aStyleTemplate.model_object].font_type">Default</a></li>
                                    <li><a value="Arial">Arial</a></li>
                                    <li><a value="Dotum">Dotum</a></li>
                                    <li><a value="Calibri">Calibri</a></li>
                                </ul>
                            </div>
                        </div>
                        <div :class="'mSelect ' + aStyleTemplate.font_size_class">
                            <div class="value">
                                <span>Default </span>
                            </div>
                            <button type="button" class="cover eSelect">Default</button>
                            <div ref="font_size_1" class="dropdown">
                                <ul @click="getEventDispatch($event, aStyleTemplate.font_size_object, 'style', 'value')" class="option">
                                    <li class="selected"><a :value="blogStyleDefault[aStyleTemplate.model_object].font_size">Default</a></li>
                                    <li><a value="10">10</a></li>
                                    <li><a value="11">11</a></li>
                                    <li><a value="12">12</a></li>
                                    <li><a value="13">13</a></li>
                                    <li><a value="14">14</a></li>
                                    <li><a value="15">15</a></li>
                                    <li><a value="16">16</a></li>
                                    <li><a value="17">17</a></li>
                                    <li><a value="18">18</a></li>
                                    <li><a value="19">19</a></li>
                                    <li><a value="20">20</a></li>
                                    <li><a value="24">24</a></li>
                                    <li><a value="32">32</a></li>
                                    <li><a value="36">36</a></li>
                                    <li><a value="40">40</a></li>
                                    <li><a value="48">48</a></li>
                                    <li><a value="64">64</a></li>
                                    <li><a value="72">72</a></li>
                                </ul>
                            </div>
                        </div>
                        <!-- Color Picker -->
                        <div :class="aStyleTemplate.font_color_class"></div>
                        <input @change="getEventDispatch($event, aStyleTemplate.font_color_object, 'style')" :id="aStyleTemplate.font_color_input_id" type="text" style="display:none;">
                    </div>
                </td>
                <td scope="col">
                    <label class="switchB">
                        <input @click="getEventDispatch($event, aStyleTemplate.display_object, 'style')" type="checkbox" checked="">
                        <span class="slider toggle-subtle--styleB switchB--table round big"></span>
                    </label>
                </td>
            </tr>
        </table>-
        <div class="save-container">
            <div @click="inheritSave" class="feed-button feed-button--save">Save Settings</div>
        </div>
    </section>
    <!-- // Style settings -->
</template>

<script>

export default {
    data() {
        return {
            oBlogStyle: {},
            oBlogStyleTemplate: [
                {
                    row_class : 'blog-settings-options__feed-title-row',
                    row_title : 'Feed Title',
                    font_class : 'blog-settings-options__choose-font-feed-title',
                    font_size_class : 'blog-settings-options__choose-font-size-feed-title',
                    font_color_class : 'color-picker--feed-title',
                    font_color_input_id : 'feed_title_color',
                    font_object : 'feed_title, font_type',
                    font_size_object : 'feed_title, font_size',
                    font_color_object : 'feed_title, font_color',
                    display_object : 'feed_title, show_description',
                    model_object : 'feed_title'
                },
                {
                    row_class : 'blog-settings-options__post-title-row',
                    row_title : 'Blog Post Title',
                    font_class : 'blog-settings-options__choose-font-post-title',
                    font_size_class : 'blog-settings-options__choose-font-size-post-title',
                    font_color_class : 'color-picker--post-title',
                    font_color_input_id : 'blog_post_title_color',
                    font_object : 'blog_post_title, font_type',
                    font_size_object : 'blog_post_title, font_size',
                    font_color_object : 'blog_post_title, font_color',
                    display_object : 'blog_post_title, show_description',
                    model_object : 'blog_post_title'
                },
                {
                    row_class : 'blog-settings-options__date-row',
                    row_title : 'Date and Time',
                    font_class : 'blog-settings-options__choose-font-date',
                    font_size_class : 'blog-settings-options__choose-font-size-date',
                    font_color_class : 'color-picker--date',
                    font_color_input_id : 'date_and_time_color',
                    font_object : 'date_and_time, font_type',
                    font_size_object : 'date_and_time, font_size',
                    font_color_object : 'date_and_time, font_color',
                    display_object : 'date_and_time, show_description',
                    model_object : 'date_and_time'
                },
                {
                    row_class : 'blog-settings-options__post-desc-row',
                    row_title : 'Post Description',
                    font_class : 'blog-settings-options__choose-font-post-desc',
                    font_size_class : 'blog-settings-options__choose-font-size-post-desc',
                    font_color_class : 'color-picker--post-desc',
                    font_color_input_id : 'post_description_color',
                    font_object : 'post_description, font_type',
                    font_size_object : 'post_description, font_size',
                    font_color_object : 'post_description, font_color',
                    display_object : 'post_description, show_description',
                    model_object : 'post_description'
                },
                {
                    row_class : 'blog-settings-options__readmore-row',
                    row_title : 'Read More',
                    font_class : 'blog-settings-options__choose-font-readmore',
                    font_size_class : 'blog-settings-options__choose-font-size-readmore',
                    font_color_class : 'color-picker--readmore',
                    font_color_input_id : 'read_more_color',
                    font_object : 'read_more, font_type',
                    font_size_object : 'read_more, font_size',
                    font_color_object : 'read_more, font_color',
                    display_object : 'read_more, show_description',
                    model_object : 'read_more'
                }
            ]
        }
    },
    mounted() {
        this.oBlogStyle = this.blogStyleDefault;
        this.initializePickr();
    },
    props: ['inheritSave', 'blogStyleDefault', 'blogStyleData', 'getInputValue'],
    methods: {

        /**
         * Get the dispatched event and execute preview style
         * @param oEvent
         * @param sObj
         * @param sModule
         * @param sAttr
         */
        getEventDispatch(oEvent, sObj, sModule, sAttr) {
            this.getInputValue(oEvent, sObj, sModule, sAttr);
            this.setPreviewStyle();
        },

        /**
         * Initialize Color picker using Pickr library
         */
        initializePickr() {
            var oCurrentObj = this;
            var oBlogStyleDefault = this.blogStyleDefault;
            const feedTitleColorPickr = Pickr.create({
                el: '.color-picker--feed-title',
                theme: 'nano',
                default: oBlogStyleDefault.feed_title.font_color,
                appClass: 'feed-title-preview',
                components: {
                    preview: true,
                    opacity: true,
                    hue: true,
                    interaction: {
                        hex: true,
                        rgba: true,
                        hsla: true,
                        hsva: true,
                        cmyk: true,
                        input: true,
                    }
                }
            });
            const postTitleColorPickr = Pickr.create({
                el: '.color-picker--post-title',
                theme: 'nano',
                default: oBlogStyleDefault.blog_post_title.font_color,
                appClass: 'post-title-preview',
                components: {
                    preview: true,
                    opacity: true,
                    hue: true,
                    interaction: {
                        hex: true,
                        rgba: true,
                        hsla: true,
                        hsva: true,
                        cmyk: true,
                        input: true,
                    }
                }
            });
            const dateColorPickr = Pickr.create({
                el: '.color-picker--date',
                theme: 'nano',
                default: oBlogStyleDefault.date_and_time.font_color,
                appClass: 'date-preview',
                components: {
                    preview: true,
                    opacity: true,
                    hue: true,
                    interaction: {
                        hex: true,
                        rgba: true,
                        hsla: true,
                        hsva: true,
                        cmyk: true,
                        input: true,
                    }
                }
            });
            const postDescColorPickr = Pickr.create({
                el: '.color-picker--post-desc',
                theme: 'nano',
                default: oBlogStyleDefault.post_description.font_color,
                appClass: 'post-desc-preview',
                components: {
                    preview: true,
                    opacity: true,
                    hue: true,
                    interaction: {
                        hex: true,
                        rgba: true,
                        hsla: true,
                        hsva: true,
                        cmyk: true,
                        input: true,
                    }
                }
            });
            const readmoreColorPickr = Pickr.create({
                el: '.color-picker--readmore',
                theme: 'nano',
                default: oBlogStyleDefault.read_more.font_color,
                appClass: 'readmore-preview',
                components: {
                    preview: true,
                    opacity: true,
                    hue: true,
                    interaction: {
                        hex: true,
                        rgba: true,
                        hsla: true,
                        hsva: true,
                        cmyk: true,
                        input: true,
                    }
                }
            });
            feedTitleColorPickr.on('change', (color) => {
                oCurrentObj.getColorOnChange(color, 'feed_title_color', 'feed-title-preview');
            });
            postTitleColorPickr.on('change', (color) => {
                oCurrentObj.getColorOnChange(color, 'blog_post_title_color', 'post-title-preview');
            });
            dateColorPickr.on('change', (color) => {
                oCurrentObj.getColorOnChange(color, 'date_and_time_color', 'date-preview');
            });
            postDescColorPickr.on('change', (color) => {
                oCurrentObj.getColorOnChange(color, 'post_description_color', 'post-desc-preview');
            });
            readmoreColorPickr.on('change', (color) => {
                oCurrentObj.getColorOnChange(color, 'read_more_color', 'readmore-preview');
            });
        },

        /**
         * Trigger event after picking color from the element
         * @param oColor
         * @param sInput
         * @param sBtnClass
         */
        getColorOnChange(oColor, sInput, sBtnClass) {
            let hexColorPostTitle = oColor.toHEXA().toString();
            let oEvent = new Event("change");
            let oInput = document.querySelector('#' + sInput);
            let oPickrSaveBtn = document.querySelector('.' + sBtnClass + ' input.pcr-save');
            oInput.value = hexColorPostTitle;
            oInput.dispatchEvent(oEvent);
            oPickrSaveBtn.click();
            this.setPreviewStyle();
        },
        /**
         * Loop the preview elements to change styles.
         * @param oElement
         * @param sFontFamily
         * @param sFontSize
         * @param sColor
         * @param oDisplayRow
         */
        loopPreviewElement(oElement ,sFontFamily, sFontSize, sColor, oDisplayRow) {
            oElement.forEach(function(oItem) {
                // Font
                if (sFontFamily === "Default") {
                    oItem.style.fontFamily =  'inherit';
                } else if (sFontFamily !== undefined && sFontFamily !== ''){
                    oItem.style.fontFamily =  sFontFamily + ', sans-serif';
                }
                // Size
                if (sFontSize !== undefined && sFontSize !== '') {
                    oItem.style.fontSize = sFontSize + 'px';
                }
                // Color
                if( sColor !== undefined && sColor !== '') {
                    oItem.style.color = sColor;
                }

                // Display
                if ( !oDisplayRow.checked === true ) {
                    oItem.style.display = 'none';
                } else {
                    oItem.style.display = 'block';
                }
            });
        },

        /**
         * Set the preview of data input from style form.
         */
        setPreviewStyle() {
            const oBlogStyle = this.blogStyleData;
            const oFeedTitle = document.querySelector('.settings-preview__feed-title');
            const oPostTitle = document.querySelectorAll('.settings-preview__post-title');
            const oDateAndTime = document.querySelectorAll('.settings-preview__date');
            const oPostDesc = document.querySelectorAll('.settings-preview__content');
            const oReadmore = document.querySelectorAll('.settings-preview__read-more');

            const oPostTitleRow = document.querySelector('.blog-settings-options__post-title-row .switchB input');
            const oDateRow = document.querySelector('.blog-settings-options__date-row .switchB input');
            const oPostDescRow = document.querySelector('.blog-settings-options__post-desc-row .switchB input');
            const oReadMoreRow = document.querySelector('.blog-settings-options__readmore-row .switchB input');

            // FEED TITLE ==========
            // Font
            if (oBlogStyle.feed_title.font_type === 'Default') {
                oFeedTitle.style.fontFamily = 'inherit';
            } else {
                oFeedTitle.style.fontFamily = `${oBlogStyle.feed_title.font_type},sans-serif`;
            }
            // Size
            if (oBlogStyle.feed_title.font_size !== undefined && oBlogStyle.feed_title.font_size !== '') {
                oFeedTitle.style.fontSize = `${oBlogStyle.feed_title.font_size}px`
            }
            // Color
            if( oBlogStyle.feed_title.font_color !== undefined && oBlogStyle.feed_title.font_color !== '' ) {
                oFeedTitle.style.color = oBlogStyle.feed_title.font_color;
            }
            // Display
            if ( oBlogStyle.feed_title.show_description === false ) {
                oFeedTitle.style.display = 'none';
            } else {
                oFeedTitle.style.display = 'block';
            }
            // POST TITLE =========
            this.loopPreviewElement(oPostTitle, oBlogStyle.blog_post_title.font_type, oBlogStyle.blog_post_title.font_size,
                oBlogStyle.blog_post_title.font_color, oPostTitleRow);
            // DATE =========
            this.loopPreviewElement(oDateAndTime, oBlogStyle.date_and_time.font_type, oBlogStyle.date_and_time.font_size,
                oBlogStyle.date_and_time.font_color, oDateRow);
            // POST DESC =========
            this.loopPreviewElement(oPostDesc, oBlogStyle.post_description.font_type, oBlogStyle.post_description.font_size,
                oBlogStyle.post_description.font_color, oPostDescRow);
            // READ MORE =========
            this.loopPreviewElement(oReadmore, oBlogStyle.read_more.font_type, oBlogStyle.read_more.font_size,
                oBlogStyle.read_more.font_color, oReadMoreRow);
        }
    }
}
</script>

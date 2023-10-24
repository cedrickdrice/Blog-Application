<template>
    <!-- Preview -->
    <div class="settings-border">
        <div class="settings-preview">
            <div class="settings-preview__feed-title">{{ blogFeedData.feed_title }}</div>
            <div class="settings-preview__container">
                <VueSlickCarousel ref="slick" v-bind="oSlickSettings" v-if="blogDisplayData.post_per_page > 0 && bEnableSlick === true" :key="iCarouselKey" >
                    <div v-for="(item, index) in oBlogFeedData" class="settings-preview__items" :key="item.title" v-if="item.index < blogDisplayData.post_per_page ">
                        <div class="settings-preview__flex-cont">
                            <img src="/images/preview-icon.svg" class="setting-preview__thumbnail" alt="Blog preview thumbnail">
                            <div class="settings-preview__right-content">
                                <div class="settings-preview__date">Fri, 22 Oct 2021</div>
                                <div class="settinsg-preview__breadcrumbs">
                                    <div class="settings-preview__source">
                                        NAVER BLOG
                                    </div>
                                    <span class="settings-preview__post-title">This is the Blog Post Title</span>
                                </div>
                                <div class="settings-preview__content">
                                    Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum....
                                </div>
                                <a href="#none" class="settings-preview__read-more">Read more ></a>
                            </div>
                            <img src="/images/preview-icon.svg" class="setting-preview__thumbnail setting-preview__thumbnail--slider-hidden" style="display:none" alt="Blog preview thumbnail">
                        </div>
                    </div>
                </VueSlickCarousel>
                <div v-else-if="this.blogFeedNo !== undefined" v-for="(item, index) in oBlogFeedData" class="settings-preview__items" :key="item.blog_title">
                    <div v-if="index < blogDisplayData.post_per_page" class="settings-preview__flex-cont">
                        <img src="/images/preview-icon.svg" class="setting-preview__thumbnail" alt="Blog preview thumbnail">
                        <div class="settings-preview__right-content">
                            <div class="settings-preview__date"> {{ item.blog_date }}</div>
                            <div class="settinsg-preview__breadcrumbs">
                                <div class="settings-preview__source">
                                    NAVER BLOG
                                </div>
                                <span class="settings-preview__post-title"> {{ item.blog_title }} </span>
                            </div>
                            <div class="settings-preview__content">
                                {{ item.blog_description }}
                            </div>
                            <a :href="item.blog_link" target="_blank" class="settings-preview__read-more">Read more ></a>
                        </div>
                        <img src="/images/preview-icon.svg" class="setting-preview__thumbnail setting-preview__thumbnail--slider-hidden" style="display:none" alt="Blog preview thumbnail">
                    </div>
                </div>
                <div v-else v-for="oItems in (typeof blogDisplayData.post_per_page === 'string') ? parseInt(blogDisplayData.post_per_page) : blogDisplayData.post_per_page" class="settings-preview__items">
                    <div class="settings-preview__flex-cont">
                        <img src="/images/preview-icon.svg" class="setting-preview__thumbnail" alt="Blog preview thumbnail">
                        <div class="settings-preview__right-content">
                            <div class="settings-preview__date">Fri, 22 Oct 2021</div>
                            <div class="settinsg-preview__breadcrumbs">
                                <div class="settings-preview__source">
                                    NAVER BLOG
                                </div>
                                <span class="settings-preview__post-title">This is the Blog Post Title</span>
                            </div>
                            <div class="settings-preview__content">
                                Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum....
                            </div>
                            <a href="#none" class="settings-preview__read-more">Read more ></a>
                        </div>
                        <img src="/images/preview-icon.svg" class="setting-preview__thumbnail setting-preview__thumbnail--slider-hidden" style="display:none" alt="Blog preview thumbnail">
                    </div>
                </div>
            </div>

            <div class="mPaginate">
                <a href="#none" class="prev">이전 10페이지</a>
                <ol>
                    <li><a href="#none">1</a></li>
                    <li><a href="#none">2</a></li>
                    <li><strong title="current">3</strong></li>
                    <li><a href="#none">4</a></li>
                    <li><a href="#none">5</a></li>
                    <li><a href="#none">6</a></li>
                    <li><span>...</span></li>
                </ol>
                <a href="#none" class="next">다음 10페이지</a>
            </div>
        </div>
    </div>
    <!-- // Preview -->
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel';
import 'vue-slick-carousel/dist/vue-slick-carousel.css';
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css';

export default {
    props: ['blogDisplayData', 'blogFeedData', 'blogFeedNo'],
    components: { VueSlickCarousel },
    data () {
        return {
            iCarouselKey : 1,
            oBlogFeedData : [],
            bEnableSlick : false,
            oSlickSettings : {
                infinite: true,
                slidesToShow : 2,
                slidesToScroll : 1,
                vertical : false,
                verticalSwiping : false,
            }
        }
    },
    mounted() {
        this.getRssFeed();
    },
    methods : {
        /**
         * Reinitialize slick settings
         * For future improvement on layouts that needs to use slick carousel
         * @param oData
         */
        reinitializeLayout(oData) {
            if (parseInt(oData.layout_no) === 1 || parseInt(oData.layout_no) === 2 ) {
                this.bEnableSlick = false;
                this.oSlickSettings = {};
            }
            // Refer to below if using slick carousel
            // else {
            //     this.bEnableSlick = true;
            //     this.oSlickSettings = {
            //         infinite: true,
            //         slidesToShow : 2,
            //         slidesToScroll : 2,
            //         vertical : false,
            //         verticalSwiping : false,
            //     }
            //     this.iCarouselKey += 1; // Force reinitialize slick component
            // }
        },
        /**
         * Get Blog Providers Feed
         */
        getRssFeed() {
            axios.get('/api/admin/feeds/settings/rss/' + this.blogFeedNo).
            then(oResponse => {
                let aData = oResponse.data.data.feed;
                aData.forEach((aValue) => {
                    this.oBlogFeedData.push({
                        blog_title : aValue.title,
                        blog_description : aValue.description,
                        blog_date : aValue.date,
                        blog_link : aValue.link
                    });
                });

                console.log( this.oBlogFeedData);
            })
            .catch(function (oError) {
                console.log(oError);
            });
        }
    },

}
</script>

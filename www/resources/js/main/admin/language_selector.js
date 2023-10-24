/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["LanguageSelector"] = factory();
	else
		root["LanguageSelector"] = factory();
})(self, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./web_app-language-selector-base/src/json/languages.json":
/*!***************************************************************!*\
  !*** ./web_app-language-selector-base/src/json/languages.json ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
eval("module.exports = JSON.parse(\"[{\\\"name\\\":\\\"Afrikaans (Namibië)\\\",\\\"code\\\":\\\"af_NA\\\",\\\"flag\\\":\\\"fflag fflag-NA ff-lg\\\"},{\\\"name\\\":\\\"Afrikaans (Suid-Afrika)\\\",\\\"code\\\":\\\"af_ZA\\\",\\\"flag\\\":\\\"fflag fflag-ZA ff-lg\\\"},{\\\"name\\\":\\\"Afrikaans\\\",\\\"code\\\":\\\"af\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Akan (Gaana)\\\",\\\"code\\\":\\\"ak_GH\\\",\\\"flag\\\":\\\"fflag fflag-GH ff-lg\\\"},{\\\"name\\\":\\\"Akan\\\",\\\"code\\\":\\\"ak\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"shqip (Shqipëri)\\\",\\\"code\\\":\\\"sq_AL\\\",\\\"flag\\\":\\\"fflag fflag-AL ff-lg\\\"},{\\\"name\\\":\\\"shqip\\\",\\\"code\\\":\\\"sq\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"አማርኛ (ኢትዮጵያ)\\\",\\\"code\\\":\\\"am_ET\\\",\\\"flag\\\":\\\"fflag fflag-ET ff-lg\\\"},{\\\"name\\\":\\\"አማርኛ\\\",\\\"code\\\":\\\"am\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"العربية (الجزائر)\\\",\\\"code\\\":\\\"ar_DZ\\\",\\\"flag\\\":\\\"fflag fflag-DZ ff-lg\\\"},{\\\"name\\\":\\\"العربية (البحرين)\\\",\\\"code\\\":\\\"ar_BH\\\",\\\"flag\\\":\\\"fflag fflag-BH ff-lg\\\"},{\\\"name\\\":\\\"العربية (مصر)\\\",\\\"code\\\":\\\"ar_EG\\\",\\\"flag\\\":\\\"fflag fflag-EG ff-lg\\\"},{\\\"name\\\":\\\"العربية (العراق)\\\",\\\"code\\\":\\\"ar_IQ\\\",\\\"flag\\\":\\\"fflag fflag-IQ ff-lg\\\"},{\\\"name\\\":\\\"العربية (الأردن)\\\",\\\"code\\\":\\\"ar_JO\\\",\\\"flag\\\":\\\"fflag fflag-JO ff-lg\\\"},{\\\"name\\\":\\\"العربية (الكويت)\\\",\\\"code\\\":\\\"ar_KW\\\",\\\"flag\\\":\\\"fflag fflag-KW ff-lg\\\"},{\\\"name\\\":\\\"العربية (لبنان)\\\",\\\"code\\\":\\\"ar_LB\\\",\\\"flag\\\":\\\"fflag fflag-LB ff-lg\\\"},{\\\"name\\\":\\\"العربية (ليبيا)\\\",\\\"code\\\":\\\"ar_LY\\\",\\\"flag\\\":\\\"fflag fflag-LY ff-lg\\\"},{\\\"name\\\":\\\"العربية (المغرب)\\\",\\\"code\\\":\\\"ar_MA\\\",\\\"flag\\\":\\\"fflag fflag-MA ff-lg\\\"},{\\\"name\\\":\\\"العربية (عُمان)\\\",\\\"code\\\":\\\"ar_OM\\\",\\\"flag\\\":\\\"fflag fflag-OM ff-lg\\\"},{\\\"name\\\":\\\"العربية (قطر)\\\",\\\"code\\\":\\\"ar_QA\\\",\\\"flag\\\":\\\"fflag fflag-QA ff-lg\\\"},{\\\"name\\\":\\\"العربية (المملكة العربية السعودية)\\\",\\\"code\\\":\\\"ar_SA\\\",\\\"flag\\\":\\\"fflag fflag-SA ff-lg\\\"},{\\\"name\\\":\\\"العربية (السودان)\\\",\\\"code\\\":\\\"ar_SD\\\",\\\"flag\\\":\\\"fflag fflag-SD ff-lg\\\"},{\\\"name\\\":\\\"العربية (سوريا)\\\",\\\"code\\\":\\\"ar_SY\\\",\\\"flag\\\":\\\"fflag fflag-SY ff-lg\\\"},{\\\"name\\\":\\\"العربية (تونس)\\\",\\\"code\\\":\\\"ar_TN\\\",\\\"flag\\\":\\\"fflag fflag-TN ff-lg\\\"},{\\\"name\\\":\\\"العربية (الإمارات العربية المتحدة)\\\",\\\"code\\\":\\\"ar_AE\\\",\\\"flag\\\":\\\"fflag fflag-AE ff-lg\\\"},{\\\"name\\\":\\\"العربية (اليمن)\\\",\\\"code\\\":\\\"ar_YE\\\",\\\"flag\\\":\\\"fflag fflag-YE ff-lg\\\"},{\\\"name\\\":\\\"العربية\\\",\\\"code\\\":\\\"ar\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"հայերեն (Հայաստան)\\\",\\\"code\\\":\\\"hy_AM\\\",\\\"flag\\\":\\\"fflag fflag-AM ff-lg\\\"},{\\\"name\\\":\\\"հայերեն\\\",\\\"code\\\":\\\"hy\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"অসমীয়া (ভাৰত)\\\",\\\"code\\\":\\\"as_IN\\\",\\\"flag\\\":\\\"fflag fflag-IN ff-lg\\\"},{\\\"name\\\":\\\"অসমীয়া\\\",\\\"code\\\":\\\"as\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Kipare (Tadhania)\\\",\\\"code\\\":\\\"asa_TZ\\\",\\\"flag\\\":\\\"fflag fflag-TZ ff-lg\\\"},{\\\"name\\\":\\\"Kipare\\\",\\\"code\\\":\\\"asa\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"азәрбајҹан (Кирил)\\\",\\\"code\\\":\\\"az_Cyrl\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"азәрбајҹан (Кирил, Азәрбајҹан)\\\",\\\"code\\\":\\\"az_Cyrl_AZ\\\",\\\"flag\\\":\\\"fflag fflag-AZ ff-lg\\\"},{\\\"name\\\":\\\"azərbaycan (latın)\\\",\\\"code\\\":\\\"az_Latn\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"azərbaycan (latın, Azərbaycan)\\\",\\\"code\\\":\\\"az_Latn_AZ\\\",\\\"flag\\\":\\\"fflag fflag-AZ ff-lg\\\"},{\\\"name\\\":\\\"azərbaycan\\\",\\\"code\\\":\\\"az\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"bamanakan (Mali)\\\",\\\"code\\\":\\\"bm_ML\\\",\\\"flag\\\":\\\"fflag fflag-ML ff-lg\\\"},{\\\"name\\\":\\\"bamanakan\\\",\\\"code\\\":\\\"bm\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"euskara (Espainia)\\\",\\\"code\\\":\\\"eu_ES\\\",\\\"flag\\\":\\\"fflag fflag-ES ff-lg\\\"},{\\\"name\\\":\\\"euskara\\\",\\\"code\\\":\\\"eu\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"беларуская (Беларусь)\\\",\\\"code\\\":\\\"be_BY\\\",\\\"flag\\\":\\\"fflag fflag-BY ff-lg\\\"},{\\\"name\\\":\\\"беларуская\\\",\\\"code\\\":\\\"be\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Ichibemba (Zambia)\\\",\\\"code\\\":\\\"bem_ZM\\\",\\\"flag\\\":\\\"fflag fflag-ZM ff-lg\\\"},{\\\"name\\\":\\\"Ichibemba\\\",\\\"code\\\":\\\"bem\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Hibena (Hutanzania)\\\",\\\"code\\\":\\\"bez_TZ\\\",\\\"flag\\\":\\\"fflag fflag-TZ ff-lg\\\"},{\\\"name\\\":\\\"Hibena\\\",\\\"code\\\":\\\"bez\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"বাংলা (বাংলাদেশ)\\\",\\\"code\\\":\\\"bn_BD\\\",\\\"flag\\\":\\\"fflag fflag-BD ff-lg\\\"},{\\\"name\\\":\\\"বাংলা (ভারত)\\\",\\\"code\\\":\\\"bn_IN\\\",\\\"flag\\\":\\\"fflag fflag-IN ff-lg\\\"},{\\\"name\\\":\\\"বাংলা\\\",\\\"code\\\":\\\"bn\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"bosanski (Bosna i Hercegovina)\\\",\\\"code\\\":\\\"bs_BA\\\",\\\"flag\\\":\\\"fflag fflag-BA ff-lg\\\"},{\\\"name\\\":\\\"bosanski\\\",\\\"code\\\":\\\"bs\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"български (България)\\\",\\\"code\\\":\\\"bg_BG\\\",\\\"flag\\\":\\\"fflag fflag-BG ff-lg\\\"},{\\\"name\\\":\\\"български\\\",\\\"code\\\":\\\"bg\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"မြန်မာ (မြန်မာ)\\\",\\\"code\\\":\\\"my_MM\\\",\\\"flag\\\":\\\"fflag fflag-MM ff-lg\\\"},{\\\"name\\\":\\\"မြန်မာ\\\",\\\"code\\\":\\\"my\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"粵語 (繁體，中華人民共和國香港特別行政區)\\\",\\\"code\\\":\\\"yue_Hant_HK\\\",\\\"flag\\\":\\\"fflag fflag-HK ff-lg\\\"},{\\\"name\\\":\\\"català (Espanya)\\\",\\\"code\\\":\\\"ca_ES\\\",\\\"flag\\\":\\\"fflag fflag-ES ff-lg\\\"},{\\\"name\\\":\\\"català\\\",\\\"code\\\":\\\"ca\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Tamaziɣt n laṭlaṣ (Latn)\\\",\\\"code\\\":\\\"tzm_Latn\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Tamaziɣt n laṭlaṣ (Latn, Meṛṛuk)\\\",\\\"code\\\":\\\"tzm_Latn_MA\\\",\\\"flag\\\":\\\"fflag fflag-MA ff-lg\\\"},{\\\"name\\\":\\\"Tamaziɣt n laṭlaṣ\\\",\\\"code\\\":\\\"tzm\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"ᏣᎳᎩ (ᏌᏊ ᎢᏳᎾᎵᏍᏔᏅ ᏍᎦᏚᎩ)\\\",\\\"code\\\":\\\"chr_US\\\",\\\"flag\\\":\\\"fflag fflag-US ff-lg\\\"},{\\\"name\\\":\\\"ᏣᎳᎩ\\\",\\\"code\\\":\\\"chr\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Rukiga (Uganda)\\\",\\\"code\\\":\\\"cgg_UG\\\",\\\"flag\\\":\\\"fflag fflag-UG ff-lg\\\"},{\\\"name\\\":\\\"Rukiga\\\",\\\"code\\\":\\\"cgg\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"简体中文\\\",\\\"code\\\":\\\"zh_Hans\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"简体中文（中国）\\\",\\\"code\\\":\\\"zh_Hans_CN\\\",\\\"flag\\\":\\\"fflag fflag-CN ff-lg\\\"},{\\\"name\\\":\\\"简体中文（中国香港特别行政区）\\\",\\\"code\\\":\\\"zh_Hans_HK\\\",\\\"flag\\\":\\\"fflag fflag-HK ff-lg\\\"},{\\\"name\\\":\\\"简体中文（中国澳门特别行政区）\\\",\\\"code\\\":\\\"zh_Hans_MO\\\",\\\"flag\\\":\\\"fflag fflag-MO ff-lg\\\"},{\\\"name\\\":\\\"简体中文（新加坡）\\\",\\\"code\\\":\\\"zh_Hans_SG\\\",\\\"flag\\\":\\\"fflag fflag-SG ff-lg\\\"},{\\\"name\\\":\\\"繁體中文\\\",\\\"code\\\":\\\"zh_Hant\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"繁體中文（中國香港特別行政區）\\\",\\\"code\\\":\\\"zh_Hant_HK\\\",\\\"flag\\\":\\\"fflag fflag-HK ff-lg\\\"},{\\\"name\\\":\\\"繁體中文（中國澳門特別行政區）\\\",\\\"code\\\":\\\"zh_Hant_MO\\\",\\\"flag\\\":\\\"fflag fflag-MO ff-lg\\\"},{\\\"name\\\":\\\"繁體中文（台灣）\\\",\\\"code\\\":\\\"zh_Hant_TW\\\",\\\"flag\\\":\\\"fflag fflag-TW ff-lg\\\"},{\\\"name\\\":\\\"中文\\\",\\\"code\\\":\\\"zh\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"kernewek (Rywvaneth Unys)\\\",\\\"code\\\":\\\"kw_GB\\\",\\\"flag\\\":\\\"fflag fflag-GB ff-lg\\\"},{\\\"name\\\":\\\"kernewek\\\",\\\"code\\\":\\\"kw\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"hrvatski (Hrvatska)\\\",\\\"code\\\":\\\"hr_HR\\\",\\\"flag\\\":\\\"fflag fflag-HR ff-lg\\\"},{\\\"name\\\":\\\"hrvatski\\\",\\\"code\\\":\\\"hr\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"čeština (Česko)\\\",\\\"code\\\":\\\"cs_CZ\\\",\\\"flag\\\":\\\"fflag fflag-CZ ff-lg\\\"},{\\\"name\\\":\\\"čeština\\\",\\\"code\\\":\\\"cs\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"dansk (Danmark)\\\",\\\"code\\\":\\\"da_DK\\\",\\\"flag\\\":\\\"fflag fflag-DK ff-lg\\\"},{\\\"name\\\":\\\"dansk\\\",\\\"code\\\":\\\"da\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Nederlands (België)\\\",\\\"code\\\":\\\"nl_BE\\\",\\\"flag\\\":\\\"fflag fflag-BE ff-lg\\\"},{\\\"name\\\":\\\"Nederlands (Nederland)\\\",\\\"code\\\":\\\"nl_NL\\\",\\\"flag\\\":\\\"fflag fflag-NL ff-lg\\\"},{\\\"name\\\":\\\"Nederlands\\\",\\\"code\\\":\\\"nl\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Kĩembu (Kenya)\\\",\\\"code\\\":\\\"ebu_KE\\\",\\\"flag\\\":\\\"fflag fflag-KE ff-lg\\\"},{\\\"name\\\":\\\"Kĩembu\\\",\\\"code\\\":\\\"ebu\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"English (American Samoa)\\\",\\\"code\\\":\\\"en_AS\\\",\\\"flag\\\":\\\"fflag fflag-AS ff-lg\\\"},{\\\"name\\\":\\\"English (Australia)\\\",\\\"code\\\":\\\"en_AU\\\",\\\"flag\\\":\\\"fflag fflag-AU ff-lg\\\"},{\\\"name\\\":\\\"English (Belgium)\\\",\\\"code\\\":\\\"en_BE\\\",\\\"flag\\\":\\\"fflag fflag-BE ff-lg\\\"},{\\\"name\\\":\\\"English (Belize)\\\",\\\"code\\\":\\\"en_BZ\\\",\\\"flag\\\":\\\"fflag fflag-BZ ff-lg\\\"},{\\\"name\\\":\\\"English (Botswana)\\\",\\\"code\\\":\\\"en_BW\\\",\\\"flag\\\":\\\"fflag fflag-BW ff-lg\\\"},{\\\"name\\\":\\\"English (Canada)\\\",\\\"code\\\":\\\"en_CA\\\",\\\"flag\\\":\\\"fflag fflag-CA ff-lg\\\"},{\\\"name\\\":\\\"English (Guam)\\\",\\\"code\\\":\\\"en_GU\\\",\\\"flag\\\":\\\"fflag fflag-GU ff-lg\\\"},{\\\"name\\\":\\\"English (Hong Kong SAR China)\\\",\\\"code\\\":\\\"en_HK\\\",\\\"flag\\\":\\\"fflag fflag-HK ff-lg\\\"},{\\\"name\\\":\\\"English (India)\\\",\\\"code\\\":\\\"en_IN\\\",\\\"flag\\\":\\\"fflag fflag-IN ff-lg\\\"},{\\\"name\\\":\\\"English (Ireland)\\\",\\\"code\\\":\\\"en_IE\\\",\\\"flag\\\":\\\"fflag fflag-IE ff-lg\\\"},{\\\"name\\\":\\\"English (Israel)\\\",\\\"code\\\":\\\"en_IL\\\",\\\"flag\\\":\\\"fflag fflag-IL ff-lg\\\"},{\\\"name\\\":\\\"English (Jamaica)\\\",\\\"code\\\":\\\"en_JM\\\",\\\"flag\\\":\\\"fflag fflag-JM ff-lg\\\"},{\\\"name\\\":\\\"English (Malta)\\\",\\\"code\\\":\\\"en_MT\\\",\\\"flag\\\":\\\"fflag fflag-MT ff-lg\\\"},{\\\"name\\\":\\\"English (Marshall Islands)\\\",\\\"code\\\":\\\"en_MH\\\",\\\"flag\\\":\\\"fflag fflag-MH ff-lg\\\"},{\\\"name\\\":\\\"English (Mauritius)\\\",\\\"code\\\":\\\"en_MU\\\",\\\"flag\\\":\\\"fflag fflag-MU ff-lg\\\"},{\\\"name\\\":\\\"English (Namibia)\\\",\\\"code\\\":\\\"en_NA\\\",\\\"flag\\\":\\\"fflag fflag-NA ff-lg\\\"},{\\\"name\\\":\\\"English (New Zealand)\\\",\\\"code\\\":\\\"en_NZ\\\",\\\"flag\\\":\\\"fflag fflag-NZ ff-lg\\\"},{\\\"name\\\":\\\"English (Northern Mariana Islands)\\\",\\\"code\\\":\\\"en_MP\\\",\\\"flag\\\":\\\"fflag fflag-MP ff-lg\\\"},{\\\"name\\\":\\\"English (Pakistan)\\\",\\\"code\\\":\\\"en_PK\\\",\\\"flag\\\":\\\"fflag fflag-PK ff-lg\\\"},{\\\"name\\\":\\\"English (Philippines)\\\",\\\"code\\\":\\\"en_PH\\\",\\\"flag\\\":\\\"fflag fflag-PH ff-lg\\\"},{\\\"name\\\":\\\"English (Singapore)\\\",\\\"code\\\":\\\"en_SG\\\",\\\"flag\\\":\\\"fflag fflag-SG ff-lg\\\"},{\\\"name\\\":\\\"English (South Africa)\\\",\\\"code\\\":\\\"en_ZA\\\",\\\"flag\\\":\\\"fflag fflag-ZA ff-lg\\\"},{\\\"name\\\":\\\"English (Trinidad & Tobago)\\\",\\\"code\\\":\\\"en_TT\\\",\\\"flag\\\":\\\"fflag fflag-TT ff-lg\\\"},{\\\"name\\\":\\\"English (U.S. Outlying Islands)\\\",\\\"code\\\":\\\"en_UM\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"English (U.S. Virgin Islands)\\\",\\\"code\\\":\\\"en_VI\\\",\\\"flag\\\":\\\"fflag fflag-VI ff-lg\\\"},{\\\"name\\\":\\\"English (United Kingdom)\\\",\\\"code\\\":\\\"en_GB\\\",\\\"flag\\\":\\\"fflag fflag-GB ff-lg\\\"},{\\\"name\\\":\\\"English (United States)\\\",\\\"code\\\":\\\"en_US\\\",\\\"flag\\\":\\\"fflag fflag-US ff-lg\\\"},{\\\"name\\\":\\\"English (Zimbabwe)\\\",\\\"code\\\":\\\"en_ZW\\\",\\\"flag\\\":\\\"fflag fflag-ZW ff-lg\\\"},{\\\"name\\\":\\\"English\\\",\\\"code\\\":\\\"en\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"esperanto\\\",\\\"code\\\":\\\"eo\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"eesti (Eesti)\\\",\\\"code\\\":\\\"et_EE\\\",\\\"flag\\\":\\\"fflag fflag-EE ff-lg\\\"},{\\\"name\\\":\\\"eesti\\\",\\\"code\\\":\\\"et\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Eʋegbe (Ghana nutome)\\\",\\\"code\\\":\\\"ee_GH\\\",\\\"flag\\\":\\\"fflag fflag-GH ff-lg\\\"},{\\\"name\\\":\\\"Eʋegbe (Togo nutome)\\\",\\\"code\\\":\\\"ee_TG\\\",\\\"flag\\\":\\\"fflag fflag-TG ff-lg\\\"},{\\\"name\\\":\\\"Eʋegbe\\\",\\\"code\\\":\\\"ee\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"føroyskt (Føroyar)\\\",\\\"code\\\":\\\"fo_FO\\\",\\\"flag\\\":\\\"fflag fflag-FO ff-lg\\\"},{\\\"name\\\":\\\"føroyskt\\\",\\\"code\\\":\\\"fo\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Filipino (Pilipinas)\\\",\\\"code\\\":\\\"fil_PH\\\",\\\"flag\\\":\\\"fflag fflag-PH ff-lg\\\"},{\\\"name\\\":\\\"Filipino\\\",\\\"code\\\":\\\"fil\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"suomi (Suomi)\\\",\\\"code\\\":\\\"fi_FI\\\",\\\"flag\\\":\\\"fflag fflag-FI ff-lg\\\"},{\\\"name\\\":\\\"suomi\\\",\\\"code\\\":\\\"fi\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"français (Belgique)\\\",\\\"code\\\":\\\"fr_BE\\\",\\\"flag\\\":\\\"fflag fflag-BE ff-lg\\\"},{\\\"name\\\":\\\"français (Bénin)\\\",\\\"code\\\":\\\"fr_BJ\\\",\\\"flag\\\":\\\"fflag fflag-BJ ff-lg\\\"},{\\\"name\\\":\\\"français (Burkina Faso)\\\",\\\"code\\\":\\\"fr_BF\\\",\\\"flag\\\":\\\"fflag fflag-BF ff-lg\\\"},{\\\"name\\\":\\\"français (Burundi)\\\",\\\"code\\\":\\\"fr_BI\\\",\\\"flag\\\":\\\"fflag fflag-BI ff-lg\\\"},{\\\"name\\\":\\\"français (Cameroun)\\\",\\\"code\\\":\\\"fr_CM\\\",\\\"flag\\\":\\\"fflag fflag-CM ff-lg\\\"},{\\\"name\\\":\\\"français canadien\\\",\\\"code\\\":\\\"fr_CA\\\",\\\"flag\\\":\\\"fflag fflag-CA ff-lg\\\"},{\\\"name\\\":\\\"français (République centrafricaine)\\\",\\\"code\\\":\\\"fr_CF\\\",\\\"flag\\\":\\\"fflag fflag-CF ff-lg\\\"},{\\\"name\\\":\\\"français (Tchad)\\\",\\\"code\\\":\\\"fr_TD\\\",\\\"flag\\\":\\\"fflag fflag-TD ff-lg\\\"},{\\\"name\\\":\\\"français (Comores)\\\",\\\"code\\\":\\\"fr_KM\\\",\\\"flag\\\":\\\"fflag fflag-KM ff-lg\\\"},{\\\"name\\\":\\\"français (Congo-Brazzaville)\\\",\\\"code\\\":\\\"fr_CG\\\",\\\"flag\\\":\\\"fflag fflag-CG ff-lg\\\"},{\\\"name\\\":\\\"français (Congo-Kinshasa)\\\",\\\"code\\\":\\\"fr_CD\\\",\\\"flag\\\":\\\"fflag fflag-CD ff-lg\\\"},{\\\"name\\\":\\\"français (Côte d’Ivoire)\\\",\\\"code\\\":\\\"fr_CI\\\",\\\"flag\\\":\\\"fflag fflag-CI ff-lg\\\"},{\\\"name\\\":\\\"français (Djibouti)\\\",\\\"code\\\":\\\"fr_DJ\\\",\\\"flag\\\":\\\"fflag fflag-DJ ff-lg\\\"},{\\\"name\\\":\\\"français (Guinée équatoriale)\\\",\\\"code\\\":\\\"fr_GQ\\\",\\\"flag\\\":\\\"fflag fflag-GQ ff-lg\\\"},{\\\"name\\\":\\\"français (France)\\\",\\\"code\\\":\\\"fr_FR\\\",\\\"flag\\\":\\\"fflag fflag-FR ff-lg\\\"},{\\\"name\\\":\\\"français (Gabon)\\\",\\\"code\\\":\\\"fr_GA\\\",\\\"flag\\\":\\\"fflag fflag-GA ff-lg\\\"},{\\\"name\\\":\\\"français (Guadeloupe)\\\",\\\"code\\\":\\\"fr_GP\\\",\\\"flag\\\":\\\"fflag fflag-GP ff-lg\\\"},{\\\"name\\\":\\\"français (Guinée)\\\",\\\"code\\\":\\\"fr_GN\\\",\\\"flag\\\":\\\"fflag fflag-GN ff-lg\\\"},{\\\"name\\\":\\\"français (Luxembourg)\\\",\\\"code\\\":\\\"fr_LU\\\",\\\"flag\\\":\\\"fflag fflag-LU ff-lg\\\"},{\\\"name\\\":\\\"français (Madagascar)\\\",\\\"code\\\":\\\"fr_MG\\\",\\\"flag\\\":\\\"fflag fflag-MG ff-lg\\\"},{\\\"name\\\":\\\"français (Mali)\\\",\\\"code\\\":\\\"fr_ML\\\",\\\"flag\\\":\\\"fflag fflag-ML ff-lg\\\"},{\\\"name\\\":\\\"français (Martinique)\\\",\\\"code\\\":\\\"fr_MQ\\\",\\\"flag\\\":\\\"fflag fflag-MQ ff-lg\\\"},{\\\"name\\\":\\\"français (Monaco)\\\",\\\"code\\\":\\\"fr_MC\\\",\\\"flag\\\":\\\"fflag fflag-MC ff-lg\\\"},{\\\"name\\\":\\\"français (Niger)\\\",\\\"code\\\":\\\"fr_NE\\\",\\\"flag\\\":\\\"fflag fflag-NE ff-lg\\\"},{\\\"name\\\":\\\"français (Rwanda)\\\",\\\"code\\\":\\\"fr_RW\\\",\\\"flag\\\":\\\"fflag fflag-RW ff-lg\\\"},{\\\"name\\\":\\\"français (La Réunion)\\\",\\\"code\\\":\\\"fr_RE\\\",\\\"flag\\\":\\\"fflag fflag-RE ff-lg\\\"},{\\\"name\\\":\\\"français (Saint-Barthélemy)\\\",\\\"code\\\":\\\"fr_BL\\\",\\\"flag\\\":\\\"fflag fflag-BL ff-lg\\\"},{\\\"name\\\":\\\"français (Saint-Martin)\\\",\\\"code\\\":\\\"fr_MF\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"français (Sénégal)\\\",\\\"code\\\":\\\"fr_SN\\\",\\\"flag\\\":\\\"fflag fflag-SN ff-lg\\\"},{\\\"name\\\":\\\"français suisse\\\",\\\"code\\\":\\\"fr_CH\\\",\\\"flag\\\":\\\"fflag fflag-CH ff-lg\\\"},{\\\"name\\\":\\\"français (Togo)\\\",\\\"code\\\":\\\"fr_TG\\\",\\\"flag\\\":\\\"fflag fflag-TG ff-lg\\\"},{\\\"name\\\":\\\"français\\\",\\\"code\\\":\\\"fr\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Pulaar (Senegaal)\\\",\\\"code\\\":\\\"ff_SN\\\",\\\"flag\\\":\\\"fflag fflag-SN ff-lg\\\"},{\\\"name\\\":\\\"Pulaar\\\",\\\"code\\\":\\\"ff\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"galego (España)\\\",\\\"code\\\":\\\"gl_ES\\\",\\\"flag\\\":\\\"fflag fflag-ES ff-lg\\\"},{\\\"name\\\":\\\"galego\\\",\\\"code\\\":\\\"gl\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Luganda (Yuganda)\\\",\\\"code\\\":\\\"lg_UG\\\",\\\"flag\\\":\\\"fflag fflag-UG ff-lg\\\"},{\\\"name\\\":\\\"Luganda\\\",\\\"code\\\":\\\"lg\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"ქართული (საქართველო)\\\",\\\"code\\\":\\\"ka_GE\\\",\\\"flag\\\":\\\"fflag fflag-GE ff-lg\\\"},{\\\"name\\\":\\\"ქართული\\\",\\\"code\\\":\\\"ka\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Österreichisches Deutsch\\\",\\\"code\\\":\\\"de_AT\\\",\\\"flag\\\":\\\"fflag fflag-AT ff-lg\\\"},{\\\"name\\\":\\\"Deutsch (Belgien)\\\",\\\"code\\\":\\\"de_BE\\\",\\\"flag\\\":\\\"fflag fflag-BE ff-lg\\\"},{\\\"name\\\":\\\"Deutsch (Deutschland)\\\",\\\"code\\\":\\\"de_DE\\\",\\\"flag\\\":\\\"fflag fflag-DE ff-lg\\\"},{\\\"name\\\":\\\"Deutsch (Liechtenstein)\\\",\\\"code\\\":\\\"de_LI\\\",\\\"flag\\\":\\\"fflag fflag-LI ff-lg\\\"},{\\\"name\\\":\\\"Deutsch (Luxemburg)\\\",\\\"code\\\":\\\"de_LU\\\",\\\"flag\\\":\\\"fflag fflag-LU ff-lg\\\"},{\\\"name\\\":\\\"Schweizer Hochdeutsch\\\",\\\"code\\\":\\\"de_CH\\\",\\\"flag\\\":\\\"fflag fflag-CH ff-lg\\\"},{\\\"name\\\":\\\"Deutsch\\\",\\\"code\\\":\\\"de\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Ελληνικά (Κύπρος)\\\",\\\"code\\\":\\\"el_CY\\\",\\\"flag\\\":\\\"fflag fflag-CY ff-lg\\\"},{\\\"name\\\":\\\"Ελληνικά (Ελλάδα)\\\",\\\"code\\\":\\\"el_GR\\\",\\\"flag\\\":\\\"fflag fflag-GR ff-lg\\\"},{\\\"name\\\":\\\"Ελληνικά\\\",\\\"code\\\":\\\"el\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"ગુજરાતી (ભારત)\\\",\\\"code\\\":\\\"gu_IN\\\",\\\"flag\\\":\\\"fflag fflag-IN ff-lg\\\"},{\\\"name\\\":\\\"ગુજરાતી\\\",\\\"code\\\":\\\"gu\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Ekegusii (Kenya)\\\",\\\"code\\\":\\\"guz_KE\\\",\\\"flag\\\":\\\"fflag fflag-KE ff-lg\\\"},{\\\"name\\\":\\\"Ekegusii\\\",\\\"code\\\":\\\"guz\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Hausa (Latin)\\\",\\\"code\\\":\\\"ha_Latn\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Hausa (Latin, Gana)\\\",\\\"code\\\":\\\"ha_Latn_GH\\\",\\\"flag\\\":\\\"fflag fflag-GH ff-lg\\\"},{\\\"name\\\":\\\"Hausa (Latin, Nijar)\\\",\\\"code\\\":\\\"ha_Latn_NE\\\",\\\"flag\\\":\\\"fflag fflag-NE ff-lg\\\"},{\\\"name\\\":\\\"Hausa (Latin, Najeriya)\\\",\\\"code\\\":\\\"ha_Latn_NG\\\",\\\"flag\\\":\\\"fflag fflag-NG ff-lg\\\"},{\\\"name\\\":\\\"Hausa\\\",\\\"code\\\":\\\"ha\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"ʻŌlelo Hawaiʻi (ʻAmelika Hui Pū ʻIa)\\\",\\\"code\\\":\\\"haw_US\\\",\\\"flag\\\":\\\"fflag fflag-US ff-lg\\\"},{\\\"name\\\":\\\"ʻŌlelo Hawaiʻi\\\",\\\"code\\\":\\\"haw\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"עברית (ישראל)\\\",\\\"code\\\":\\\"he_IL\\\",\\\"flag\\\":\\\"fflag fflag-IL ff-lg\\\"},{\\\"name\\\":\\\"עברית\\\",\\\"code\\\":\\\"he\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"हिन्दी (भारत)\\\",\\\"code\\\":\\\"hi_IN\\\",\\\"flag\\\":\\\"fflag fflag-IN ff-lg\\\"},{\\\"name\\\":\\\"हिन्दी\\\",\\\"code\\\":\\\"hi\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"magyar (Magyarország)\\\",\\\"code\\\":\\\"hu_HU\\\",\\\"flag\\\":\\\"fflag fflag-HU ff-lg\\\"},{\\\"name\\\":\\\"magyar\\\",\\\"code\\\":\\\"hu\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"íslenska (Ísland)\\\",\\\"code\\\":\\\"is_IS\\\",\\\"flag\\\":\\\"fflag fflag-IS ff-lg\\\"},{\\\"name\\\":\\\"íslenska\\\",\\\"code\\\":\\\"is\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Asụsụ Igbo (Naịjịrịa)\\\",\\\"code\\\":\\\"ig_NG\\\",\\\"flag\\\":\\\"fflag fflag-NG ff-lg\\\"},{\\\"name\\\":\\\"Asụsụ Igbo\\\",\\\"code\\\":\\\"ig\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Indonesia (Indonesia)\\\",\\\"code\\\":\\\"id_ID\\\",\\\"flag\\\":\\\"fflag fflag-ID ff-lg\\\"},{\\\"name\\\":\\\"Indonesia\\\",\\\"code\\\":\\\"id\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Gaeilge (Éire)\\\",\\\"code\\\":\\\"ga_IE\\\",\\\"flag\\\":\\\"fflag fflag-IE ff-lg\\\"},{\\\"name\\\":\\\"Gaeilge\\\",\\\"code\\\":\\\"ga\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"italiano (Italia)\\\",\\\"code\\\":\\\"it_IT\\\",\\\"flag\\\":\\\"fflag fflag-IT ff-lg\\\"},{\\\"name\\\":\\\"italiano (Svizzera)\\\",\\\"code\\\":\\\"it_CH\\\",\\\"flag\\\":\\\"fflag fflag-CH ff-lg\\\"},{\\\"name\\\":\\\"italiano\\\",\\\"code\\\":\\\"it\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"日本語 (日本)\\\",\\\"code\\\":\\\"ja_JP\\\",\\\"flag\\\":\\\"fflag fflag-JP ff-lg\\\"},{\\\"name\\\":\\\"日本語\\\",\\\"code\\\":\\\"ja\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"kabuverdianu (Kabu Verdi)\\\",\\\"code\\\":\\\"kea_CV\\\",\\\"flag\\\":\\\"fflag fflag-CV ff-lg\\\"},{\\\"name\\\":\\\"kabuverdianu\\\",\\\"code\\\":\\\"kea\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Taqbaylit (Lezzayer)\\\",\\\"code\\\":\\\"kab_DZ\\\",\\\"flag\\\":\\\"fflag fflag-DZ ff-lg\\\"},{\\\"name\\\":\\\"Taqbaylit\\\",\\\"code\\\":\\\"kab\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"kalaallisut (Kalaallit Nunaat)\\\",\\\"code\\\":\\\"kl_GL\\\",\\\"flag\\\":\\\"fflag fflag-GL ff-lg\\\"},{\\\"name\\\":\\\"kalaallisut\\\",\\\"code\\\":\\\"kl\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Kalenjin (Emetab Kenya)\\\",\\\"code\\\":\\\"kln_KE\\\",\\\"flag\\\":\\\"fflag fflag-KE ff-lg\\\"},{\\\"name\\\":\\\"Kalenjin\\\",\\\"code\\\":\\\"kln\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Kikamba (Kenya)\\\",\\\"code\\\":\\\"kam_KE\\\",\\\"flag\\\":\\\"fflag fflag-KE ff-lg\\\"},{\\\"name\\\":\\\"Kikamba\\\",\\\"code\\\":\\\"kam\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"ಕನ್ನಡ (ಭಾರತ)\\\",\\\"code\\\":\\\"kn_IN\\\",\\\"flag\\\":\\\"fflag fflag-IN ff-lg\\\"},{\\\"name\\\":\\\"ಕನ್ನಡ\\\",\\\"code\\\":\\\"kn\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"қазақ тілі (кирилл жазуы)\\\",\\\"code\\\":\\\"kk_Cyrl\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"қазақ тілі (кирилл жазуы, Қазақстан)\\\",\\\"code\\\":\\\"kk_Cyrl_KZ\\\",\\\"flag\\\":\\\"fflag fflag-KZ ff-lg\\\"},{\\\"name\\\":\\\"қазақ тілі\\\",\\\"code\\\":\\\"kk\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"ខ្មែរ (កម្ពុជា)\\\",\\\"code\\\":\\\"km_KH\\\",\\\"flag\\\":\\\"fflag fflag-KH ff-lg\\\"},{\\\"name\\\":\\\"ខ្មែរ\\\",\\\"code\\\":\\\"km\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Gikuyu (Kenya)\\\",\\\"code\\\":\\\"ki_KE\\\",\\\"flag\\\":\\\"fflag fflag-KE ff-lg\\\"},{\\\"name\\\":\\\"Gikuyu\\\",\\\"code\\\":\\\"ki\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Kinyarwanda (U Rwanda)\\\",\\\"code\\\":\\\"rw_RW\\\",\\\"flag\\\":\\\"fflag fflag-RW ff-lg\\\"},{\\\"name\\\":\\\"Kinyarwanda\\\",\\\"code\\\":\\\"rw\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"कोंकणी (भारत)\\\",\\\"code\\\":\\\"kok_IN\\\",\\\"flag\\\":\\\"fflag fflag-IN ff-lg\\\"},{\\\"name\\\":\\\"कोंकणी\\\",\\\"code\\\":\\\"kok\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"한국어(대한민국)\\\",\\\"code\\\":\\\"ko_KR\\\",\\\"flag\\\":\\\"fflag fflag-KR ff-lg\\\"},{\\\"name\\\":\\\"한국어\\\",\\\"code\\\":\\\"ko\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Koyra ciini (Maali)\\\",\\\"code\\\":\\\"khq_ML\\\",\\\"flag\\\":\\\"fflag fflag-ML ff-lg\\\"},{\\\"name\\\":\\\"Koyra ciini\\\",\\\"code\\\":\\\"khq\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Koyraboro senni (Maali)\\\",\\\"code\\\":\\\"ses_ML\\\",\\\"flag\\\":\\\"fflag fflag-ML ff-lg\\\"},{\\\"name\\\":\\\"Koyraboro senni\\\",\\\"code\\\":\\\"ses\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Kɨlaangi (Taansanía)\\\",\\\"code\\\":\\\"lag_TZ\\\",\\\"flag\\\":\\\"fflag fflag-TZ ff-lg\\\"},{\\\"name\\\":\\\"Kɨlaangi\\\",\\\"code\\\":\\\"lag\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"latviešu (Latvija)\\\",\\\"code\\\":\\\"lv_LV\\\",\\\"flag\\\":\\\"fflag fflag-LV ff-lg\\\"},{\\\"name\\\":\\\"latviešu\\\",\\\"code\\\":\\\"lv\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"lietuvių (Lietuva)\\\",\\\"code\\\":\\\"lt_LT\\\",\\\"flag\\\":\\\"fflag fflag-LT ff-lg\\\"},{\\\"name\\\":\\\"lietuvių\\\",\\\"code\\\":\\\"lt\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Dholuo (Kenya)\\\",\\\"code\\\":\\\"luo_KE\\\",\\\"flag\\\":\\\"fflag fflag-KE ff-lg\\\"},{\\\"name\\\":\\\"Dholuo\\\",\\\"code\\\":\\\"luo\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Luluhia (Kenya)\\\",\\\"code\\\":\\\"luy_KE\\\",\\\"flag\\\":\\\"fflag fflag-KE ff-lg\\\"},{\\\"name\\\":\\\"Luluhia\\\",\\\"code\\\":\\\"luy\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"македонски (Северна Македонија)\\\",\\\"code\\\":\\\"mk_MK\\\",\\\"flag\\\":\\\"fflag fflag-MK ff-lg\\\"},{\\\"name\\\":\\\"македонски\\\",\\\"code\\\":\\\"mk\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Kimachame (Tanzania)\\\",\\\"code\\\":\\\"jmc_TZ\\\",\\\"flag\\\":\\\"fflag fflag-TZ ff-lg\\\"},{\\\"name\\\":\\\"Kimachame\\\",\\\"code\\\":\\\"jmc\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Chimakonde (Tanzania)\\\",\\\"code\\\":\\\"kde_TZ\\\",\\\"flag\\\":\\\"fflag fflag-TZ ff-lg\\\"},{\\\"name\\\":\\\"Chimakonde\\\",\\\"code\\\":\\\"kde\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Malagasy (Madagasikara)\\\",\\\"code\\\":\\\"mg_MG\\\",\\\"flag\\\":\\\"fflag fflag-MG ff-lg\\\"},{\\\"name\\\":\\\"Malagasy\\\",\\\"code\\\":\\\"mg\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Melayu (Brunei)\\\",\\\"code\\\":\\\"ms_BN\\\",\\\"flag\\\":\\\"fflag fflag-BN ff-lg\\\"},{\\\"name\\\":\\\"Melayu (Malaysia)\\\",\\\"code\\\":\\\"ms_MY\\\",\\\"flag\\\":\\\"fflag fflag-MY ff-lg\\\"},{\\\"name\\\":\\\"Melayu\\\",\\\"code\\\":\\\"ms\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"മലയാളം (ഇന്ത്യ)\\\",\\\"code\\\":\\\"ml_IN\\\",\\\"flag\\\":\\\"fflag fflag-IN ff-lg\\\"},{\\\"name\\\":\\\"മലയാളം\\\",\\\"code\\\":\\\"ml\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Malti (Malta)\\\",\\\"code\\\":\\\"mt_MT\\\",\\\"flag\\\":\\\"fflag fflag-MT ff-lg\\\"},{\\\"name\\\":\\\"Malti\\\",\\\"code\\\":\\\"mt\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Gaelg (Rywvaneth Unys)\\\",\\\"code\\\":\\\"gv_GB\\\",\\\"flag\\\":\\\"fflag fflag-GB ff-lg\\\"},{\\\"name\\\":\\\"Gaelg\\\",\\\"code\\\":\\\"gv\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"मराठी (भारत)\\\",\\\"code\\\":\\\"mr_IN\\\",\\\"flag\\\":\\\"fflag fflag-IN ff-lg\\\"},{\\\"name\\\":\\\"मराठी\\\",\\\"code\\\":\\\"mr\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Maa (Kenya)\\\",\\\"code\\\":\\\"mas_KE\\\",\\\"flag\\\":\\\"fflag fflag-KE ff-lg\\\"},{\\\"name\\\":\\\"Maa (Tansania)\\\",\\\"code\\\":\\\"mas_TZ\\\",\\\"flag\\\":\\\"fflag fflag-TZ ff-lg\\\"},{\\\"name\\\":\\\"Maa\\\",\\\"code\\\":\\\"mas\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Kĩmĩrũ (Kenya)\\\",\\\"code\\\":\\\"mer_KE\\\",\\\"flag\\\":\\\"fflag fflag-KE ff-lg\\\"},{\\\"name\\\":\\\"Kĩmĩrũ\\\",\\\"code\\\":\\\"mer\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"kreol morisien (Moris)\\\",\\\"code\\\":\\\"mfe_MU\\\",\\\"flag\\\":\\\"fflag fflag-MU ff-lg\\\"},{\\\"name\\\":\\\"kreol morisien\\\",\\\"code\\\":\\\"mfe\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Khoekhoegowab (Namibiab)\\\",\\\"code\\\":\\\"naq_NA\\\",\\\"flag\\\":\\\"fflag fflag-NA ff-lg\\\"},{\\\"name\\\":\\\"Khoekhoegowab\\\",\\\"code\\\":\\\"naq\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"नेपाली (भारत)\\\",\\\"code\\\":\\\"ne_IN\\\",\\\"flag\\\":\\\"fflag fflag-IN ff-lg\\\"},{\\\"name\\\":\\\"नेपाली (नेपाल)\\\",\\\"code\\\":\\\"ne_NP\\\",\\\"flag\\\":\\\"fflag fflag-NP ff-lg\\\"},{\\\"name\\\":\\\"नेपाली\\\",\\\"code\\\":\\\"ne\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"isiNdebele (Zimbabwe)\\\",\\\"code\\\":\\\"nd_ZW\\\",\\\"flag\\\":\\\"fflag fflag-ZW ff-lg\\\"},{\\\"name\\\":\\\"isiNdebele\\\",\\\"code\\\":\\\"nd\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"norsk bokmål (Norge)\\\",\\\"code\\\":\\\"nb_NO\\\",\\\"flag\\\":\\\"fflag fflag-NO ff-lg\\\"},{\\\"name\\\":\\\"norsk bokmål\\\",\\\"code\\\":\\\"nb\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"nynorsk (Noreg)\\\",\\\"code\\\":\\\"nn_NO\\\",\\\"flag\\\":\\\"fflag fflag-NO ff-lg\\\"},{\\\"name\\\":\\\"nynorsk\\\",\\\"code\\\":\\\"nn\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Runyankore (Uganda)\\\",\\\"code\\\":\\\"nyn_UG\\\",\\\"flag\\\":\\\"fflag fflag-UG ff-lg\\\"},{\\\"name\\\":\\\"Runyankore\\\",\\\"code\\\":\\\"nyn\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"ଓଡ଼ିଆ (ଭାରତ)\\\",\\\"code\\\":\\\"or_IN\\\",\\\"flag\\\":\\\"fflag fflag-IN ff-lg\\\"},{\\\"name\\\":\\\"ଓଡ଼ିଆ\\\",\\\"code\\\":\\\"or\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Oromoo (Itoophiyaa)\\\",\\\"code\\\":\\\"om_ET\\\",\\\"flag\\\":\\\"fflag fflag-ET ff-lg\\\"},{\\\"name\\\":\\\"Oromoo (Keeniyaa)\\\",\\\"code\\\":\\\"om_KE\\\",\\\"flag\\\":\\\"fflag fflag-KE ff-lg\\\"},{\\\"name\\\":\\\"Oromoo\\\",\\\"code\\\":\\\"om\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"پښتو (افغانستان)\\\",\\\"code\\\":\\\"ps_AF\\\",\\\"flag\\\":\\\"fflag fflag-AF ff-lg\\\"},{\\\"name\\\":\\\"پښتو\\\",\\\"code\\\":\\\"ps\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"دری\\\",\\\"code\\\":\\\"fa_AF\\\",\\\"flag\\\":\\\"fflag fflag-AF ff-lg\\\"},{\\\"name\\\":\\\"فارسی (ایران)\\\",\\\"code\\\":\\\"fa_IR\\\",\\\"flag\\\":\\\"fflag fflag-IR ff-lg\\\"},{\\\"name\\\":\\\"فارسی\\\",\\\"code\\\":\\\"fa\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"polski (Polska)\\\",\\\"code\\\":\\\"pl_PL\\\",\\\"flag\\\":\\\"fflag fflag-PL ff-lg\\\"},{\\\"name\\\":\\\"polski\\\",\\\"code\\\":\\\"pl\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"português (Brasil)\\\",\\\"code\\\":\\\"pt_BR\\\",\\\"flag\\\":\\\"fflag fflag-BR ff-lg\\\"},{\\\"name\\\":\\\"português (Guiné-Bissau)\\\",\\\"code\\\":\\\"pt_GW\\\",\\\"flag\\\":\\\"fflag fflag-GW ff-lg\\\"},{\\\"name\\\":\\\"português (Moçambique)\\\",\\\"code\\\":\\\"pt_MZ\\\",\\\"flag\\\":\\\"fflag fflag-MZ ff-lg\\\"},{\\\"name\\\":\\\"português europeu\\\",\\\"code\\\":\\\"pt_PT\\\",\\\"flag\\\":\\\"fflag fflag-PT ff-lg\\\"},{\\\"name\\\":\\\"português\\\",\\\"code\\\":\\\"pt\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"پنجابی (عربی)\\\",\\\"code\\\":\\\"pa_Arab\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"پنجابی (عربی, پاکستان)\\\",\\\"code\\\":\\\"pa_Arab_PK\\\",\\\"flag\\\":\\\"fflag fflag-PK ff-lg\\\"},{\\\"name\\\":\\\"ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ)\\\",\\\"code\\\":\\\"pa_Guru\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"ਪੰਜਾਬੀ (ਗੁਰਮੁਖੀ, ਭਾਰਤ)\\\",\\\"code\\\":\\\"pa_Guru_IN\\\",\\\"flag\\\":\\\"fflag fflag-IN ff-lg\\\"},{\\\"name\\\":\\\"ਪੰਜਾਬੀ\\\",\\\"code\\\":\\\"pa\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"română (Republica Moldova)\\\",\\\"code\\\":\\\"ro_MD\\\",\\\"flag\\\":\\\"fflag fflag-MD ff-lg\\\"},{\\\"name\\\":\\\"română (România)\\\",\\\"code\\\":\\\"ro_RO\\\",\\\"flag\\\":\\\"fflag fflag-RO ff-lg\\\"},{\\\"name\\\":\\\"română\\\",\\\"code\\\":\\\"ro\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"rumantsch (Svizra)\\\",\\\"code\\\":\\\"rm_CH\\\",\\\"flag\\\":\\\"fflag fflag-CH ff-lg\\\"},{\\\"name\\\":\\\"rumantsch\\\",\\\"code\\\":\\\"rm\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Kihorombo (Tanzania)\\\",\\\"code\\\":\\\"rof_TZ\\\",\\\"flag\\\":\\\"fflag fflag-TZ ff-lg\\\"},{\\\"name\\\":\\\"Kihorombo\\\",\\\"code\\\":\\\"rof\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"русский (Молдова)\\\",\\\"code\\\":\\\"ru_MD\\\",\\\"flag\\\":\\\"fflag fflag-MD ff-lg\\\"},{\\\"name\\\":\\\"русский (Россия)\\\",\\\"code\\\":\\\"ru_RU\\\",\\\"flag\\\":\\\"fflag fflag-RU ff-lg\\\"},{\\\"name\\\":\\\"русский (Украина)\\\",\\\"code\\\":\\\"ru_UA\\\",\\\"flag\\\":\\\"fflag fflag-UA ff-lg\\\"},{\\\"name\\\":\\\"русский\\\",\\\"code\\\":\\\"ru\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Kiruwa (Tanzania)\\\",\\\"code\\\":\\\"rwk_TZ\\\",\\\"flag\\\":\\\"fflag fflag-TZ ff-lg\\\"},{\\\"name\\\":\\\"Kiruwa\\\",\\\"code\\\":\\\"rwk\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Kisampur (Kenya)\\\",\\\"code\\\":\\\"saq_KE\\\",\\\"flag\\\":\\\"fflag fflag-KE ff-lg\\\"},{\\\"name\\\":\\\"Kisampur\\\",\\\"code\\\":\\\"saq\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Sängö (Ködörösêse tî Bêafrîka)\\\",\\\"code\\\":\\\"sg_CF\\\",\\\"flag\\\":\\\"fflag fflag-CF ff-lg\\\"},{\\\"name\\\":\\\"Sängö\\\",\\\"code\\\":\\\"sg\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"sena (Moçambique)\\\",\\\"code\\\":\\\"seh_MZ\\\",\\\"flag\\\":\\\"fflag fflag-MZ ff-lg\\\"},{\\\"name\\\":\\\"sena\\\",\\\"code\\\":\\\"seh\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"српски (ћирилица)\\\",\\\"code\\\":\\\"sr_Cyrl\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"српски (ћирилица, Босна и Херцеговина)\\\",\\\"code\\\":\\\"sr_Cyrl_BA\\\",\\\"flag\\\":\\\"fflag fflag-BA ff-lg\\\"},{\\\"name\\\":\\\"српски (ћирилица, Црна Гора)\\\",\\\"code\\\":\\\"sr_Cyrl_ME\\\",\\\"flag\\\":\\\"fflag fflag-ME ff-lg\\\"},{\\\"name\\\":\\\"српски (ћирилица, Србија)\\\",\\\"code\\\":\\\"sr_Cyrl_RS\\\",\\\"flag\\\":\\\"fflag fflag-RS ff-lg\\\"},{\\\"name\\\":\\\"srpski (latinica)\\\",\\\"code\\\":\\\"sr_Latn\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"srpski (latinica, Bosna i Hercegovina)\\\",\\\"code\\\":\\\"sr_Latn_BA\\\",\\\"flag\\\":\\\"fflag fflag-BA ff-lg\\\"},{\\\"name\\\":\\\"srpski (latinica, Crna Gora)\\\",\\\"code\\\":\\\"sr_Latn_ME\\\",\\\"flag\\\":\\\"fflag fflag-ME ff-lg\\\"},{\\\"name\\\":\\\"srpski (latinica, Srbija)\\\",\\\"code\\\":\\\"sr_Latn_RS\\\",\\\"flag\\\":\\\"fflag fflag-RS ff-lg\\\"},{\\\"name\\\":\\\"српски\\\",\\\"code\\\":\\\"sr\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"chiShona (Zimbabwe)\\\",\\\"code\\\":\\\"sn_ZW\\\",\\\"flag\\\":\\\"fflag fflag-ZW ff-lg\\\"},{\\\"name\\\":\\\"chiShona\\\",\\\"code\\\":\\\"sn\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"ꆈꌠꉙ (ꍏꇩ)\\\",\\\"code\\\":\\\"ii_CN\\\",\\\"flag\\\":\\\"fflag fflag-CN ff-lg\\\"},{\\\"name\\\":\\\"ꆈꌠꉙ\\\",\\\"code\\\":\\\"ii\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"සිංහල (ශ්‍රී ලංකාව)\\\",\\\"code\\\":\\\"si_LK\\\",\\\"flag\\\":\\\"fflag fflag-LK ff-lg\\\"},{\\\"name\\\":\\\"සිංහල\\\",\\\"code\\\":\\\"si\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"slovenčina (Slovensko)\\\",\\\"code\\\":\\\"sk_SK\\\",\\\"flag\\\":\\\"fflag fflag-SK ff-lg\\\"},{\\\"name\\\":\\\"slovenčina\\\",\\\"code\\\":\\\"sk\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"slovenščina (Slovenija)\\\",\\\"code\\\":\\\"sl_SI\\\",\\\"flag\\\":\\\"fflag fflag-SI ff-lg\\\"},{\\\"name\\\":\\\"slovenščina\\\",\\\"code\\\":\\\"sl\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Olusoga (Yuganda)\\\",\\\"code\\\":\\\"xog_UG\\\",\\\"flag\\\":\\\"fflag fflag-UG ff-lg\\\"},{\\\"name\\\":\\\"Olusoga\\\",\\\"code\\\":\\\"xog\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Soomaali (Jabuuti)\\\",\\\"code\\\":\\\"so_DJ\\\",\\\"flag\\\":\\\"fflag fflag-DJ ff-lg\\\"},{\\\"name\\\":\\\"Soomaali (Itoobiya)\\\",\\\"code\\\":\\\"so_ET\\\",\\\"flag\\\":\\\"fflag fflag-ET ff-lg\\\"},{\\\"name\\\":\\\"Soomaali (Kenya)\\\",\\\"code\\\":\\\"so_KE\\\",\\\"flag\\\":\\\"fflag fflag-KE ff-lg\\\"},{\\\"name\\\":\\\"Soomaali (Soomaaliya)\\\",\\\"code\\\":\\\"so_SO\\\",\\\"flag\\\":\\\"fflag fflag-SO ff-lg\\\"},{\\\"name\\\":\\\"Soomaali\\\",\\\"code\\\":\\\"so\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"español (Argentina)\\\",\\\"code\\\":\\\"es_AR\\\",\\\"flag\\\":\\\"fflag fflag-AR ff-lg\\\"},{\\\"name\\\":\\\"español (Bolivia)\\\",\\\"code\\\":\\\"es_BO\\\",\\\"flag\\\":\\\"fflag fflag-BO ff-lg\\\"},{\\\"name\\\":\\\"español (Chile)\\\",\\\"code\\\":\\\"es_CL\\\",\\\"flag\\\":\\\"fflag fflag-CL ff-lg\\\"},{\\\"name\\\":\\\"español (Colombia)\\\",\\\"code\\\":\\\"es_CO\\\",\\\"flag\\\":\\\"fflag fflag-CO ff-lg\\\"},{\\\"name\\\":\\\"español (Costa Rica)\\\",\\\"code\\\":\\\"es_CR\\\",\\\"flag\\\":\\\"fflag fflag-CR ff-lg\\\"},{\\\"name\\\":\\\"español (República Dominicana)\\\",\\\"code\\\":\\\"es_DO\\\",\\\"flag\\\":\\\"fflag fflag-DO ff-lg\\\"},{\\\"name\\\":\\\"español (Ecuador)\\\",\\\"code\\\":\\\"es_EC\\\",\\\"flag\\\":\\\"fflag fflag-EC ff-lg\\\"},{\\\"name\\\":\\\"español (El Salvador)\\\",\\\"code\\\":\\\"es_SV\\\",\\\"flag\\\":\\\"fflag fflag-SV ff-lg\\\"},{\\\"name\\\":\\\"español (Guinea Ecuatorial)\\\",\\\"code\\\":\\\"es_GQ\\\",\\\"flag\\\":\\\"fflag fflag-GQ ff-lg\\\"},{\\\"name\\\":\\\"español (Guatemala)\\\",\\\"code\\\":\\\"es_GT\\\",\\\"flag\\\":\\\"fflag fflag-GT ff-lg\\\"},{\\\"name\\\":\\\"español (Honduras)\\\",\\\"code\\\":\\\"es_HN\\\",\\\"flag\\\":\\\"fflag fflag-HN ff-lg\\\"},{\\\"name\\\":\\\"español latinoamericano\\\",\\\"code\\\":\\\"es_419\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"español de México\\\",\\\"code\\\":\\\"es_MX\\\",\\\"flag\\\":\\\"fflag fflag-MX ff-lg\\\"},{\\\"name\\\":\\\"español (Nicaragua)\\\",\\\"code\\\":\\\"es_NI\\\",\\\"flag\\\":\\\"fflag fflag-NI ff-lg\\\"},{\\\"name\\\":\\\"español (Panamá)\\\",\\\"code\\\":\\\"es_PA\\\",\\\"flag\\\":\\\"fflag fflag-PA ff-lg\\\"},{\\\"name\\\":\\\"español (Paraguay)\\\",\\\"code\\\":\\\"es_PY\\\",\\\"flag\\\":\\\"fflag fflag-PY ff-lg\\\"},{\\\"name\\\":\\\"español (Perú)\\\",\\\"code\\\":\\\"es_PE\\\",\\\"flag\\\":\\\"fflag fflag-PE ff-lg\\\"},{\\\"name\\\":\\\"español (Puerto Rico)\\\",\\\"code\\\":\\\"es_PR\\\",\\\"flag\\\":\\\"fflag fflag-PR ff-lg\\\"},{\\\"name\\\":\\\"español de España\\\",\\\"code\\\":\\\"es_ES\\\",\\\"flag\\\":\\\"fflag fflag-ES ff-lg\\\"},{\\\"name\\\":\\\"español (Estados Unidos)\\\",\\\"code\\\":\\\"es_US\\\",\\\"flag\\\":\\\"fflag fflag-US ff-lg\\\"},{\\\"name\\\":\\\"español (Uruguay)\\\",\\\"code\\\":\\\"es_UY\\\",\\\"flag\\\":\\\"fflag fflag-UY ff-lg\\\"},{\\\"name\\\":\\\"español (Venezuela)\\\",\\\"code\\\":\\\"es_VE\\\",\\\"flag\\\":\\\"fflag fflag-VE ff-lg\\\"},{\\\"name\\\":\\\"español\\\",\\\"code\\\":\\\"es\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Kiswahili (Kenya)\\\",\\\"code\\\":\\\"sw_KE\\\",\\\"flag\\\":\\\"fflag fflag-KE ff-lg\\\"},{\\\"name\\\":\\\"Kiswahili (Tanzania)\\\",\\\"code\\\":\\\"sw_TZ\\\",\\\"flag\\\":\\\"fflag fflag-TZ ff-lg\\\"},{\\\"name\\\":\\\"Kiswahili\\\",\\\"code\\\":\\\"sw\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"svenska (Finland)\\\",\\\"code\\\":\\\"sv_FI\\\",\\\"flag\\\":\\\"fflag fflag-FI ff-lg\\\"},{\\\"name\\\":\\\"svenska (Sverige)\\\",\\\"code\\\":\\\"sv_SE\\\",\\\"flag\\\":\\\"fflag fflag-SE ff-lg\\\"},{\\\"name\\\":\\\"svenska\\\",\\\"code\\\":\\\"sv\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Schwiizertüütsch (Schwiiz)\\\",\\\"code\\\":\\\"gsw_CH\\\",\\\"flag\\\":\\\"fflag fflag-CH ff-lg\\\"},{\\\"name\\\":\\\"Schwiizertüütsch\\\",\\\"code\\\":\\\"gsw\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Tashelḥiyt (Latn)\\\",\\\"code\\\":\\\"shi_Latn\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Tashelḥiyt (Latn, lmɣrib)\\\",\\\"code\\\":\\\"shi_Latn_MA\\\",\\\"flag\\\":\\\"fflag fflag-MA ff-lg\\\"},{\\\"name\\\":\\\"ⵜⴰⵛⵍⵃⵉⵜ (Tfng)\\\",\\\"code\\\":\\\"shi_Tfng\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"ⵜⴰⵛⵍⵃⵉⵜ (Tfng, ⵍⵎⵖⵔⵉⴱ)\\\",\\\"code\\\":\\\"shi_Tfng_MA\\\",\\\"flag\\\":\\\"fflag fflag-MA ff-lg\\\"},{\\\"name\\\":\\\"ⵜⴰⵛⵍⵃⵉⵜ\\\",\\\"code\\\":\\\"shi\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Kitaita (Kenya)\\\",\\\"code\\\":\\\"dav_KE\\\",\\\"flag\\\":\\\"fflag fflag-KE ff-lg\\\"},{\\\"name\\\":\\\"Kitaita\\\",\\\"code\\\":\\\"dav\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"தமிழ் (இந்தியா)\\\",\\\"code\\\":\\\"ta_IN\\\",\\\"flag\\\":\\\"fflag fflag-IN ff-lg\\\"},{\\\"name\\\":\\\"தமிழ் (இலங்கை)\\\",\\\"code\\\":\\\"ta_LK\\\",\\\"flag\\\":\\\"fflag fflag-LK ff-lg\\\"},{\\\"name\\\":\\\"தமிழ்\\\",\\\"code\\\":\\\"ta\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"తెలుగు (భారతదేశం)\\\",\\\"code\\\":\\\"te_IN\\\",\\\"flag\\\":\\\"fflag fflag-IN ff-lg\\\"},{\\\"name\\\":\\\"తెలుగు\\\",\\\"code\\\":\\\"te\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Kiteso (Kenia)\\\",\\\"code\\\":\\\"teo_KE\\\",\\\"flag\\\":\\\"fflag fflag-KE ff-lg\\\"},{\\\"name\\\":\\\"Kiteso (Uganda)\\\",\\\"code\\\":\\\"teo_UG\\\",\\\"flag\\\":\\\"fflag fflag-UG ff-lg\\\"},{\\\"name\\\":\\\"Kiteso\\\",\\\"code\\\":\\\"teo\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"ไทย (ไทย)\\\",\\\"code\\\":\\\"th_TH\\\",\\\"flag\\\":\\\"fflag fflag-TH ff-lg\\\"},{\\\"name\\\":\\\"ไทย\\\",\\\"code\\\":\\\"th\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"བོད་སྐད་ (རྒྱ་ནག)\\\",\\\"code\\\":\\\"bo_CN\\\",\\\"flag\\\":\\\"fflag fflag-CN ff-lg\\\"},{\\\"name\\\":\\\"བོད་སྐད་ (རྒྱ་གར་)\\\",\\\"code\\\":\\\"bo_IN\\\",\\\"flag\\\":\\\"fflag fflag-IN ff-lg\\\"},{\\\"name\\\":\\\"བོད་སྐད་\\\",\\\"code\\\":\\\"bo\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"ትግርኛ (ኤርትራ)\\\",\\\"code\\\":\\\"ti_ER\\\",\\\"flag\\\":\\\"fflag fflag-ER ff-lg\\\"},{\\\"name\\\":\\\"ትግርኛ (ኢትዮጵያ)\\\",\\\"code\\\":\\\"ti_ET\\\",\\\"flag\\\":\\\"fflag fflag-ET ff-lg\\\"},{\\\"name\\\":\\\"ትግርኛ\\\",\\\"code\\\":\\\"ti\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"lea fakatonga (Tonga)\\\",\\\"code\\\":\\\"to_TO\\\",\\\"flag\\\":\\\"fflag fflag-TO ff-lg\\\"},{\\\"name\\\":\\\"lea fakatonga\\\",\\\"code\\\":\\\"to\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Türkçe (Türkiye)\\\",\\\"code\\\":\\\"tr_TR\\\",\\\"flag\\\":\\\"fflag fflag-TR ff-lg\\\"},{\\\"name\\\":\\\"Türkçe\\\",\\\"code\\\":\\\"tr\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"українська (Україна)\\\",\\\"code\\\":\\\"uk_UA\\\",\\\"flag\\\":\\\"fflag fflag-UA ff-lg\\\"},{\\\"name\\\":\\\"українська\\\",\\\"code\\\":\\\"uk\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"اردو (بھارت)\\\",\\\"code\\\":\\\"ur_IN\\\",\\\"flag\\\":\\\"fflag fflag-IN ff-lg\\\"},{\\\"name\\\":\\\"اردو (پاکستان)\\\",\\\"code\\\":\\\"ur_PK\\\",\\\"flag\\\":\\\"fflag fflag-PK ff-lg\\\"},{\\\"name\\\":\\\"اردو\\\",\\\"code\\\":\\\"ur\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"اوزبیک (عربی)\\\",\\\"code\\\":\\\"uz_Arab\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"اوزبیک (عربی, افغانستان)\\\",\\\"code\\\":\\\"uz_Arab_AF\\\",\\\"flag\\\":\\\"fflag fflag-AF ff-lg\\\"},{\\\"name\\\":\\\"ўзбекча (Кирил)\\\",\\\"code\\\":\\\"uz_Cyrl\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"ўзбекча (Кирил, Ўзбекистон)\\\",\\\"code\\\":\\\"uz_Cyrl_UZ\\\",\\\"flag\\\":\\\"fflag fflag-UZ ff-lg\\\"},{\\\"name\\\":\\\"o‘zbek (lotin)\\\",\\\"code\\\":\\\"uz_Latn\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"o‘zbek (lotin, Oʻzbekiston)\\\",\\\"code\\\":\\\"uz_Latn_UZ\\\",\\\"flag\\\":\\\"fflag fflag-UZ ff-lg\\\"},{\\\"name\\\":\\\"o‘zbek\\\",\\\"code\\\":\\\"uz\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Tiếng Việt (Việt Nam)\\\",\\\"code\\\":\\\"vi_VN\\\",\\\"flag\\\":\\\"fflag fflag-VN ff-lg\\\"},{\\\"name\\\":\\\"Tiếng Việt\\\",\\\"code\\\":\\\"vi\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Kyivunjo (Tanzania)\\\",\\\"code\\\":\\\"vun_TZ\\\",\\\"flag\\\":\\\"fflag fflag-TZ ff-lg\\\"},{\\\"name\\\":\\\"Kyivunjo\\\",\\\"code\\\":\\\"vun\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Cymraeg (Y Deyrnas Unedig)\\\",\\\"code\\\":\\\"cy_GB\\\",\\\"flag\\\":\\\"fflag fflag-GB ff-lg\\\"},{\\\"name\\\":\\\"Cymraeg\\\",\\\"code\\\":\\\"cy\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"Èdè Yorùbá (Orilẹ̀-èdè Nàìjíríà)\\\",\\\"code\\\":\\\"yo_NG\\\",\\\"flag\\\":\\\"fflag fflag-NG ff-lg\\\"},{\\\"name\\\":\\\"Èdè Yorùbá\\\",\\\"code\\\":\\\"yo\\\",\\\"flag\\\":\\\"\\\"},{\\\"name\\\":\\\"isiZulu (iNingizimu Afrika)\\\",\\\"code\\\":\\\"zu_ZA\\\",\\\"flag\\\":\\\"fflag fflag-ZA ff-lg\\\"},{\\\"name\\\":\\\"isiZulu\\\",\\\"code\\\":\\\"zu\\\",\\\"flag\\\":\\\"\\\"}]\");\n\n//# sourceURL=webpack://LanguageSelector/./web_app-language-selector-base/src/json/languages.json?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("function _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nmodule.exports = _assertThisInitialized;\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/@babel/runtime/helpers/assertThisInitialized.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

eval("function _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nmodule.exports = _defineProperty;\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/@babel/runtime/helpers/defineProperty.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

eval("function _getPrototypeOf(o) {\n  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nmodule.exports = _getPrototypeOf;\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/@babel/runtime/helpers/getPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ \"./node_modules/@babel/runtime/helpers/setPrototypeOf.js\");\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) setPrototypeOf(subClass, superClass);\n}\n\nmodule.exports = _inherits;\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/@babel/runtime/helpers/inherits.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"./node_modules/@babel/runtime/helpers/typeof.js\");\n\nvar assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/assertThisInitialized.js\");\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n    return call;\n  }\n\n  return assertThisInitialized(self);\n}\n\nmodule.exports = _possibleConstructorReturn;\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

eval("function _setPrototypeOf(o, p) {\n  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nmodule.exports = _setPrototypeOf;\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/@babel/runtime/helpers/setPrototypeOf.js?");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./web_app-language-selector-base/src/index.js":
/*!****************************************************!*\
  !*** ./web_app-language-selector-base/src/index.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"init\": function() { return /* binding */ init; },\n/* harmony export */   \"getSelectedLanguage\": function() { return /* binding */ getSelectedLanguage; }\n/* harmony export */ });\n/* harmony import */ var _images_flagSprite42_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/flagSprite42.png */ \"./web_app-language-selector-base/src/images/flagSprite42.png\");\n/* harmony import */ var _js_Controller_LanguageSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/Controller/LanguageSelector */ \"./web_app-language-selector-base/src/js/Controller/LanguageSelector.js\");\n\n\n/**\r\n * LanguageSelectorClass Instance\r\n */\n\nvar _oLanguageSelector;\n/**\r\n * Initialize language selector\r\n *\r\n * @param oOptions\r\n * @param fnCallback\r\n */\n\n\nfunction init(oOptions, fnCallback) {\n  _oLanguageSelector = new _js_Controller_LanguageSelector__WEBPACK_IMPORTED_MODULE_1__.default(oOptions, fnCallback);\n}\n/**\r\n * Get locale value of language selector\r\n *\r\n * @return {string|*}\r\n */\n\n\nfunction getSelectedLanguage() {\n  return _oLanguageSelector.getLocaleLanguageSelector();\n}\n\n\n\n//# sourceURL=webpack://LanguageSelector/./web_app-language-selector-base/src/index.js?");

/***/ }),

/***/ "./web_app-language-selector-base/src/js/Base/BaseLogic.js":
/*!****************************************************************!*\
  !*** ./web_app-language-selector-base/src/js/Base/BaseLogic.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ \"./node_modules/core-js/modules/es.array.find.js\");\n/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\n/**\r\n * BaseLogic\r\n * @package src/js/Base\r\n * @author  Angelo C. Bustamante <angelo01@simplexi.com.ph>\r\n * @since   2/16/2021\r\n * @version 1.0\r\n */\nvar BaseLogic = /*#__PURE__*/function () {\n  function BaseLogic() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, BaseLogic);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(BaseLogic, [{\n    key: \"getLanguageDetails\",\n    value:\n    /**\r\n     * Get language details\r\n     *\r\n     * @param oData\r\n     * @param sLocalCode\r\n     * @return {*|number|never|bigint|T|T}\r\n     */\n    function getLanguageDetails(oData, sLocalCode) {\n      return oData.find(function (aData) {\n        return aData.code === sLocalCode;\n      });\n    }\n    /**\r\n     * Check if value is empty\r\n     *\r\n     * @param mValue\r\n     */\n\n  }, {\n    key: \"isEmpty\",\n    value: function isEmpty(mValue) {\n      return mValue === '';\n    }\n    /**\r\n     * Check if value is not empty\r\n     *\r\n     * @param mValue\r\n     */\n\n  }, {\n    key: \"isNotEmpty\",\n    value: function isNotEmpty(mValue) {\n      return mValue !== '';\n    }\n  }, {\n    key: \"checkObjectIfValueExist\",\n    value: function checkObjectIfValueExist(oObject, mValue) {\n      var iExisitingCount = 0;\n      oObject.forEach(function (mObjectValue) {\n        if (mObjectValue === mValue) {\n          iExisitingCount++;\n        }\n      });\n      return iExisitingCount > 0;\n    }\n  }]);\n\n  return BaseLogic;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BaseLogic);\n\n//# sourceURL=webpack://LanguageSelector/./web_app-language-selector-base/src/js/Base/BaseLogic.js?");

/***/ }),

/***/ "./web_app-language-selector-base/src/js/Constants/App.js":
/*!***************************************************************!*\
  !*** ./web_app-language-selector-base/src/js/Constants/App.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * App constant\r\n * @package src/js/Constants\r\n * @author  Angelo C. Bustamante <angelo01@simplexi.com.ph>\r\n * @since   2/23/2021\r\n * @version 1.0\r\n */\nvar APP = {\n  SELECTED: 'selected'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (APP);\n\n//# sourceURL=webpack://LanguageSelector/./web_app-language-selector-base/src/js/Constants/App.js?");

/***/ }),

/***/ "./web_app-language-selector-base/src/js/Constants/Selectors.js":
/*!*********************************************************************!*\
  !*** ./web_app-language-selector-base/src/js/Constants/Selectors.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\r\n * Selector constant\r\n * @package src/js/Constants\r\n * @author  Angelo C. Bustamante <angelo01@simplexi.com.ph>\r\n * @since   2/16/2021\r\n * @version 1.0\r\n */\nvar SELECTORS = {\n  LANGUAGE_SELECTOR_DROPDOWN_TEXT: '.language-selector-dropdown-text',\n  LANGUAGE_SELECTOR_DROPDOWN_TEXT_SMALL: '.language-selector-dropdown-text--size-small',\n  LANGUAGE_SELECTOR_DROPDOWN_TEXT_LARGE: '.language-selector-dropdown-text--size-large',\n  LANGUAGE_SELECTOR_DROPDOWN_TEXT_FLAG: '.language-selector-dropdown-text-flag',\n  LANGUAGE_SELECTOR_DROPDOWN_TEXT_FLAG_SMALL: '.language-selector-dropdown-text-flag--size-small',\n  LANGUAGE_SELECTOR_DROPDOWN_TEXT_FLAG_LARGE: '.language-selector-dropdown-text-flag--size-large',\n  LANGUAGE_SELECTOR_DROPDOWN_FLAG: '.language-selector-dropdown-flag',\n  LANGUAGE_SELECTOR_DROPDOWN_FLAG_SMALL: '.language-selector-dropdown-flag--size-small',\n  LANGUAGE_SELECTOR_DROPDOWN_FLAG_LARGE: '.language-selector-dropdown-flag--size-large',\n  LANGUAGE_SELECTOR_HORIZONTAL_TEXT: '.language-selector-horizontal-text',\n  LANGUAGE_SELECTOR_HORIZONTAL_TEXT_SMALL: '.language-selector-horizontal-text--size-small',\n  LANGUAGE_SELECTOR_HORIZONTAL_TEXT_LARGE: '.language-selector-horizontal-text--size-large',\n  LANGUAGE_SELECTOR_HORIZONTAL_FLAG: '.language-selector-horizontal-flag',\n  LANGUAGE_SELECTOR_HORIZONTAL_FLAG_SMALL: '.language-selector-horizontal-flag--size-small',\n  LANGUAGE_SELECTOR_HORIZONTAL_FLAG_LARGE: '.language-selector-horizontal-flag--size-large',\n  ALL_LANGUAGE_SELECTOR_DROPDOWN_TEXT: '.language-selector-dropdown-text, .language-selector-dropdown-text--size-small, .language-selector-dropdown-text--size-large',\n  ALL_LANGUAGE_SELECTOR_DROPDOWN_TEXT_FLAG: '.language-selector-dropdown-text-flag, .language-selector-dropdown-text-flag--size-small, .language-selector-dropdown-text-flag--size-large',\n  ALL_LANGUAGE_SELECTOR_DROPDOWN_FLAG: '.language-selector-dropdown-flag, .language-selector-dropdown-flag--size-small, .language-selector-dropdown-flag--size-large',\n  ALL_LANGUAGE_SELECTOR_HORIZONTAL_TEXT: '.language-selector-horizontal-text, .language-selector-horizontal-text--size-small, .language-selector-horizontal-text--size-large',\n  ALL_LANGUAGE_SELECTOR_HORIZONTAL_FLAG: '.language-selector-horizontal-flag, .language-selector-horizontal-flag--size-small, .language-selector-horizontal-flag--size-large',\n  ALL_DROPDOWN: '.language-selector-dropdown-text, .language-selector-dropdown-text--size-small, .language-selector-dropdown-text--size-large, .language-selector-dropdown-text-flag, .language-selector-dropdown-text-flag--size-small, .language-selector-dropdown-text-flag--size-large, .language-selector-dropdown-flag, .language-selector-dropdown-flag--size-small, .language-selector-dropdown-flag--size-large',\n  DROPDOWN: '.web_app-language-selector.mDropDown',\n  DROPDOWN_VALUE: '.web_app-language-selector.mDropDown > .eDropDown',\n  HORIZONTAL_LIST_TEXT_OPTIONS: '.language-selector-horizontal-text--size-small > .web_app-language-selector > .list, .language-selector-horizontal-text > .web_app-language-selector > .list, .language-selector-horizontal-text--size-large > .web_app-language-selector > .list',\n  HORIZONTAL_LIST_FLAG_OPTIONS: '.language-selector-horizontal-flag--size-small > .web_app-language-selector > .list, .language-selector-horizontal-flag > .web_app-language-selector > .list, .language-selector-horizontal-flag--size-large > .web_app-language-selector > .list',\n  ALL_OPTIONS: '.language-selector-dropdown-text--size-small .list li, .language-selector-dropdown-text .list li, .language-selector-dropdown-text--size-large .list li, .language-selector-dropdown-text-flag--size-small .list li, .language-selector-dropdown-text-flag .list li, .language-selector-dropdown-text-flag--size-large .list li, .language-selector-dropdown-flag--size-small .list li, .language-selector-dropdown-flag .list li, .language-selector-dropdown-flag--size-large .list li, .language-selector-horizontal-text--size-small .list li, .language-selector-horizontal-text .list li, .language-selector-horizontal-text--size-large .list li, .language-selector-horizontal-flag--size-small .list li, .language-selector-horizontal-flag .list li, .language-selector-horizontal-flag--size-large .list li',\n  ALL_OPTIONS_SELECTED: '.language-selector-dropdown-text--size-small .list li.selected, .language-selector-dropdown-text .list li.selected, .language-selector-dropdown-text--size-large .list li.selected, .language-selector-dropdown-text-flag--size-small .list li.selected, .language-selector-dropdown-text-flag .list li.selected, .language-selector-dropdown-text-flag--size-large .list li.selected, .language-selector-dropdown-flag--size-small .list li.selected, .language-selector-dropdown-flag .list li.selected, .language-selector-dropdown-flag--size-large .list li.selected, .language-selector-horizontal-text--size-small .list li.selected, .language-selector-horizontal-text .list li.selected, .language-selector-horizontal-text--size-large .list li.selected, .language-selector-horizontal-flag--size-small .list li.selected, .language-selector-horizontal-flag .list li.selected, .language-selector-horizontal-flag--size-large .list li.selected',\n  DROPDOWN_CLICKABLE: '.web_app-language-selector.mDropDown > .eDropDown, .web_app-language-selector.mDropDown > .eDropDown > a, .web_app-language-selector.mDropDown > .eDropDown > div, .web_app-language-selector.mDropDown > .eDropDown > span'\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (SELECTORS);\n\n//# sourceURL=webpack://LanguageSelector/./web_app-language-selector-base/src/js/Constants/Selectors.js?");

/***/ }),

/***/ "./web_app-language-selector-base/src/js/Controller/LanguageSelector.js":
/*!*****************************************************************************!*\
  !*** ./web_app-language-selector-base/src/js/Controller/LanguageSelector.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var Constants_Selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Constants/Selectors */ \"./web_app-language-selector-base/src/js/Constants/Selectors.js\");\n/* harmony import */ var Logic_LogicLanguageSelector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Logic/LogicLanguageSelector */ \"./web_app-language-selector-base/src/js/Logic/LogicLanguageSelector.js\");\n/* harmony import */ var Logic_LogicLanguageSelectorComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Logic/LogicLanguageSelectorComponent */ \"./web_app-language-selector-base/src/js/Logic/LogicLanguageSelectorComponent.js\");\n\n\n\n\n\n/**\r\n * LanguageSelector\r\n * @package src/js/Controller\r\n * @author  Angelo C. Bustamante <angelo01@simplexi.com.ph>\r\n * @since   2/11/2021\r\n * @version 1.0\r\n */\n\nvar LanguageSelector = /*#__PURE__*/function () {\n  /**\r\n   * Constructor for language selector\r\n   *\r\n   * @param oSetup\r\n   * @param fnCallback\r\n   */\n  function LanguageSelector(oSetup, fnCallback) {\n    var _this = this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LanguageSelector);\n\n    this.oSetup = oSetup;\n    this.LogicLanguageSelector = new Logic_LogicLanguageSelector__WEBPACK_IMPORTED_MODULE_3__.default(this.oSetup.locale, this.oSetup.locale_selected);\n    this.LogicLanguageSelectorComponent = new Logic_LogicLanguageSelectorComponent__WEBPACK_IMPORTED_MODULE_4__.default(this.oSetup.locale);\n\n    this._initLanguageSelector();\n\n    this.LogicLanguageSelectorComponent.addComponentEventListener(function (sLocale) {\n      _this.LogicLanguageSelectorComponent.closeDropdown();\n\n      var bSameLocale = _this._changeLocaleLanguageSelector(sLocale);\n\n      if (bSameLocale === false) {\n        fnCallback(sLocale);\n      }\n    });\n  }\n  /**\r\n   * Initialize language selector\r\n   *\r\n   * @private\r\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LanguageSelector, [{\n    key: \"_initLanguageSelector\",\n    value: function _initLanguageSelector() {\n      var aSelectedLanguages = this.LogicLanguageSelector.getSelectedLanguages();\n      this.LogicLanguageSelectorComponent.createComponent(Constants_Selectors__WEBPACK_IMPORTED_MODULE_2__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_TEXT, aSelectedLanguages);\n      this.LogicLanguageSelectorComponent.createComponent(Constants_Selectors__WEBPACK_IMPORTED_MODULE_2__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_TEXT_FLAG, aSelectedLanguages);\n      this.LogicLanguageSelectorComponent.createComponent(Constants_Selectors__WEBPACK_IMPORTED_MODULE_2__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_FLAG, aSelectedLanguages);\n      this.LogicLanguageSelectorComponent.createComponent(Constants_Selectors__WEBPACK_IMPORTED_MODULE_2__.default.ALL_LANGUAGE_SELECTOR_HORIZONTAL_TEXT, aSelectedLanguages);\n      this.LogicLanguageSelectorComponent.createComponent(Constants_Selectors__WEBPACK_IMPORTED_MODULE_2__.default.ALL_LANGUAGE_SELECTOR_HORIZONTAL_FLAG, aSelectedLanguages);\n    }\n    /**\r\n     * Get locale value of language selector\r\n     *\r\n     * @return {string | *}\r\n     */\n\n  }, {\n    key: \"getLocaleLanguageSelector\",\n    value: function getLocaleLanguageSelector() {\n      return this.oSetup.locale;\n    }\n    /**\r\n     * Change locale value of language selector\r\n     *\r\n     * @param sLocale\r\n     * @private\r\n     */\n\n  }, {\n    key: \"_changeLocaleLanguageSelector\",\n    value: function _changeLocaleLanguageSelector(sLocale) {\n      var bSameLocale = sLocale === this.oSetup.locale;\n\n      if (bSameLocale === false) {\n        this.LogicLanguageSelector.setSelectedLanguages(sLocale);\n        this.oSetup.locale = sLocale;\n        this.LogicLanguageSelectorComponent.closeDropdown();\n      }\n\n      return bSameLocale;\n    }\n  }]);\n\n  return LanguageSelector;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LanguageSelector);\n\n//# sourceURL=webpack://LanguageSelector/./web_app-language-selector-base/src/js/Controller/LanguageSelector.js?");

/***/ }),

/***/ "./web_app-language-selector-base/src/js/Libraries/Utility.js":
/*!*******************************************************************!*\
  !*** ./web_app-language-selector-base/src/js/Libraries/Utility.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n/**\r\n * Log error message\r\n *\r\n * @param iCode\r\n * @param sMessage\r\n */\nfunction logError(iCode, sMessage) {\n  var sErrorMsg = \"Cafe24 Language Selector: {code: \".concat(iCode, \"; message: \").concat(sMessage, \"}\");\n  console.error(sErrorMsg);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  logError: logError\n});\n\n//# sourceURL=webpack://LanguageSelector/./web_app-language-selector-base/src/js/Libraries/Utility.js?");

/***/ }),

/***/ "./web_app-language-selector-base/src/js/Logic/LogicLanguageSelector.js":
/*!*****************************************************************************!*\
  !*** ./web_app-language-selector-base/src/js/Logic/LogicLanguageSelector.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var core_js_modules_es_object_is_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.is.js */ \"./node_modules/core-js/modules/es.object.is.js\");\n/* harmony import */ var core_js_modules_es_object_is_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_is_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ \"./node_modules/core-js/modules/es.string.includes.js\");\n/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ \"./node_modules/core-js/modules/es.string.split.js\");\n/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! Constants/Selectors */ \"./web_app-language-selector-base/src/js/Constants/Selectors.js\");\n/* harmony import */ var Constants_App__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! Constants/App */ \"./web_app-language-selector-base/src/js/Constants/App.js\");\n/* harmony import */ var Libraries_Utility__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! Libraries/Utility */ \"./web_app-language-selector-base/src/js/Libraries/Utility.js\");\n/* harmony import */ var Base_BaseLogic__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! Base/BaseLogic */ \"./web_app-language-selector-base/src/js/Base/BaseLogic.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_14___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_13___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n/**\r\n * List of languages for language selector\r\n */\n\nvar LANGUAGES = __webpack_require__(/*! json/languages */ \"./web_app-language-selector-base/src/json/languages.json\");\n/**\r\n * LogicLanguageSelector\r\n * @package src/js/Logic\r\n * @author  Angelo C. Bustamante <angelo01@simplexi.com.ph>\r\n * @since   2/17/2021\r\n * @version 1.0\r\n */\n\n\nvar LogicLanguageSelector = /*#__PURE__*/function (_BaseLogic) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_12___default()(LogicLanguageSelector, _BaseLogic);\n\n  var _super = _createSuper(LogicLanguageSelector);\n\n  /**\r\n   * Cosntructor of bl language selector\r\n   *\r\n   * @param sLocale\r\n   * @param aLocaleSelected\r\n   */\n  function LogicLanguageSelector(sLocale, aLocaleSelected) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_10___default()(this, LogicLanguageSelector);\n\n    _this = _super.call(this);\n    _this.sLocale = sLocale;\n    _this.aLocaleSelected = aLocaleSelected;\n    return _this;\n  }\n  /**\r\n   * Get selected languages set by user\r\n   *\r\n   * @return {Array}\r\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_11___default()(LogicLanguageSelector, [{\n    key: \"getSelectedLanguages\",\n    value: function getSelectedLanguages() {\n      var aSelectedLanguages = [];\n      var sLocaleSelectedCode = '';\n\n      for (var iSelectedLocaleIndex = 0; iSelectedLocaleIndex < this.aLocaleSelected.length; iSelectedLocaleIndex++) {\n        sLocaleSelectedCode = this.aLocaleSelected[iSelectedLocaleIndex];\n        var oSelectedLanguageDetails = this.getLanguageDetails(LANGUAGES, sLocaleSelectedCode);\n\n        if (oSelectedLanguageDetails === undefined) {\n          var sMessage = \"Your locale_selected \".concat(sLocaleSelectedCode, \" is not existing\");\n          Libraries_Utility__WEBPACK_IMPORTED_MODULE_17__.default.logError(404, sMessage);\n        } else {\n          aSelectedLanguages.push(oSelectedLanguageDetails);\n        }\n      }\n\n      return aSelectedLanguages;\n    }\n    /**\r\n     * Set locale value\r\n     *\r\n     * @param sLocale\r\n     */\n\n  }, {\n    key: \"setSelectedLanguages\",\n    value: function setSelectedLanguages(sLocale) {\n      this.sLocale = sLocale;\n      var oDefaultValue = this.getLanguageDetails(this.getSelectedLanguages(), this.sLocale);\n\n      this._setLanguageSelectorDefaultValue(Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_TEXT, oDefaultValue);\n\n      this._setLanguageSelectorDefaultValue(Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_TEXT_FLAG, oDefaultValue);\n\n      this._setLanguageSelectorDefaultValue(Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_FLAG, oDefaultValue);\n\n      this._setLanguageSelectorDefaultValue(Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.ALL_LANGUAGE_SELECTOR_HORIZONTAL_TEXT, oDefaultValue);\n\n      this._setLanguageSelectorDefaultValue(Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.ALL_LANGUAGE_SELECTOR_HORIZONTAL_FLAG, oDefaultValue);\n    }\n    /**\r\n     * Set language selector default value\r\n     *\r\n     * @param sType\r\n     * @param oDefaultValue\r\n     * @private\r\n     */\n\n  }, {\n    key: \"_setLanguageSelectorDefaultValue\",\n    value: function _setLanguageSelectorDefaultValue(sType, oDefaultValue) {\n      var _oSelector, _oDropdownValue;\n\n      var oSelector = (_oSelector = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_oSelector, Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_TEXT, this._formatDropdownSelector(sType)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_oSelector, Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_TEXT_FLAG, this._formatDropdownSelector(sType)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_oSelector, Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_FLAG, this._formatDropdownSelector(sType)), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_oSelector, Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.ALL_LANGUAGE_SELECTOR_HORIZONTAL_TEXT, Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.HORIZONTAL_LIST_TEXT_OPTIONS), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_oSelector, Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.ALL_LANGUAGE_SELECTOR_HORIZONTAL_FLAG, Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.HORIZONTAL_LIST_FLAG_OPTIONS), _oSelector);\n      var oNodeValue = document.querySelectorAll(oSelector[sType]);\n      var oDropdownValue = (_oDropdownValue = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_oDropdownValue, Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_TEXT, oDefaultValue.name), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_oDropdownValue, Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_TEXT_FLAG, \"<a class=\\\"\".concat(oDefaultValue.flag, \"\\\"></a><span>\").concat(oDefaultValue.name, \"</span>\")), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9___default()(_oDropdownValue, Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_FLAG, \"<div class=\\\"\".concat(oDefaultValue.flag, \"\\\"></div>\")), _oDropdownValue);\n\n      for (var iNodeIndex = 0; iNodeIndex < oNodeValue.length; iNodeIndex++) {\n        this._removeSelectClass(sType, oNodeValue[iNodeIndex]);\n\n        this._addSelectedClass(sType, oNodeValue[iNodeIndex], oDefaultValue);\n\n        if (oDropdownValue[sType] !== undefined) {\n          oNodeValue[iNodeIndex].innerHTML = oDropdownValue[sType];\n        }\n      }\n    }\n    /**\r\n     * Add selected class\r\n     *\r\n     * @param sType\r\n     * @param oNode\r\n     * @param oDefaultValue\r\n     * @private\r\n     */\n\n  }, {\n    key: \"_addSelectedClass\",\n    value: function _addSelectedClass(sType, oNode, oDefaultValue) {\n      var oAllNodeLi = Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.ALL_DROPDOWN.includes(sType) ? oNode.nextSibling.querySelectorAll('li') : oNode.querySelectorAll('li');\n\n      for (var iNodeIndex = 0; iNodeIndex < oAllNodeLi.length; iNodeIndex++) {\n        var oNodeLi = oAllNodeLi[iNodeIndex];\n        var sClass = oNodeLi.getAttribute('value') === oDefaultValue.code ? Constants_App__WEBPACK_IMPORTED_MODULE_16__.default.SELECTED : '';\n        var bHasClass = this.isNotEmpty(sClass);\n\n        if (bHasClass === true) {\n          oNodeLi.classList.add(sClass);\n        }\n      }\n    }\n    /**\r\n     * Remove selected class\r\n     *\r\n     * @param sType\r\n     * @param oNode\r\n     * @private\r\n     */\n\n  }, {\n    key: \"_removeSelectClass\",\n    value: function _removeSelectClass(sType, oNode) {\n      var oNodeLiSelected = Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.ALL_DROPDOWN.includes(sType) ? oNode.nextSibling.querySelector('li.selected') : oNode.querySelector('li.selected');\n      oNodeLiSelected.classList.remove(Constants_App__WEBPACK_IMPORTED_MODULE_16__.default.SELECTED);\n    }\n    /**\r\n     * Format dropdown selector\r\n     *\r\n     * @param sType\r\n     * @return {string}\r\n     * @private\r\n     */\n\n  }, {\n    key: \"_formatDropdownSelector\",\n    value: function _formatDropdownSelector(sType) {\n      var aSelector = sType.split(', ');\n      var sAllDropdownSelector = '';\n      aSelector.forEach(function (sSelector, iIndex) {\n        var sEndElement = Object.is(aSelector.length - 1, iIndex) === true ? '' : ', ';\n        sAllDropdownSelector += \"\".concat(sSelector, \" > \").concat(Constants_Selectors__WEBPACK_IMPORTED_MODULE_15__.default.DROPDOWN_VALUE).concat(sEndElement);\n      });\n      return sAllDropdownSelector;\n    }\n  }]);\n\n  return LogicLanguageSelector;\n}(Base_BaseLogic__WEBPACK_IMPORTED_MODULE_18__.default);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogicLanguageSelector);\n\n//# sourceURL=webpack://LanguageSelector/./web_app-language-selector-base/src/js/Logic/LogicLanguageSelector.js?");

/***/ }),

/***/ "./web_app-language-selector-base/src/js/Logic/LogicLanguageSelectorComponent.js":
/*!**************************************************************************************!*\
  !*** ./web_app-language-selector-base/src/js/Logic/LogicLanguageSelectorComponent.js ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ \"./node_modules/core-js/modules/es.array.concat.js\");\n/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ \"./node_modules/core-js/modules/es.array.for-each.js\");\n/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ \"./node_modules/core-js/modules/es.function.name.js\");\n/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/defineProperty.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var Constants_Selectors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! Constants/Selectors */ \"./web_app-language-selector-base/src/js/Constants/Selectors.js\");\n/* harmony import */ var Constants_App__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! Constants/App */ \"./web_app-language-selector-base/src/js/Constants/App.js\");\n/* harmony import */ var Libraries_Utility__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! Libraries/Utility */ \"./web_app-language-selector-base/src/js/Libraries/Utility.js\");\n/* harmony import */ var Base_BaseLogic__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! Base/BaseLogic */ \"./web_app-language-selector-base/src/js/Base/BaseLogic.js\");\n\n\n\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_9___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_8___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n/**\r\n * LogicLanguageSelectorComponent\r\n * @package src/js/Logic\r\n * @author  Angelo C. Bustamante <angelo01@simplexi.com.ph>\r\n * @since   2/11/2021\r\n * @version 1.0\r\n */\n\nvar LogicLanguageSelectorComponent = /*#__PURE__*/function (_BaseLogic) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(LogicLanguageSelectorComponent, _BaseLogic);\n\n  var _super = _createSuper(LogicLanguageSelectorComponent);\n\n  /**\r\n   * Cosntructor of bl language selector\r\n   *\r\n   * @param sLocale\r\n   */\n  function LogicLanguageSelectorComponent(sLocale) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, LogicLanguageSelectorComponent);\n\n    _this = _super.call(this);\n    _this.sLocale = sLocale;\n    return _this;\n  }\n  /**\r\n   * Create language selector component\r\n   *\r\n   * @param sSelector\r\n   * @param aSelectedLanguages\r\n   */\n\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_6___default()(LogicLanguageSelectorComponent, [{\n    key: \"createComponent\",\n    value: function createComponent(sSelector, aSelectedLanguages) {\n      var oNodeLanguageSelector = document.querySelectorAll(sSelector);\n      var oDefaultValue = this.getLanguageDetails(aSelectedLanguages, this.sLocale);\n\n      if (oDefaultValue === undefined) {\n        return this._noLocalCode();\n      }\n\n      for (var iNodeIndex = 0; iNodeIndex < oNodeLanguageSelector.length; iNodeIndex++) {\n        var sHtml = this._getInitComponent(sSelector, oDefaultValue);\n\n        for (var iLanguageIndex = 0; iLanguageIndex < aSelectedLanguages.length; iLanguageIndex++) {\n          var sSelected = oDefaultValue.name === aSelectedLanguages[iLanguageIndex].name ? Constants_App__WEBPACK_IMPORTED_MODULE_11__.default.SELECTED : '';\n          var bHasFlag = this.isNotEmpty(aSelectedLanguages[iLanguageIndex].flag);\n          var sValue = \"value=\\\"\".concat(aSelectedLanguages[iLanguageIndex].code, \"\\\"\");\n          sHtml += \"<li class=\\\"\".concat(sSelected, \"\\\" \").concat(sValue, \">\");\n\n          switch (sSelector) {\n            case Constants_Selectors__WEBPACK_IMPORTED_MODULE_10__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_TEXT:\n              sHtml += \"\".concat(aSelectedLanguages[iLanguageIndex].name);\n              break;\n\n            case Constants_Selectors__WEBPACK_IMPORTED_MODULE_10__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_TEXT_FLAG:\n              this._noFlagError(aSelectedLanguages[iLanguageIndex]);\n\n              sHtml += \"<div class=\\\"web_app-language-selector__flag-option \".concat(aSelectedLanguages[iLanguageIndex].flag, \"\\\"></div><span>\").concat(aSelectedLanguages[iLanguageIndex].name, \"</span>\");\n              break;\n\n            case Constants_Selectors__WEBPACK_IMPORTED_MODULE_10__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_FLAG:\n              this._noFlagError(aSelectedLanguages[iLanguageIndex]);\n\n              if (bHasFlag === true) {\n                sHtml += \"<div class=\\\"web_app-language-selector__flag-option \".concat(aSelectedLanguages[iLanguageIndex].flag, \"\\\"></div>\");\n              }\n\n              break;\n\n            case Constants_Selectors__WEBPACK_IMPORTED_MODULE_10__.default.ALL_LANGUAGE_SELECTOR_HORIZONTAL_TEXT:\n              sHtml += \"<a>\".concat(aSelectedLanguages[iLanguageIndex].name, \"</a>\");\n              break;\n\n            case Constants_Selectors__WEBPACK_IMPORTED_MODULE_10__.default.ALL_LANGUAGE_SELECTOR_HORIZONTAL_FLAG:\n              this._noFlagError(aSelectedLanguages[iLanguageIndex]);\n\n              if (bHasFlag === true) {\n                sHtml += \"<a data-tooltip=\\\"\".concat(aSelectedLanguages[iLanguageIndex].name, \"\\\" class=\\\"web_app-language-selector__flag-option \").concat(aSelectedLanguages[iLanguageIndex].flag, \"\\\"></a>\");\n              }\n\n              break;\n          }\n\n          sHtml += '</li>';\n        }\n\n        sHtml += '</ul></div>';\n        oNodeLanguageSelector[iNodeIndex].innerHTML = sHtml;\n      }\n    }\n    /**\r\n     * Add click listener in all of the options in language selector\r\n     *\r\n     * @param fnCallback\r\n     */\n\n  }, {\n    key: \"addComponentEventListener\",\n    value: function addComponentEventListener(fnCallback) {\n      var _this2 = this;\n\n      var oOptions = document.querySelectorAll(Constants_Selectors__WEBPACK_IMPORTED_MODULE_10__.default.ALL_OPTIONS);\n      oOptions.forEach(function (oOption) {\n        oOption.addEventListener('click', function () {\n          var sLocale = oOption.getAttribute('value');\n          fnCallback(sLocale);\n        });\n      });\n      document.addEventListener('click', function (oEvent) {\n        var oDropdownValuesNode = document.querySelectorAll(Constants_Selectors__WEBPACK_IMPORTED_MODULE_10__.default.DROPDOWN_CLICKABLE);\n\n        if (_this2.checkObjectIfValueExist(oDropdownValuesNode, oEvent.target) === false) {\n          _this2.closeDropdown();\n        }\n      });\n    }\n    /**\r\n     * Close web_app language selector dropdown\r\n     */\n\n  }, {\n    key: \"closeDropdown\",\n    value: function closeDropdown() {\n      var oNodeDropdownItem = document.querySelectorAll(Constants_Selectors__WEBPACK_IMPORTED_MODULE_10__.default.DROPDOWN);\n\n      for (var iNodeIndex = 0; iNodeIndex < oNodeDropdownItem.length; iNodeIndex++) {\n        oNodeDropdownItem[iNodeIndex].classList.remove('show');\n      }\n    }\n    /**e\r\n     * Get init component for language selector\r\n     *\r\n     * @param sSelector\r\n     * @param oDefaultValue\r\n     * @return {string}\r\n     * @private\r\n     */\n\n  }, {\n    key: \"_getInitComponent\",\n    value: function _getInitComponent(sSelector, oDefaultValue) {\n      var _oInitComponent;\n\n      var oInitComponent = (_oInitComponent = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_oInitComponent, Constants_Selectors__WEBPACK_IMPORTED_MODULE_10__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_TEXT, \"<div class=\\\"web_app-language-selector mDropDown\\\"><p class=\\\"value eDropDown default\\\">\".concat(oDefaultValue.name, \"</p><ul class=\\\"list\\\">\")), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_oInitComponent, Constants_Selectors__WEBPACK_IMPORTED_MODULE_10__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_TEXT_FLAG, \"<div class=\\\"web_app-language-selector mDropDown\\\"><p class=\\\"value eDropDown default\\\"><a class=\\\"\".concat(oDefaultValue.flag, \"\\\" title=\\\"\").concat(oDefaultValue.name, \"\\\"></a><span>\").concat(oDefaultValue.name, \"</span></p><ul class=\\\"list\\\">\")), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_oInitComponent, Constants_Selectors__WEBPACK_IMPORTED_MODULE_10__.default.ALL_LANGUAGE_SELECTOR_DROPDOWN_FLAG, \"<div class=\\\"web_app-language-selector mDropDown\\\"><p class=\\\"value eDropDown default\\\"><a class=\\\"\".concat(oDefaultValue.flag, \"\\\" title=\\\"\").concat(oDefaultValue.name, \"\\\"></a></p><ul class=\\\"list\\\">\")), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_oInitComponent, Constants_Selectors__WEBPACK_IMPORTED_MODULE_10__.default.ALL_LANGUAGE_SELECTOR_HORIZONTAL_TEXT, \"<div class=\\\"web_app-language-selector\\\"><ul class=\\\"list\\\">\"), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(_oInitComponent, Constants_Selectors__WEBPACK_IMPORTED_MODULE_10__.default.ALL_LANGUAGE_SELECTOR_HORIZONTAL_FLAG, \"<div class=\\\"web_app-language-selector\\\"><ul class=\\\"list\\\">\"), _oInitComponent);\n      return oInitComponent[sSelector];\n    }\n    /**\r\n     * No flag error message in flag only\r\n     *\r\n     * @param oSelectedLanguages\r\n     * @private\r\n     */\n\n  }, {\n    key: \"_noFlagError\",\n    value: function _noFlagError(oSelectedLanguages) {\n      var bHasFlag = this.isEmpty(oSelectedLanguages.flag);\n\n      if (bHasFlag === true) {\n        var sMessage = \"The \".concat(oSelectedLanguages.name, \" locale doesn't have a flag\");\n        Libraries_Utility__WEBPACK_IMPORTED_MODULE_12__.default.logError(404, sMessage);\n      }\n    }\n    /**\r\n     * Locale is not existing in locale_selected\r\n     *\r\n     * @private\r\n     */\n\n  }, {\n    key: \"_noLocalCode\",\n    value: function _noLocalCode() {\n      var sMessage = \"Your set \".concat(this.sLocale, \" locale code is not included in locale_selected choices\");\n      Libraries_Utility__WEBPACK_IMPORTED_MODULE_12__.default.logError(404, sMessage);\n    }\n  }]);\n\n  return LogicLanguageSelectorComponent;\n}(Base_BaseLogic__WEBPACK_IMPORTED_MODULE_13__.default);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LogicLanguageSelectorComponent);\n\n//# sourceURL=webpack://LanguageSelector/./web_app-language-selector-base/src/js/Logic/LogicLanguageSelectorComponent.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/a-function.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-function.js ***!
  \******************************************************/
/***/ (function(module) {

eval("module.exports = function (it) {\n  if (typeof it != 'function') {\n    throw TypeError(String(it) + ' is not a function');\n  } return it;\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/a-function.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar create = __webpack_require__(/*! ../internals/object-create */ \"./node_modules/core-js/internals/object-create.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nvar UNSCOPABLES = wellKnownSymbol('unscopables');\nvar ArrayPrototype = Array.prototype;\n\n// Array.prototype[@@unscopables]\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\nif (ArrayPrototype[UNSCOPABLES] == undefined) {\n  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {\n    configurable: true,\n    value: create(null)\n  });\n}\n\n// add a key to Array.prototype[@@unscopables]\nmodule.exports = function (key) {\n  ArrayPrototype[UNSCOPABLES][key] = true;\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/add-to-unscopables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/advance-string-index.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/advance-string-index.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar charAt = __webpack_require__(/*! ../internals/string-multibyte */ \"./node_modules/core-js/internals/string-multibyte.js\").charAt;\n\n// `AdvanceStringIndex` abstract operation\n// https://tc39.es/ecma262/#sec-advancestringindex\nmodule.exports = function (S, index, unicode) {\n  return index + (unicode ? charAt(S, index).length : 1);\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/advance-string-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nmodule.exports = function (it) {\n  if (!isObject(it)) {\n    throw TypeError(String(it) + ' is not an object');\n  } return it;\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/an-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $forEach = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").forEach;\nvar arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ \"./node_modules/core-js/internals/array-method-is-strict.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js/internals/array-method-uses-to-length.js\");\n\nvar STRICT_METHOD = arrayMethodIsStrict('forEach');\nvar USES_TO_LENGTH = arrayMethodUsesToLength('forEach');\n\n// `Array.prototype.forEach` method implementation\n// https://tc39.es/ecma262/#sec-array.prototype.foreach\nmodule.exports = (!STRICT_METHOD || !USES_TO_LENGTH) ? function forEach(callbackfn /* , thisArg */) {\n  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n} : [].forEach;\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/array-for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ \"./node_modules/core-js/internals/to-absolute-index.js\");\n\n// `Array.prototype.{ indexOf, includes }` methods implementation\nvar createMethod = function (IS_INCLUDES) {\n  return function ($this, el, fromIndex) {\n    var O = toIndexedObject($this);\n    var length = toLength(O.length);\n    var index = toAbsoluteIndex(fromIndex, length);\n    var value;\n    // Array#includes uses SameValueZero equality algorithm\n    // eslint-disable-next-line no-self-compare\n    if (IS_INCLUDES && el != el) while (length > index) {\n      value = O[index++];\n      // eslint-disable-next-line no-self-compare\n      if (value != value) return true;\n    // Array#indexOf ignores holes, Array#includes - not\n    } else for (;length > index; index++) {\n      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;\n    } return !IS_INCLUDES && -1;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.includes` method\n  // https://tc39.es/ecma262/#sec-array.prototype.includes\n  includes: createMethod(true),\n  // `Array.prototype.indexOf` method\n  // https://tc39.es/ecma262/#sec-array.prototype.indexof\n  indexOf: createMethod(false)\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/array-includes.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-iteration.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/array-iteration.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var bind = __webpack_require__(/*! ../internals/function-bind-context */ \"./node_modules/core-js/internals/function-bind-context.js\");\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\n\nvar push = [].push;\n\n// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation\nvar createMethod = function (TYPE) {\n  var IS_MAP = TYPE == 1;\n  var IS_FILTER = TYPE == 2;\n  var IS_SOME = TYPE == 3;\n  var IS_EVERY = TYPE == 4;\n  var IS_FIND_INDEX = TYPE == 6;\n  var IS_FILTER_OUT = TYPE == 7;\n  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;\n  return function ($this, callbackfn, that, specificCreate) {\n    var O = toObject($this);\n    var self = IndexedObject(O);\n    var boundFunction = bind(callbackfn, that, 3);\n    var length = toLength(self.length);\n    var index = 0;\n    var create = specificCreate || arraySpeciesCreate;\n    var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;\n    var value, result;\n    for (;length > index; index++) if (NO_HOLES || index in self) {\n      value = self[index];\n      result = boundFunction(value, index, O);\n      if (TYPE) {\n        if (IS_MAP) target[index] = result; // map\n        else if (result) switch (TYPE) {\n          case 3: return true;              // some\n          case 5: return value;             // find\n          case 6: return index;             // findIndex\n          case 2: push.call(target, value); // filter\n        } else switch (TYPE) {\n          case 4: return false;             // every\n          case 7: push.call(target, value); // filterOut\n        }\n      }\n    }\n    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;\n  };\n};\n\nmodule.exports = {\n  // `Array.prototype.forEach` method\n  // https://tc39.es/ecma262/#sec-array.prototype.foreach\n  forEach: createMethod(0),\n  // `Array.prototype.map` method\n  // https://tc39.es/ecma262/#sec-array.prototype.map\n  map: createMethod(1),\n  // `Array.prototype.filter` method\n  // https://tc39.es/ecma262/#sec-array.prototype.filter\n  filter: createMethod(2),\n  // `Array.prototype.some` method\n  // https://tc39.es/ecma262/#sec-array.prototype.some\n  some: createMethod(3),\n  // `Array.prototype.every` method\n  // https://tc39.es/ecma262/#sec-array.prototype.every\n  every: createMethod(4),\n  // `Array.prototype.find` method\n  // https://tc39.es/ecma262/#sec-array.prototype.find\n  find: createMethod(5),\n  // `Array.prototype.findIndex` method\n  // https://tc39.es/ecma262/#sec-array.prototype.findIndex\n  findIndex: createMethod(6),\n  // `Array.prototype.filterOut` method\n  // https://github.com/tc39/proposal-array-filtering\n  filterOut: createMethod(7)\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/array-iteration.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-has-species-support.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-has-species-support.js ***!
  \****************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nmodule.exports = function (METHOD_NAME) {\n  // We can't use this feature detection in V8 since it causes\n  // deoptimization and serious performance degradation\n  // https://github.com/zloirock/core-js/issues/677\n  return V8_VERSION >= 51 || !fails(function () {\n    var array = [];\n    var constructor = array.constructor = {};\n    constructor[SPECIES] = function () {\n      return { foo: 1 };\n    };\n    return array[METHOD_NAME](Boolean).foo !== 1;\n  });\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/array-method-has-species-support.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-is-strict.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-is-strict.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = function (METHOD_NAME, argument) {\n  var method = [][METHOD_NAME];\n  return !!method && fails(function () {\n    // eslint-disable-next-line no-useless-call,no-throw-literal\n    method.call(null, argument || function () { throw 1; }, 1);\n  });\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/array-method-is-strict.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-method-uses-to-length.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-method-uses-to-length.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\n\nvar defineProperty = Object.defineProperty;\nvar cache = {};\n\nvar thrower = function (it) { throw it; };\n\nmodule.exports = function (METHOD_NAME, options) {\n  if (has(cache, METHOD_NAME)) return cache[METHOD_NAME];\n  if (!options) options = {};\n  var method = [][METHOD_NAME];\n  var ACCESSORS = has(options, 'ACCESSORS') ? options.ACCESSORS : false;\n  var argument0 = has(options, 0) ? options[0] : thrower;\n  var argument1 = has(options, 1) ? options[1] : undefined;\n\n  return cache[METHOD_NAME] = !!method && !fails(function () {\n    if (ACCESSORS && !DESCRIPTORS) return true;\n    var O = { length: -1 };\n\n    if (ACCESSORS) defineProperty(O, 1, { enumerable: true, get: thrower });\n    else O[1] = 1;\n\n    method.call(O, argument0, argument1);\n  });\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/array-method-uses-to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/array-species-create.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/array-species-create.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `ArraySpeciesCreate` abstract operation\n// https://tc39.es/ecma262/#sec-arrayspeciescreate\nmodule.exports = function (originalArray, length) {\n  var C;\n  if (isArray(originalArray)) {\n    C = originalArray.constructor;\n    // cross-realm fallback\n    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;\n    else if (isObject(C)) {\n      C = C[SPECIES];\n      if (C === null) C = undefined;\n    }\n  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/array-species-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ (function(module) {

eval("var toString = {}.toString;\n\nmodule.exports = function (it) {\n  return toString.call(it).slice(8, -1);\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/classof-raw.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar ownKeys = __webpack_require__(/*! ../internals/own-keys */ \"./node_modules/core-js/internals/own-keys.js\");\nvar getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\n\nmodule.exports = function (target, source) {\n  var keys = ownKeys(source);\n  var defineProperty = definePropertyModule.f;\n  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;\n  for (var i = 0; i < keys.length; i++) {\n    var key = keys[i];\n    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));\n  }\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/copy-constructor-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/correct-is-regexp-logic.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/correct-is-regexp-logic.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\nmodule.exports = function (METHOD_NAME) {\n  var regexp = /./;\n  try {\n    '/./'[METHOD_NAME](regexp);\n  } catch (error1) {\n    try {\n      regexp[MATCH] = false;\n      return '/./'[METHOD_NAME](regexp);\n    } catch (error2) { /* empty */ }\n  } return false;\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/correct-is-regexp-logic.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = DESCRIPTORS ? function (object, key, value) {\n  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));\n} : function (object, key, value) {\n  object[key] = value;\n  return object;\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/create-non-enumerable-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ (function(module) {

eval("module.exports = function (bitmap, value) {\n  return {\n    enumerable: !(bitmap & 1),\n    configurable: !(bitmap & 2),\n    writable: !(bitmap & 4),\n    value: value\n  };\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/create-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/create-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/create-property.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\n\nmodule.exports = function (object, key, value) {\n  var propertyKey = toPrimitive(key);\n  if (propertyKey in object) definePropertyModule.f(object, propertyKey, createPropertyDescriptor(0, value));\n  else object[propertyKey] = value;\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/create-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// Detect IE8's incomplete defineProperty implementation\nmodule.exports = !fails(function () {\n  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;\n});\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/descriptors.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\nvar document = global.document;\n// typeof document.createElement is 'object' in old IE\nvar EXISTS = isObject(document) && isObject(document.createElement);\n\nmodule.exports = function (it) {\n  return EXISTS ? document.createElement(it) : {};\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/document-create-element.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/dom-iterables.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/dom-iterables.js ***!
  \*********************************************************/
/***/ (function(module) {

eval("// iterable DOM collections\n// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods\nmodule.exports = {\n  CSSRuleList: 0,\n  CSSStyleDeclaration: 0,\n  CSSValueList: 0,\n  ClientRectList: 0,\n  DOMRectList: 0,\n  DOMStringList: 0,\n  DOMTokenList: 1,\n  DataTransferItemList: 0,\n  FileList: 0,\n  HTMLAllCollection: 0,\n  HTMLCollection: 0,\n  HTMLFormElement: 0,\n  HTMLSelectElement: 0,\n  MediaList: 0,\n  MimeTypeArray: 0,\n  NamedNodeMap: 0,\n  NodeList: 1,\n  PaintRequestList: 0,\n  Plugin: 0,\n  PluginArray: 0,\n  SVGLengthList: 0,\n  SVGNumberList: 0,\n  SVGPathSegList: 0,\n  SVGPointList: 0,\n  SVGStringList: 0,\n  SVGTransformList: 0,\n  SourceBufferList: 0,\n  StyleSheetList: 0,\n  TextTrackCueList: 0,\n  TextTrackList: 0,\n  TouchList: 0\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/dom-iterables.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('navigator', 'userAgent') || '';\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/engine-user-agent.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ \"./node_modules/core-js/internals/engine-user-agent.js\");\n\nvar process = global.process;\nvar versions = process && process.versions;\nvar v8 = versions && versions.v8;\nvar match, version;\n\nif (v8) {\n  match = v8.split('.');\n  version = match[0] + match[1];\n} else if (userAgent) {\n  match = userAgent.match(/Edge\\/(\\d+)/);\n  if (!match || match[1] >= 74) {\n    match = userAgent.match(/Chrome\\/(\\d+)/);\n    if (match) version = match[1];\n  }\n}\n\nmodule.exports = version && +version;\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/engine-v8-version.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ (function(module) {

eval("// IE8- don't enum bug keys\nmodule.exports = [\n  'constructor',\n  'hasOwnProperty',\n  'isPrototypeOf',\n  'propertyIsEnumerable',\n  'toLocaleString',\n  'toString',\n  'valueOf'\n];\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/enum-bug-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar getOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ \"./node_modules/core-js/internals/object-get-own-property-descriptor.js\").f;\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ \"./node_modules/core-js/internals/copy-constructor-properties.js\");\nvar isForced = __webpack_require__(/*! ../internals/is-forced */ \"./node_modules/core-js/internals/is-forced.js\");\n\n/*\n  options.target      - name of the target object\n  options.global      - target is the global object\n  options.stat        - export as static methods of target\n  options.proto       - export as prototype methods of target\n  options.real        - real prototype method for the `pure` version\n  options.forced      - export even if the native feature is available\n  options.bind        - bind methods to the target, required for the `pure` version\n  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version\n  options.unsafe      - use the simple assignment of property instead of delete + defineProperty\n  options.sham        - add a flag to not completely full polyfills\n  options.enumerable  - export as enumerable property\n  options.noTargetGet - prevent calling a getter on target\n*/\nmodule.exports = function (options, source) {\n  var TARGET = options.target;\n  var GLOBAL = options.global;\n  var STATIC = options.stat;\n  var FORCED, target, key, targetProperty, sourceProperty, descriptor;\n  if (GLOBAL) {\n    target = global;\n  } else if (STATIC) {\n    target = global[TARGET] || setGlobal(TARGET, {});\n  } else {\n    target = (global[TARGET] || {}).prototype;\n  }\n  if (target) for (key in source) {\n    sourceProperty = source[key];\n    if (options.noTargetGet) {\n      descriptor = getOwnPropertyDescriptor(target, key);\n      targetProperty = descriptor && descriptor.value;\n    } else targetProperty = target[key];\n    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);\n    // contained in target\n    if (!FORCED && targetProperty !== undefined) {\n      if (typeof sourceProperty === typeof targetProperty) continue;\n      copyConstructorProperties(sourceProperty, targetProperty);\n    }\n    // add a flag to not completely full polyfills\n    if (options.sham || (targetProperty && targetProperty.sham)) {\n      createNonEnumerableProperty(sourceProperty, 'sham', true);\n    }\n    // extend global\n    redefine(target, key, sourceProperty, options);\n  }\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/export.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ (function(module) {

eval("module.exports = function (exec) {\n  try {\n    return !!exec();\n  } catch (error) {\n    return true;\n  }\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/fails.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js ***!
  \******************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\n// TODO: Remove from `core-js@4` since it's moved to entry points\n__webpack_require__(/*! ../modules/es.regexp.exec */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\nvar redefine = __webpack_require__(/*! ../internals/redefine */ \"./node_modules/core-js/internals/redefine.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\nvar REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {\n  // #replace needs built-in support for named groups.\n  // #match works fine because it just return the exec results, even if it has\n  // a \"grops\" property.\n  var re = /./;\n  re.exec = function () {\n    var result = [];\n    result.groups = { a: '7' };\n    return result;\n  };\n  return ''.replace(re, '$<a>') !== '7';\n});\n\n// IE <= 11 replaces $0 with the whole match, as if it was $&\n// https://stackoverflow.com/questions/6024666/getting-ie-to-replace-a-regex-with-the-literal-string-0\nvar REPLACE_KEEPS_$0 = (function () {\n  return 'a'.replace(/./, '$0') === '$0';\n})();\n\nvar REPLACE = wellKnownSymbol('replace');\n// Safari <= 13.0.3(?) substitutes nth capture where n>m with an empty string\nvar REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = (function () {\n  if (/./[REPLACE]) {\n    return /./[REPLACE]('a', '$0') === '';\n  }\n  return false;\n})();\n\n// Chrome 51 has a buggy \"split\" implementation when RegExp#exec !== nativeExec\n// Weex JS has frozen built-in prototypes, so use try / catch wrapper\nvar SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {\n  var re = /(?:)/;\n  var originalExec = re.exec;\n  re.exec = function () { return originalExec.apply(this, arguments); };\n  var result = 'ab'.split(re);\n  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';\n});\n\nmodule.exports = function (KEY, length, exec, sham) {\n  var SYMBOL = wellKnownSymbol(KEY);\n\n  var DELEGATES_TO_SYMBOL = !fails(function () {\n    // String methods call symbol-named RegEp methods\n    var O = {};\n    O[SYMBOL] = function () { return 7; };\n    return ''[KEY](O) != 7;\n  });\n\n  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {\n    // Symbol-named RegExp methods call .exec\n    var execCalled = false;\n    var re = /a/;\n\n    if (KEY === 'split') {\n      // We can't use real regex here since it causes deoptimization\n      // and serious performance degradation in V8\n      // https://github.com/zloirock/core-js/issues/306\n      re = {};\n      // RegExp[@@split] doesn't call the regex's exec method, but first creates\n      // a new one. We need to return the patched regex when creating the new one.\n      re.constructor = {};\n      re.constructor[SPECIES] = function () { return re; };\n      re.flags = '';\n      re[SYMBOL] = /./[SYMBOL];\n    }\n\n    re.exec = function () { execCalled = true; return null; };\n\n    re[SYMBOL]('');\n    return !execCalled;\n  });\n\n  if (\n    !DELEGATES_TO_SYMBOL ||\n    !DELEGATES_TO_EXEC ||\n    (KEY === 'replace' && !(\n      REPLACE_SUPPORTS_NAMED_GROUPS &&\n      REPLACE_KEEPS_$0 &&\n      !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE\n    )) ||\n    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)\n  ) {\n    var nativeRegExpMethod = /./[SYMBOL];\n    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {\n      if (regexp.exec === regexpExec) {\n        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {\n          // The native String method already delegates to @@method (this\n          // polyfilled function), leasing to infinite recursion.\n          // We avoid it by directly calling the native @@method method.\n          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };\n        }\n        return { done: true, value: nativeMethod.call(str, regexp, arg2) };\n      }\n      return { done: false };\n    }, {\n      REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,\n      REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE\n    });\n    var stringMethod = methods[0];\n    var regexMethod = methods[1];\n\n    redefine(String.prototype, KEY, stringMethod);\n    redefine(RegExp.prototype, SYMBOL, length == 2\n      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)\n      // 21.2.5.11 RegExp.prototype[@@split](string, limit)\n      ? function (string, arg) { return regexMethod.call(string, this, arg); }\n      // 21.2.5.6 RegExp.prototype[@@match](string)\n      // 21.2.5.9 RegExp.prototype[@@search](string)\n      : function (string) { return regexMethod.call(string, this); }\n    );\n  }\n\n  if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-context.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-context.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\n\n// optional / simple context binding\nmodule.exports = function (fn, that, length) {\n  aFunction(fn);\n  if (that === undefined) return fn;\n  switch (length) {\n    case 0: return function () {\n      return fn.call(that);\n    };\n    case 1: return function (a) {\n      return fn.call(that, a);\n    };\n    case 2: return function (a, b) {\n      return fn.call(that, a, b);\n    };\n    case 3: return function (a, b, c) {\n      return fn.call(that, a, b, c);\n    };\n  }\n  return function (/* ...args */) {\n    return fn.apply(that, arguments);\n  };\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/function-bind-context.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! ../internals/path */ \"./node_modules/core-js/internals/path.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nvar aFunction = function (variable) {\n  return typeof variable == 'function' ? variable : undefined;\n};\n\nmodule.exports = function (namespace, method) {\n  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global[namespace])\n    : path[namespace] && path[namespace][method] || global[namespace] && global[namespace][method];\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/get-built-in.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var check = function (it) {\n  return it && it.Math == Math && it;\n};\n\n// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028\nmodule.exports =\n  // eslint-disable-next-line no-undef\n  check(typeof globalThis == 'object' && globalThis) ||\n  check(typeof window == 'object' && window) ||\n  check(typeof self == 'object' && self) ||\n  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||\n  // eslint-disable-next-line no-new-func\n  (function () { return this; })() || Function('return this')();\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/has.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/has.js ***!
  \***********************************************/
/***/ (function(module) {

eval("var hasOwnProperty = {}.hasOwnProperty;\n\nmodule.exports = function (it, key) {\n  return hasOwnProperty.call(it, key);\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/has.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ (function(module) {

eval("module.exports = {};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/hidden-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\n\nmodule.exports = getBuiltIn('document', 'documentElement');\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/html.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar createElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\n\n// Thank's IE8 for his funny defineProperty\nmodule.exports = !DESCRIPTORS && !fails(function () {\n  return Object.defineProperty(createElement('div'), 'a', {\n    get: function () { return 7; }\n  }).a != 7;\n});\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/ie8-dom-define.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\nvar split = ''.split;\n\n// fallback for non-array-like ES3 and non-enumerable old V8 strings\nmodule.exports = fails(function () {\n  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346\n  // eslint-disable-next-line no-prototype-builtins\n  return !Object('z').propertyIsEnumerable(0);\n}) ? function (it) {\n  return classof(it) == 'String' ? split.call(it, '') : Object(it);\n} : Object;\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\nvar functionToString = Function.toString;\n\n// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper\nif (typeof store.inspectSource != 'function') {\n  store.inspectSource = function (it) {\n    return functionToString.call(it);\n  };\n}\n\nmodule.exports = store.inspectSource;\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/inspect-source.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ \"./node_modules/core-js/internals/native-weak-map.js\");\nvar global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar objectHas = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar shared = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nvar WeakMap = global.WeakMap;\nvar set, get, has;\n\nvar enforce = function (it) {\n  return has(it) ? get(it) : set(it, {});\n};\n\nvar getterFor = function (TYPE) {\n  return function (it) {\n    var state;\n    if (!isObject(it) || (state = get(it)).type !== TYPE) {\n      throw TypeError('Incompatible receiver, ' + TYPE + ' required');\n    } return state;\n  };\n};\n\nif (NATIVE_WEAK_MAP) {\n  var store = shared.state || (shared.state = new WeakMap());\n  var wmget = store.get;\n  var wmhas = store.has;\n  var wmset = store.set;\n  set = function (it, metadata) {\n    metadata.facade = it;\n    wmset.call(store, it, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return wmget.call(store, it) || {};\n  };\n  has = function (it) {\n    return wmhas.call(store, it);\n  };\n} else {\n  var STATE = sharedKey('state');\n  hiddenKeys[STATE] = true;\n  set = function (it, metadata) {\n    metadata.facade = it;\n    createNonEnumerableProperty(it, STATE, metadata);\n    return metadata;\n  };\n  get = function (it) {\n    return objectHas(it, STATE) ? it[STATE] : {};\n  };\n  has = function (it) {\n    return objectHas(it, STATE);\n  };\n}\n\nmodule.exports = {\n  set: set,\n  get: get,\n  has: has,\n  enforce: enforce,\n  getterFor: getterFor\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/internal-state.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-array.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/is-array.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\n\n// `IsArray` abstract operation\n// https://tc39.es/ecma262/#sec-isarray\nmodule.exports = Array.isArray || function isArray(arg) {\n  return classof(arg) == 'Array';\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/is-array.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar replacement = /#|\\.prototype\\./;\n\nvar isForced = function (feature, detection) {\n  var value = data[normalize(feature)];\n  return value == POLYFILL ? true\n    : value == NATIVE ? false\n    : typeof detection == 'function' ? fails(detection)\n    : !!detection;\n};\n\nvar normalize = isForced.normalize = function (string) {\n  return String(string).replace(replacement, '.').toLowerCase();\n};\n\nvar data = isForced.data = {};\nvar NATIVE = isForced.NATIVE = 'N';\nvar POLYFILL = isForced.POLYFILL = 'P';\n\nmodule.exports = isForced;\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/is-forced.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ (function(module) {

eval("module.exports = function (it) {\n  return typeof it === 'object' ? it !== null : typeof it === 'function';\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/is-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ (function(module) {

eval("module.exports = false;\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/is-pure.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/is-regexp.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-regexp.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar classof = __webpack_require__(/*! ../internals/classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar MATCH = wellKnownSymbol('match');\n\n// `IsRegExp` abstract operation\n// https://tc39.es/ecma262/#sec-isregexp\nmodule.exports = function (it) {\n  var isRegExp;\n  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classof(it) == 'RegExp');\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/is-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nmodule.exports = !!Object.getOwnPropertySymbols && !fails(function () {\n  // Chrome 38 Symbol has incorrect toString conversion\n  // eslint-disable-next-line no-undef\n  return !String(Symbol());\n});\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/native-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\n\nvar WeakMap = global.WeakMap;\n\nmodule.exports = typeof WeakMap === 'function' && /native code/.test(inspectSource(WeakMap));\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/native-weak-map.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/not-a-regexp.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/not-a-regexp.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js/internals/is-regexp.js\");\n\nmodule.exports = function (it) {\n  if (isRegExp(it)) {\n    throw TypeError(\"The method doesn't accept regular expressions\");\n  } return it;\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/not-a-regexp.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar defineProperties = __webpack_require__(/*! ../internals/object-define-properties */ \"./node_modules/core-js/internals/object-define-properties.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\nvar html = __webpack_require__(/*! ../internals/html */ \"./node_modules/core-js/internals/html.js\");\nvar documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ \"./node_modules/core-js/internals/document-create-element.js\");\nvar sharedKey = __webpack_require__(/*! ../internals/shared-key */ \"./node_modules/core-js/internals/shared-key.js\");\n\nvar GT = '>';\nvar LT = '<';\nvar PROTOTYPE = 'prototype';\nvar SCRIPT = 'script';\nvar IE_PROTO = sharedKey('IE_PROTO');\n\nvar EmptyConstructor = function () { /* empty */ };\n\nvar scriptTag = function (content) {\n  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;\n};\n\n// Create object with fake `null` prototype: use ActiveX Object with cleared prototype\nvar NullProtoObjectViaActiveX = function (activeXDocument) {\n  activeXDocument.write(scriptTag(''));\n  activeXDocument.close();\n  var temp = activeXDocument.parentWindow.Object;\n  activeXDocument = null; // avoid memory leak\n  return temp;\n};\n\n// Create object with fake `null` prototype: use iframe Object with cleared prototype\nvar NullProtoObjectViaIFrame = function () {\n  // Thrash, waste and sodomy: IE GC bug\n  var iframe = documentCreateElement('iframe');\n  var JS = 'java' + SCRIPT + ':';\n  var iframeDocument;\n  iframe.style.display = 'none';\n  html.appendChild(iframe);\n  // https://github.com/zloirock/core-js/issues/475\n  iframe.src = String(JS);\n  iframeDocument = iframe.contentWindow.document;\n  iframeDocument.open();\n  iframeDocument.write(scriptTag('document.F=Object'));\n  iframeDocument.close();\n  return iframeDocument.F;\n};\n\n// Check for document.domain and active x support\n// No need to use active x approach when document.domain is not set\n// see https://github.com/es-shims/es5-shim/issues/150\n// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346\n// avoid IE GC bug\nvar activeXDocument;\nvar NullProtoObject = function () {\n  try {\n    /* global ActiveXObject */\n    activeXDocument = document.domain && new ActiveXObject('htmlfile');\n  } catch (error) { /* ignore */ }\n  NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();\n  var length = enumBugKeys.length;\n  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];\n  return NullProtoObject();\n};\n\nhiddenKeys[IE_PROTO] = true;\n\n// `Object.create` method\n// https://tc39.es/ecma262/#sec-object.create\nmodule.exports = Object.create || function create(O, Properties) {\n  var result;\n  if (O !== null) {\n    EmptyConstructor[PROTOTYPE] = anObject(O);\n    result = new EmptyConstructor();\n    EmptyConstructor[PROTOTYPE] = null;\n    // add \"__proto__\" for Object.getPrototypeOf polyfill\n    result[IE_PROTO] = O;\n  } else result = NullProtoObject();\n  return Properties === undefined ? result : defineProperties(result, Properties);\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/object-create.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar objectKeys = __webpack_require__(/*! ../internals/object-keys */ \"./node_modules/core-js/internals/object-keys.js\");\n\n// `Object.defineProperties` method\n// https://tc39.es/ecma262/#sec-object.defineproperties\nmodule.exports = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {\n  anObject(O);\n  var keys = objectKeys(Properties);\n  var length = keys.length;\n  var index = 0;\n  var key;\n  while (length > index) definePropertyModule.f(O, key = keys[index++], Properties[key]);\n  return O;\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/object-define-properties.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\n\nvar nativeDefineProperty = Object.defineProperty;\n\n// `Object.defineProperty` method\n// https://tc39.es/ecma262/#sec-object.defineproperty\nexports.f = DESCRIPTORS ? nativeDefineProperty : function defineProperty(O, P, Attributes) {\n  anObject(O);\n  P = toPrimitive(P, true);\n  anObject(Attributes);\n  if (IE8_DOM_DEFINE) try {\n    return nativeDefineProperty(O, P, Attributes);\n  } catch (error) { /* empty */ }\n  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');\n  if ('value' in Attributes) O[P] = Attributes.value;\n  return O;\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/object-define-property.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ \"./node_modules/core-js/internals/object-property-is-enumerable.js\");\nvar createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ \"./node_modules/core-js/internals/create-property-descriptor.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ \"./node_modules/core-js/internals/to-primitive.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ \"./node_modules/core-js/internals/ie8-dom-define.js\");\n\nvar nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// `Object.getOwnPropertyDescriptor` method\n// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor\nexports.f = DESCRIPTORS ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {\n  O = toIndexedObject(O);\n  P = toPrimitive(P, true);\n  if (IE8_DOM_DEFINE) try {\n    return nativeGetOwnPropertyDescriptor(O, P);\n  } catch (error) { /* empty */ }\n  if (has(O, P)) return createPropertyDescriptor(!propertyIsEnumerableModule.f.call(O, P), O[P]);\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/object-get-own-property-descriptor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\nvar hiddenKeys = enumBugKeys.concat('length', 'prototype');\n\n// `Object.getOwnPropertyNames` method\n// https://tc39.es/ecma262/#sec-object.getownpropertynames\nexports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {\n  return internalObjectKeys(O, hiddenKeys);\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/object-get-own-property-names.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("exports.f = Object.getOwnPropertySymbols;\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/object-get-own-property-symbols.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ \"./node_modules/core-js/internals/to-indexed-object.js\");\nvar indexOf = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").indexOf;\nvar hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ \"./node_modules/core-js/internals/hidden-keys.js\");\n\nmodule.exports = function (object, names) {\n  var O = toIndexedObject(object);\n  var i = 0;\n  var result = [];\n  var key;\n  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);\n  // Don't enum bug & hidden keys\n  while (names.length > i) if (has(O, key = names[i++])) {\n    ~indexOf(result, key) || result.push(key);\n  }\n  return result;\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/object-keys-internal.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ \"./node_modules/core-js/internals/object-keys-internal.js\");\nvar enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ \"./node_modules/core-js/internals/enum-bug-keys.js\");\n\n// `Object.keys` method\n// https://tc39.es/ecma262/#sec-object.keys\nmodule.exports = Object.keys || function keys(O) {\n  return internalObjectKeys(O, enumBugKeys);\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/object-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";
eval("\nvar nativePropertyIsEnumerable = {}.propertyIsEnumerable;\nvar getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;\n\n// Nashorn ~ JDK8 bug\nvar NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);\n\n// `Object.prototype.propertyIsEnumerable` method implementation\n// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable\nexports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {\n  var descriptor = getOwnPropertyDescriptor(this, V);\n  return !!descriptor && descriptor.enumerable;\n} : nativePropertyIsEnumerable;\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/object-property-is-enumerable.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ \"./node_modules/core-js/internals/get-built-in.js\");\nvar getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ \"./node_modules/core-js/internals/object-get-own-property-names.js\");\nvar getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ \"./node_modules/core-js/internals/object-get-own-property-symbols.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// all object keys, includes non-enumerable and symbols\nmodule.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {\n  var keys = getOwnPropertyNamesModule.f(anObject(it));\n  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;\n  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/own-keys.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/path.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/path.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\n\nmodule.exports = global;\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/path.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/redefine.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/redefine.js ***!
  \****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\nvar inspectSource = __webpack_require__(/*! ../internals/inspect-source */ \"./node_modules/core-js/internals/inspect-source.js\");\nvar InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ \"./node_modules/core-js/internals/internal-state.js\");\n\nvar getInternalState = InternalStateModule.get;\nvar enforceInternalState = InternalStateModule.enforce;\nvar TEMPLATE = String(String).split('String');\n\n(module.exports = function (O, key, value, options) {\n  var unsafe = options ? !!options.unsafe : false;\n  var simple = options ? !!options.enumerable : false;\n  var noTargetGet = options ? !!options.noTargetGet : false;\n  var state;\n  if (typeof value == 'function') {\n    if (typeof key == 'string' && !has(value, 'name')) {\n      createNonEnumerableProperty(value, 'name', key);\n    }\n    state = enforceInternalState(value);\n    if (!state.source) {\n      state.source = TEMPLATE.join(typeof key == 'string' ? key : '');\n    }\n  }\n  if (O === global) {\n    if (simple) O[key] = value;\n    else setGlobal(key, value);\n    return;\n  } else if (!unsafe) {\n    delete O[key];\n  } else if (!noTargetGet && O[key]) {\n    simple = true;\n  }\n  if (simple) O[key] = value;\n  else createNonEnumerableProperty(O, key, value);\n// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative\n})(Function.prototype, 'toString', function toString() {\n  return typeof this == 'function' && getInternalState(this).source || inspectSource(this);\n});\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/redefine.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec-abstract.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec-abstract.js ***!
  \****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var classof = __webpack_require__(/*! ./classof-raw */ \"./node_modules/core-js/internals/classof-raw.js\");\nvar regexpExec = __webpack_require__(/*! ./regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\n\n// `RegExpExec` abstract operation\n// https://tc39.es/ecma262/#sec-regexpexec\nmodule.exports = function (R, S) {\n  var exec = R.exec;\n  if (typeof exec === 'function') {\n    var result = exec.call(R, S);\n    if (typeof result !== 'object') {\n      throw TypeError('RegExp exec method returned something other than an Object or null');\n    }\n    return result;\n  }\n\n  if (classof(R) !== 'RegExp') {\n    throw TypeError('RegExp#exec called on incompatible receiver');\n  }\n\n  return regexpExec.call(R, S);\n};\n\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/regexp-exec-abstract.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-exec.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-exec.js ***!
  \*******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar regexpFlags = __webpack_require__(/*! ./regexp-flags */ \"./node_modules/core-js/internals/regexp-flags.js\");\nvar stickyHelpers = __webpack_require__(/*! ./regexp-sticky-helpers */ \"./node_modules/core-js/internals/regexp-sticky-helpers.js\");\n\nvar nativeExec = RegExp.prototype.exec;\n// This always refers to the native implementation, because the\n// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,\n// which loads this file before patching the method.\nvar nativeReplace = String.prototype.replace;\n\nvar patchedExec = nativeExec;\n\nvar UPDATES_LAST_INDEX_WRONG = (function () {\n  var re1 = /a/;\n  var re2 = /b*/g;\n  nativeExec.call(re1, 'a');\n  nativeExec.call(re2, 'a');\n  return re1.lastIndex !== 0 || re2.lastIndex !== 0;\n})();\n\nvar UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y || stickyHelpers.BROKEN_CARET;\n\n// nonparticipating capturing group, copied from es5-shim's String#split patch.\nvar NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;\n\nvar PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y;\n\nif (PATCH) {\n  patchedExec = function exec(str) {\n    var re = this;\n    var lastIndex, reCopy, match, i;\n    var sticky = UNSUPPORTED_Y && re.sticky;\n    var flags = regexpFlags.call(re);\n    var source = re.source;\n    var charsAdded = 0;\n    var strCopy = str;\n\n    if (sticky) {\n      flags = flags.replace('y', '');\n      if (flags.indexOf('g') === -1) {\n        flags += 'g';\n      }\n\n      strCopy = String(str).slice(re.lastIndex);\n      // Support anchored sticky behavior.\n      if (re.lastIndex > 0 && (!re.multiline || re.multiline && str[re.lastIndex - 1] !== '\\n')) {\n        source = '(?: ' + source + ')';\n        strCopy = ' ' + strCopy;\n        charsAdded++;\n      }\n      // ^(? + rx + ) is needed, in combination with some str slicing, to\n      // simulate the 'y' flag.\n      reCopy = new RegExp('^(?:' + source + ')', flags);\n    }\n\n    if (NPCG_INCLUDED) {\n      reCopy = new RegExp('^' + source + '$(?!\\\\s)', flags);\n    }\n    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;\n\n    match = nativeExec.call(sticky ? reCopy : re, strCopy);\n\n    if (sticky) {\n      if (match) {\n        match.input = match.input.slice(charsAdded);\n        match[0] = match[0].slice(charsAdded);\n        match.index = re.lastIndex;\n        re.lastIndex += match[0].length;\n      } else re.lastIndex = 0;\n    } else if (UPDATES_LAST_INDEX_WRONG && match) {\n      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;\n    }\n    if (NPCG_INCLUDED && match && match.length > 1) {\n      // Fix browsers whose `exec` methods don't consistently return `undefined`\n      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/\n      nativeReplace.call(match[0], reCopy, function () {\n        for (i = 1; i < arguments.length - 2; i++) {\n          if (arguments[i] === undefined) match[i] = undefined;\n        }\n      });\n    }\n\n    return match;\n  };\n}\n\nmodule.exports = patchedExec;\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/regexp-exec.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-flags.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-flags.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\n\n// `RegExp.prototype.flags` getter implementation\n// https://tc39.es/ecma262/#sec-get-regexp.prototype.flags\nmodule.exports = function () {\n  var that = anObject(this);\n  var result = '';\n  if (that.global) result += 'g';\n  if (that.ignoreCase) result += 'i';\n  if (that.multiline) result += 'm';\n  if (that.dotAll) result += 's';\n  if (that.unicode) result += 'u';\n  if (that.sticky) result += 'y';\n  return result;\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/regexp-flags.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/regexp-sticky-helpers.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/regexp-sticky-helpers.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar fails = __webpack_require__(/*! ./fails */ \"./node_modules/core-js/internals/fails.js\");\n\n// babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError,\n// so we use an intermediate function.\nfunction RE(s, f) {\n  return RegExp(s, f);\n}\n\nexports.UNSUPPORTED_Y = fails(function () {\n  // babel-minify transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError\n  var re = RE('a', 'y');\n  re.lastIndex = 2;\n  return re.exec('abcd') != null;\n});\n\nexports.BROKEN_CARET = fails(function () {\n  // https://bugzilla.mozilla.org/show_bug.cgi?id=773687\n  var re = RE('^r', 'gy');\n  re.lastIndex = 2;\n  return re.exec('str') != null;\n});\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/regexp-sticky-helpers.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ (function(module) {

eval("// `RequireObjectCoercible` abstract operation\n// https://tc39.es/ecma262/#sec-requireobjectcoercible\nmodule.exports = function (it) {\n  if (it == undefined) throw TypeError(\"Can't call method on \" + it);\n  return it;\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/require-object-coercible.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/***/ (function(module) {

eval("// `SameValue` abstract operation\n// https://tc39.es/ecma262/#sec-samevalue\nmodule.exports = Object.is || function is(x, y) {\n  // eslint-disable-next-line no-self-compare\n  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/same-value.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/set-global.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/set-global.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nmodule.exports = function (key, value) {\n  try {\n    createNonEnumerableProperty(global, key, value);\n  } catch (error) {\n    global[key] = value;\n  } return value;\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/set-global.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\n\nvar keys = shared('keys');\n\nmodule.exports = function (key) {\n  return keys[key] || (keys[key] = uid(key));\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/shared-key.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar setGlobal = __webpack_require__(/*! ../internals/set-global */ \"./node_modules/core-js/internals/set-global.js\");\n\nvar SHARED = '__core-js_shared__';\nvar store = global[SHARED] || setGlobal(SHARED, {});\n\nmodule.exports = store;\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/shared-store.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ \"./node_modules/core-js/internals/is-pure.js\");\nvar store = __webpack_require__(/*! ../internals/shared-store */ \"./node_modules/core-js/internals/shared-store.js\");\n\n(module.exports = function (key, value) {\n  return store[key] || (store[key] = value !== undefined ? value : {});\n})('versions', []).push({\n  version: '3.8.3',\n  mode: IS_PURE ? 'pure' : 'global',\n  copyright: '© 2021 Denis Pushkarev (zloirock.ru)'\n});\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/shared.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/species-constructor.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/internals/species-constructor.js ***!
  \***************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar aFunction = __webpack_require__(/*! ../internals/a-function */ \"./node_modules/core-js/internals/a-function.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\n\nvar SPECIES = wellKnownSymbol('species');\n\n// `SpeciesConstructor` abstract operation\n// https://tc39.es/ecma262/#sec-speciesconstructor\nmodule.exports = function (O, defaultConstructor) {\n  var C = anObject(O).constructor;\n  var S;\n  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? defaultConstructor : aFunction(S);\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/species-constructor.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/string-multibyte.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/string-multibyte.js ***!
  \************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\n// `String.prototype.{ codePointAt, at }` methods implementation\nvar createMethod = function (CONVERT_TO_STRING) {\n  return function ($this, pos) {\n    var S = String(requireObjectCoercible($this));\n    var position = toInteger(pos);\n    var size = S.length;\n    var first, second;\n    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;\n    first = S.charCodeAt(position);\n    return first < 0xD800 || first > 0xDBFF || position + 1 === size\n      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF\n        ? CONVERT_TO_STRING ? S.charAt(position) : first\n        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;\n  };\n};\n\nmodule.exports = {\n  // `String.prototype.codePointAt` method\n  // https://tc39.es/ecma262/#sec-string.prototype.codepointat\n  codeAt: createMethod(false),\n  // `String.prototype.at` method\n  // https://github.com/mathiasbynens/String.prototype.at\n  charAt: createMethod(true)\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/string-multibyte.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar max = Math.max;\nvar min = Math.min;\n\n// Helper for a popular repeating case of the spec:\n// Let integer be ? ToInteger(index).\n// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).\nmodule.exports = function (index, length) {\n  var integer = toInteger(index);\n  return integer < 0 ? max(integer + length, 0) : min(integer, length);\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/to-absolute-index.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("// toObject with fallback for non-array-like ES3 strings\nvar IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ \"./node_modules/core-js/internals/indexed-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\nmodule.exports = function (it) {\n  return IndexedObject(requireObjectCoercible(it));\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/to-indexed-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-integer.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer.js ***!
  \******************************************************/
/***/ (function(module) {

eval("var ceil = Math.ceil;\nvar floor = Math.floor;\n\n// `ToInteger` abstract operation\n// https://tc39.es/ecma262/#sec-tointeger\nmodule.exports = function (argument) {\n  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/to-integer.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var toInteger = __webpack_require__(/*! ../internals/to-integer */ \"./node_modules/core-js/internals/to-integer.js\");\n\nvar min = Math.min;\n\n// `ToLength` abstract operation\n// https://tc39.es/ecma262/#sec-tolength\nmodule.exports = function (argument) {\n  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/to-length.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\n\n// `ToObject` abstract operation\n// https://tc39.es/ecma262/#sec-toobject\nmodule.exports = function (argument) {\n  return Object(requireObjectCoercible(argument));\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/to-object.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\n\n// `ToPrimitive` abstract operation\n// https://tc39.es/ecma262/#sec-toprimitive\n// instead of the ES6 spec version, we didn't implement @@toPrimitive case\n// and the second argument - flag - preferred type is a string\nmodule.exports = function (input, PREFERRED_STRING) {\n  if (!isObject(input)) return input;\n  var fn, val;\n  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;\n  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;\n  throw TypeError(\"Can't convert object to primitive value\");\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/to-primitive.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ (function(module) {

eval("var id = 0;\nvar postfix = Math.random();\n\nmodule.exports = function (key) {\n  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\n\nmodule.exports = NATIVE_SYMBOL\n  // eslint-disable-next-line no-undef\n  && !Symbol.sham\n  // eslint-disable-next-line no-undef\n  && typeof Symbol.iterator == 'symbol';\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/use-symbol-as-uid.js?");

/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar shared = __webpack_require__(/*! ../internals/shared */ \"./node_modules/core-js/internals/shared.js\");\nvar has = __webpack_require__(/*! ../internals/has */ \"./node_modules/core-js/internals/has.js\");\nvar uid = __webpack_require__(/*! ../internals/uid */ \"./node_modules/core-js/internals/uid.js\");\nvar NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ \"./node_modules/core-js/internals/native-symbol.js\");\nvar USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ \"./node_modules/core-js/internals/use-symbol-as-uid.js\");\n\nvar WellKnownSymbolsStore = shared('wks');\nvar Symbol = global.Symbol;\nvar createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;\n\nmodule.exports = function (name) {\n  if (!has(WellKnownSymbolsStore, name)) {\n    if (NATIVE_SYMBOL && has(Symbol, name)) WellKnownSymbolsStore[name] = Symbol[name];\n    else WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);\n  } return WellKnownSymbolsStore[name];\n};\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/internals/well-known-symbol.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\nvar isArray = __webpack_require__(/*! ../internals/is-array */ \"./node_modules/core-js/internals/is-array.js\");\nvar isObject = __webpack_require__(/*! ../internals/is-object */ \"./node_modules/core-js/internals/is-object.js\");\nvar toObject = __webpack_require__(/*! ../internals/to-object */ \"./node_modules/core-js/internals/to-object.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar createProperty = __webpack_require__(/*! ../internals/create-property */ \"./node_modules/core-js/internals/create-property.js\");\nvar arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ \"./node_modules/core-js/internals/array-species-create.js\");\nvar arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ \"./node_modules/core-js/internals/array-method-has-species-support.js\");\nvar wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ \"./node_modules/core-js/internals/well-known-symbol.js\");\nvar V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ \"./node_modules/core-js/internals/engine-v8-version.js\");\n\nvar IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');\nvar MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;\nvar MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';\n\n// We can't use this feature detection in V8 since it causes\n// deoptimization and serious performance degradation\n// https://github.com/zloirock/core-js/issues/679\nvar IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {\n  var array = [];\n  array[IS_CONCAT_SPREADABLE] = false;\n  return array.concat()[0] !== array;\n});\n\nvar SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');\n\nvar isConcatSpreadable = function (O) {\n  if (!isObject(O)) return false;\n  var spreadable = O[IS_CONCAT_SPREADABLE];\n  return spreadable !== undefined ? !!spreadable : isArray(O);\n};\n\nvar FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;\n\n// `Array.prototype.concat` method\n// https://tc39.es/ecma262/#sec-array.prototype.concat\n// with adding support of @@isConcatSpreadable and @@species\n$({ target: 'Array', proto: true, forced: FORCED }, {\n  concat: function concat(arg) { // eslint-disable-line no-unused-vars\n    var O = toObject(this);\n    var A = arraySpeciesCreate(O, 0);\n    var n = 0;\n    var i, k, length, len, E;\n    for (i = -1, length = arguments.length; i < length; i++) {\n      E = i === -1 ? O : arguments[i];\n      if (isConcatSpreadable(E)) {\n        len = toLength(E.length);\n        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);\n      } else {\n        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);\n        createProperty(A, n++, E);\n      }\n    }\n    A.length = n;\n    return A;\n  }\n});\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/modules/es.array.concat.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.find.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.find.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $find = __webpack_require__(/*! ../internals/array-iteration */ \"./node_modules/core-js/internals/array-iteration.js\").find;\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js/internals/array-method-uses-to-length.js\");\n\nvar FIND = 'find';\nvar SKIPS_HOLES = true;\n\nvar USES_TO_LENGTH = arrayMethodUsesToLength(FIND);\n\n// Shouldn't skip holes\nif (FIND in []) Array(1)[FIND](function () { SKIPS_HOLES = false; });\n\n// `Array.prototype.find` method\n// https://tc39.es/ecma262/#sec-array.prototype.find\n$({ target: 'Array', proto: true, forced: SKIPS_HOLES || !USES_TO_LENGTH }, {\n  find: function find(callbackfn /* , that = undefined */) {\n    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables(FIND);\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/modules/es.array.find.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.for-each.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.for-each.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js/internals/array-for-each.js\");\n\n// `Array.prototype.forEach` method\n// https://tc39.es/ecma262/#sec-array.prototype.foreach\n$({ target: 'Array', proto: true, forced: [].forEach != forEach }, {\n  forEach: forEach\n});\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/modules/es.array.for-each.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar $includes = __webpack_require__(/*! ../internals/array-includes */ \"./node_modules/core-js/internals/array-includes.js\").includes;\nvar addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ \"./node_modules/core-js/internals/add-to-unscopables.js\");\nvar arrayMethodUsesToLength = __webpack_require__(/*! ../internals/array-method-uses-to-length */ \"./node_modules/core-js/internals/array-method-uses-to-length.js\");\n\nvar USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', { ACCESSORS: true, 1: 0 });\n\n// `Array.prototype.includes` method\n// https://tc39.es/ecma262/#sec-array.prototype.includes\n$({ target: 'Array', proto: true, forced: !USES_TO_LENGTH }, {\n  includes: function includes(el /* , fromIndex = 0 */) {\n    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables\naddToUnscopables('includes');\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/modules/es.array.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.function.name.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.function.name.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ \"./node_modules/core-js/internals/descriptors.js\");\nvar defineProperty = __webpack_require__(/*! ../internals/object-define-property */ \"./node_modules/core-js/internals/object-define-property.js\").f;\n\nvar FunctionPrototype = Function.prototype;\nvar FunctionPrototypeToString = FunctionPrototype.toString;\nvar nameRE = /^\\s*function ([^ (]*)/;\nvar NAME = 'name';\n\n// Function instances `.name` property\n// https://tc39.es/ecma262/#sec-function-instances-name\nif (DESCRIPTORS && !(NAME in FunctionPrototype)) {\n  defineProperty(FunctionPrototype, NAME, {\n    configurable: true,\n    get: function () {\n      try {\n        return FunctionPrototypeToString.call(this).match(nameRE)[1];\n      } catch (error) {\n        return '';\n      }\n    }\n  });\n}\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/modules/es.function.name.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.object.is.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.is.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar is = __webpack_require__(/*! ../internals/same-value */ \"./node_modules/core-js/internals/same-value.js\");\n\n// `Object.is` method\n// https://tc39.es/ecma262/#sec-object.is\n$({ target: 'Object', stat: true }, {\n  is: is\n});\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/modules/es.object.is.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.regexp.exec.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.exec.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar exec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\n\n// `RegExp.prototype.exec` method\n// https://tc39.es/ecma262/#sec-regexp.prototype.exec\n$({ target: 'RegExp', proto: true, forced: /./.exec !== exec }, {\n  exec: exec\n});\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/modules/es.regexp.exec.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.includes.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar $ = __webpack_require__(/*! ../internals/export */ \"./node_modules/core-js/internals/export.js\");\nvar notARegExp = __webpack_require__(/*! ../internals/not-a-regexp */ \"./node_modules/core-js/internals/not-a-regexp.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar correctIsRegExpLogic = __webpack_require__(/*! ../internals/correct-is-regexp-logic */ \"./node_modules/core-js/internals/correct-is-regexp-logic.js\");\n\n// `String.prototype.includes` method\n// https://tc39.es/ecma262/#sec-string.prototype.includes\n$({ target: 'String', proto: true, forced: !correctIsRegExpLogic('includes') }, {\n  includes: function includes(searchString /* , position = 0 */) {\n    return !!~String(requireObjectCoercible(this))\n      .indexOf(notARegExp(searchString), arguments.length > 1 ? arguments[1] : undefined);\n  }\n});\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/modules/es.string.includes.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
eval("\nvar fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ \"./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js\");\nvar isRegExp = __webpack_require__(/*! ../internals/is-regexp */ \"./node_modules/core-js/internals/is-regexp.js\");\nvar anObject = __webpack_require__(/*! ../internals/an-object */ \"./node_modules/core-js/internals/an-object.js\");\nvar requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ \"./node_modules/core-js/internals/require-object-coercible.js\");\nvar speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ \"./node_modules/core-js/internals/species-constructor.js\");\nvar advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ \"./node_modules/core-js/internals/advance-string-index.js\");\nvar toLength = __webpack_require__(/*! ../internals/to-length */ \"./node_modules/core-js/internals/to-length.js\");\nvar callRegExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ \"./node_modules/core-js/internals/regexp-exec-abstract.js\");\nvar regexpExec = __webpack_require__(/*! ../internals/regexp-exec */ \"./node_modules/core-js/internals/regexp-exec.js\");\nvar fails = __webpack_require__(/*! ../internals/fails */ \"./node_modules/core-js/internals/fails.js\");\n\nvar arrayPush = [].push;\nvar min = Math.min;\nvar MAX_UINT32 = 0xFFFFFFFF;\n\n// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError\nvar SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });\n\n// @@split logic\nfixRegExpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {\n  var internalSplit;\n  if (\n    'abbc'.split(/(b)*/)[1] == 'c' ||\n    'test'.split(/(?:)/, -1).length != 4 ||\n    'ab'.split(/(?:ab)*/).length != 2 ||\n    '.'.split(/(.?)(.?)/).length != 4 ||\n    '.'.split(/()()/).length > 1 ||\n    ''.split(/.?/).length\n  ) {\n    // based on es5-shim implementation, need to rework it\n    internalSplit = function (separator, limit) {\n      var string = String(requireObjectCoercible(this));\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (separator === undefined) return [string];\n      // If `separator` is not a regex, use native split\n      if (!isRegExp(separator)) {\n        return nativeSplit.call(string, separator, lim);\n      }\n      var output = [];\n      var flags = (separator.ignoreCase ? 'i' : '') +\n                  (separator.multiline ? 'm' : '') +\n                  (separator.unicode ? 'u' : '') +\n                  (separator.sticky ? 'y' : '');\n      var lastLastIndex = 0;\n      // Make `global` and avoid `lastIndex` issues by working with a copy\n      var separatorCopy = new RegExp(separator.source, flags + 'g');\n      var match, lastIndex, lastLength;\n      while (match = regexpExec.call(separatorCopy, string)) {\n        lastIndex = separatorCopy.lastIndex;\n        if (lastIndex > lastLastIndex) {\n          output.push(string.slice(lastLastIndex, match.index));\n          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));\n          lastLength = match[0].length;\n          lastLastIndex = lastIndex;\n          if (output.length >= lim) break;\n        }\n        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop\n      }\n      if (lastLastIndex === string.length) {\n        if (lastLength || !separatorCopy.test('')) output.push('');\n      } else output.push(string.slice(lastLastIndex));\n      return output.length > lim ? output.slice(0, lim) : output;\n    };\n  // Chakra, V8\n  } else if ('0'.split(undefined, 0).length) {\n    internalSplit = function (separator, limit) {\n      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);\n    };\n  } else internalSplit = nativeSplit;\n\n  return [\n    // `String.prototype.split` method\n    // https://tc39.es/ecma262/#sec-string.prototype.split\n    function split(separator, limit) {\n      var O = requireObjectCoercible(this);\n      var splitter = separator == undefined ? undefined : separator[SPLIT];\n      return splitter !== undefined\n        ? splitter.call(separator, O, limit)\n        : internalSplit.call(String(O), separator, limit);\n    },\n    // `RegExp.prototype[@@split]` method\n    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split\n    //\n    // NOTE: This cannot be properly polyfilled in engines that don't support\n    // the 'y' flag.\n    function (regexp, limit) {\n      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);\n      if (res.done) return res.value;\n\n      var rx = anObject(regexp);\n      var S = String(this);\n      var C = speciesConstructor(rx, RegExp);\n\n      var unicodeMatching = rx.unicode;\n      var flags = (rx.ignoreCase ? 'i' : '') +\n                  (rx.multiline ? 'm' : '') +\n                  (rx.unicode ? 'u' : '') +\n                  (SUPPORTS_Y ? 'y' : 'g');\n\n      // ^(? + rx + ) is needed, in combination with some S slicing, to\n      // simulate the 'y' flag.\n      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);\n      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;\n      if (lim === 0) return [];\n      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];\n      var p = 0;\n      var q = 0;\n      var A = [];\n      while (q < S.length) {\n        splitter.lastIndex = SUPPORTS_Y ? q : 0;\n        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));\n        var e;\n        if (\n          z === null ||\n          (e = min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p\n        ) {\n          q = advanceStringIndex(S, q, unicodeMatching);\n        } else {\n          A.push(S.slice(p, q));\n          if (A.length === lim) return A;\n          for (var i = 1; i <= z.length - 1; i++) {\n            A.push(z[i]);\n            if (A.length === lim) return A;\n          }\n          q = p = e;\n        }\n      }\n      A.push(S.slice(p));\n      return A;\n    }\n  ];\n}, !SUPPORTS_Y);\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/modules/es.string.split.js?");

/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var global = __webpack_require__(/*! ../internals/global */ \"./node_modules/core-js/internals/global.js\");\nvar DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ \"./node_modules/core-js/internals/dom-iterables.js\");\nvar forEach = __webpack_require__(/*! ../internals/array-for-each */ \"./node_modules/core-js/internals/array-for-each.js\");\nvar createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ \"./node_modules/core-js/internals/create-non-enumerable-property.js\");\n\nfor (var COLLECTION_NAME in DOMIterables) {\n  var Collection = global[COLLECTION_NAME];\n  var CollectionPrototype = Collection && Collection.prototype;\n  // some Chrome versions have non-configurable methods on DOMTokenList\n  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {\n    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);\n  } catch (error) {\n    CollectionPrototype.forEach = forEach;\n  }\n}\n\n\n//# sourceURL=webpack://LanguageSelector/./node_modules/core-js/modules/web.dom-collections.for-each.js?");

/***/ }),

/***/ "./web_app-language-selector-base/src/scss/language_selector.scss":
/*!***********************************************************************!*\
  !*** ./web_app-language-selector-base/src/scss/language_selector.scss ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"css/language_selector.min.css\");\n\n//# sourceURL=webpack://LanguageSelector/./web_app-language-selector-base/src/scss/language_selector.scss?");

/***/ }),

/***/ "./web_app-language-selector-base/src/scss/language_selector_flag.scss":
/*!****************************************************************************!*\
  !*** ./web_app-language-selector-base/src/scss/language_selector_flag.scss ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"css/language_selector_flag.min.css\");\n\n//# sourceURL=webpack://LanguageSelector/./web_app-language-selector-base/src/scss/language_selector_flag.scss?");

/***/ }),

/***/ "./web_app-language-selector-base/src/images/flagSprite42.png":
/*!*******************************************************************!*\
  !*** ./web_app-language-selector-base/src/images/flagSprite42.png ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"/images/flagSprite42.png\");\n\n//# sourceURL=webpack://LanguageSelector/./web_app-language-selector-base/src/images/flagSprite42.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/assets";
/******/ 	}();
/******/
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./web_app-language-selector-base/src/scss/language_selector.scss");
/******/ 	__webpack_require__("./web_app-language-selector-base/src/scss/language_selector_flag.scss");
/******/ 	return __webpack_require__("./web_app-language-selector-base/src/index.js");
/******/ })()
;
});

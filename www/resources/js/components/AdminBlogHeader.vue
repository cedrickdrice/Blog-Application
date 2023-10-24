<template>
    <!-- Navbar -->
    <header class="header">
        <!-- BreadCrumbs -->
        <ol class="header__breadcrumbs">
            <li class="header__breadcrumbs-links">
                <a href="/" >
                    Home
                </a>
            </li>
            <li class="header__breadcrumbs-links">
                Blog Feed Name
            </li>
        </ol>
        <!-- // BreadCrumbs -->
        <div class="header__menu">
            <div class="header__logo-area">
                <img src="/images/header-logo.png" class="header__logo-img" alt="Admin Logo">
                <div class="header__app-name">Blog App</div>
            </div>
            <div class="header__links">
                <ul class="header__ul">
                    <li class="header__li">
                        <a href="#" class="header__a header__a--manual">[KR]manual</a>
                    </li>
                    <li class="language header__li">
                        <div class="language-selector-dropdown-text"></div>
                    </li>
                    <li class="header__li header__li--no-border">
                        <div class="header__a header__a--toggle">
                            [KR]Show on mall
                            <!-- Toggle switch -->
                            <label class="switchB">
                                <input type="checkbox" checked id="switchB__toggle"/>
                                <span class="slider toggle-subtle--styleB round big"></span>
                            </label>
                            <!-- // Toggle switch -->
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </header>
    <!-- // Navbar -->
</template>

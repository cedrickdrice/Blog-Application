<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title')</title>
    @foreach ($aExternalCssAsset as $sExternalCssAsset)
        <link rel="stylesheet" href="{{ $sExternalCssAsset }}">
    @endforeach
    @foreach ($aCssAsset as $sCssAsset)
        <link rel="stylesheet" href="{{ mix($sCssAsset) }}">
    @endforeach
</head>
<body>
<div id="app">
    <div id="main-wrap">
        <b-container fluid>
            <admin-blog-header></admin-blog-header>
            @yield('contents')
        </b-container>
    </div>
</div>
@foreach ($aExternalJsAsset as $sExternalJsAsset)
    <script src="{{ $sExternalJsAsset }}"></script>
@endforeach
@foreach ($aJsAsset as $sJsAsset)
    <script src="{{ mix($sJsAsset) }}"></script>
@endforeach
</body>
</html>


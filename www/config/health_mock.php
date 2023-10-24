<?php

return [
    "APP_CACHE"   => [
        "STATUS"        => "NOT OK",
        "LEVEL"         => 2,
        "MESSAGE"       => "Cache doesn't work as expected.",
        "RESPONSE_TIME" => 30
    ],
    "APP_SESSION" => [
        "STATUS"        => "OK",
        "LEVEL"         => 1,
        "MESSAGE"       => null,
        "RESPONSE_TIME" => 30
    ],
    "APP_STORAGE" => [
        "STATUS"        => "OK",
        "LEVEL"         => 1,
        "MESSAGE"       => null,
        "RESPONSE_TIME" => 30
    ],
    "APP_REDIS"   => [
        "STATUS"        => "NOT OK",
        "LEVEL"         => 1,
        "MESSAGE"       => "Connection timed out",
        "RESPONSE_TIME" => 30
    ],
    "APP_API"     => [
        "STATUS"        => "OK",
        "LEVEL"         => 1,
        "MESSAGE"       => null,
        "RESPONSE_TIME" => 30
    ],
    "API_DB"      => [
        "STATUS"        => "OK",
        "LEVEL"         => 1,
        "MESSAGE"       => null,
        "RESPONSE_TIME" => 30
    ],
    "API_REDIS"   => [
        "STATUS"        => "NOT OK",
        "LEVEL"         => 1,
        "MESSAGE"       => "Connection timed out",
        "RESPONSE_TIME" => 30
    ],
    'APP_HORIZON'   => [
        'STATUS'        => 'NOT OK',
        'LEVEL'         => 1,
        'MESSAGE'       => 'Connection timed out',
        'RESPONSE_TIME' => 30
    ],
];
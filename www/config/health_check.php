<?php

return [
    'route' => '/health-check',

    'api_route' => env('API_ROUTE', 'https://localhost-api'),

    'allowed_ip'  => env('HEALTH_CHECK_IP_WHITELIST'),

    'component' => [
        'logs',
        'session',
        'cache',
        'app_redis',
        'app_api',
        'db',
        'api_redis',
    ],

    'componentCheck' => [
        'APP_SESSION' => [
            'service_class' => Cafe24PH\HealthChecker\Services\Checker\SessionChecker::class,
            'keyword'       => 'session',
            'server'        => 'app',
            'error_message' => '',
            'level'         => 1,
            'session_key'   => 'health_session',
            'session_data'  => 'sample data for session'
        ],

        'APP_CACHE' => [
            'service_class' => Cafe24PH\HealthChecker\Services\Checker\CacheChecker::class,
            'keyword'       => 'cache',
            'server'        => 'app',
            'error_message' => '',
            'level'         => 1,
            'cache_key'     => 'health_cache',
            'cache_data'    => 'sample data for cache',
            'ttl'           => 2000
        ],

        'APP_LOGS' => [
            'service_class' => Cafe24PH\HealthChecker\Services\Checker\LogsChecker::class,
            'keyword'       => 'logs',
            'server'        => 'app',
            'error_message' => '',
            'level'         => 1,
            'file_name'     => 'health_file',
            'contents'      => 'sample data for storage(logs)'
        ],

        'APP_REDIS' => [
            'service_class' => Cafe24PH\HealthChecker\Services\Checker\RedisChecker::class,
            'keyword'       => 'app_redis',
            'server'        => 'app',
            'error_message' => '',
            'level'         => 1,
        ],

        'APP_API' => [
            'service_class' => Cafe24PH\HealthChecker\Services\Checker\ApiConnectionChecker::class,
            'keyword'       => 'app_api',
            'server'        => 'app',
            'error_message' => '',
            'level'         => 1,
            'timeout'       => 30,
        ],

        'API_DB' => [
            'service_class' => Cafe24PH\HealthChecker\Services\Checker\DatabaseChecker::class,
            'keyword'       => 'db',
            'server'        => 'api',
            'error_message' => '',
            'level'         => 1,
            'timeout'       => 30,
        ],

        'API_REDIS' => [
            'service_class' => Cafe24PH\HealthChecker\Services\Checker\RedisChecker::class,
            'keyword'       => 'api_redis',
            'server'        => 'api',
            'error_message' => '',
            'level'         => 1,
            'timeout'       => 30,
        ],

        'APP_QUEUE' => [
            'service_class' => Cafe24PH\HealthChecker\Services\Checker\QueueChecker::class,
            'keyword'       => 'app_queue',
            'server'        => 'app',
            'error_message' => '',
            'level'         => 1,
            'queue_host'    => env('HC_QUEUE_HOST', null),
            'queue_port'    => env('HC_QUEUE_PORT', null),
            'timeout'       => 30
        ],

        'APP_WORKER' => [
            'service_class' =>Cafe24PH\HealthChecker\Services\Checker\WorkerChecker::class,
            'keyword'       => 'app_worker',
            'server'        => 'app',
            'error_message' => '',
            'level'         => 1,
            'worker_host'   => env('HC_WORKER_HOST', null),
            'worker_port'   => env('HC_WORKER_PORT', null),
            'timeout'       => 30
        ],

        'API_SDEV'     => [
            'service_class' => Cafe24PH\HealthChecker\Services\HostingChecker\SdevApiConnectionChecker::class,
            'keyword'       => 'api_sdev',
            'server'        => 'app',
            'error_message' => '',
            'level'         => 1,
            'url'           => env('API_SDEV_URL', 'sdev-api-qa-001.web_app.com'),
            'ssl_key'       => env('API_SSL_KEY', null),
            'target_server' => env('API_SDEV_TARGET_SERVER', null),
            'user_id'       => env('API_SDEV_UID', null),
            'timeout'       => 30
        ],

        'API_HOSTING'  => [
            'service_class' => Cafe24PH\HealthChecker\Services\HostingChecker\HostingApiConnectionChecker::class,
            'keyword'       => 'api_hosting',
            'server'        => 'app',
            'error_message' => '',
            'level'         => 1,
            'url'           => env('API_HOSTING_URL', 'apigw-qa.hanpda.com/hostingapi_dev'),
            'user_id'       => env('API_HOSTING_UID', null),
            'cache_key'     => 'oauth_checker_tokens',
            'session_key'   => 'SESS_OAUTH_CHECKER_TOKEN',
            'client_id'     => env('HOSTING_CLIENT_ID', null),
            'client_secret' => env('HOSTING_CLIENT_SECRET', null),
            'timeout'       => 30
        ],

        'API_JIRA'     => [
            'service_class' => Cafe24PH\HealthChecker\Services\InternalChecker\JiraApiConnectionChecker::class,
            'keyword'       => 'api_jira',
            'server'        => 'app',
            'error_message' => '',
            'level'         => 1,
            'url'           => env('API_JIRA_URL', 'https://jira-fail.simplexi.com'),
            'timeout'       => 30
        ],

        'API_DKRON' => [
            'service_class' => Cafe24PH\HealthChecker\Services\Checker\DKronChecker::class,
            'keyword'       => 'dkron',
            'server'        => 'api',
            'error_message' => '',
            'level'         => 1,
            'dkron_url'     => env('DKRON_URL'),
            'timeout'       => 30
        ],

        'APP_HORIZON' => [
            'service_class' => Cafe24PH\HealthChecker\Services\Checker\HorizonChecker::class,
            'keyword'       => 'app_horizon',
            'server'        => 'app',
            'error_message' => '',
            'level'         => 1
        ]
    ]
];

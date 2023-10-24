FROM harbor-registry.web_app.com/ph-docker-image/centos7-apache-php7-3-laravel6-2:latest

USER root

ADD /docker /docker
ADD www/ /home/apps/www/

RUN cd /home/apps/www/ && composer install \
    && rsync -rt /docker/dev/apache/ /home/apps/apache \
    && rsync -rt /docker/dev/php/ /home/apps/php \
    && chown -R apache:apache /home/apps/apache \
    && chown -R apache:apache /home/apps/php \
    && setcap 'cap_net_bind_service=+eip' /home/apps/apache/bin/httpd \
    && find /home/apps/apache -type d -exec chmod 500 {} \; \
    && find /home/apps/apache/conf -type f -exec chmod 400 {} \; \
    && mkdir -p /home/apps/php/logs \
    && chmod -R 400 /home/apps/php \
    && chmod 500 /home/apps/php \
    && chmod 500 /home/apps/php/lib \
    && chmod 500 /home/apps/php/lib/php \
    && chmod 500 /home/apps/php/lib/php/extensions \
    && chmod 500 /home/apps/php/lib/php/extensions/*.so \
    && chmod 777 -R /home/apps/www/storage /home/apps/www/.env \
    && rsync -rt /docker/container-entrypoint /usr/bin/container-entrypoint \
    && chmod +x /usr/bin/container-entrypoint

RUN ln -sf /dev/stdout /home/apps/apache/logs/access_log \
    && ln -sf /dev/stderr /home/apps/apache/logs/error_log \
    && ln -sf /dev/stderr /home/apps/php/logs/php_error.log \
    && ln -sf /dev/stderr /home/apps/php/logs/laravel.log

USER apache

ENTRYPOINT ["/usr/bin/container-entrypoint"]
CMD /home/apps/apache/bin/apachectl -DFOREGROUND

FROM fluentd:v1.9-debian-1

COPY ./conf/fluentd.conf /fluentd/etc/fluentd.conf

USER root
RUN ["gem", "install", "fluent-plugin-elasticsearch", "--no-document", "--version", "4.3.3"]
USER fluent
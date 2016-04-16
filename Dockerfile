FROM node:slim
MAINTAINER Liping
COPY . MTaaS-Controller
WORKDIR /MTaaS-Controller
CMD ["node","bin/www"]
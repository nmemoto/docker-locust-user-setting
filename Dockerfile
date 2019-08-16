FROM node:12-alpine

RUN apk update && apk upgrade && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/community >> /etc/apk/repositories && \
    echo @edge http://nl.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories && \
    apk add --no-cache \
    chromium@edge \
    nss@edge \
    freetype@edge \
    harfbuzz@edge \
    ttf-freefont@edge
ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD true

WORKDIR /workspace
COPY index.js package*.json ./

RUN npm install

ENTRYPOINT [ "node", "index.js" ]
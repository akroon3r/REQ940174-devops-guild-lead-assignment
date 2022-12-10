FROM node:18.12.1-bullseye-slim as node18

WORKDIR /app

# Copy files and npm install
COPY src/guild-lead-assignment-api/. .
RUN npm i

# Twindle the permissions to ensure things can be run as an arbitary user
RUN chown -R 1001:0 /usr/src/app && \
    chmod -R ug+rwx /usr/src/app

# Provide access to node for adding logs
RUN mkdir -p /.npm && chown -R 1001:0 /.npm && chmod -R ug+rwx /.npm

USER 1001

# Entrypoint
CMD ["npm", "run", "start"]

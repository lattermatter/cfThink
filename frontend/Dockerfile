FROM node:24-slim
WORKDIR /usr/local/frontend 
# all future rel. to THIS directory. CREATED IF DNE.

# Install the application dependencies
COPY package.json .
RUN npm install

# Copy in the source code
COPY . .
EXPOSE 5173
# app will listen on port 5173

# Setup an app user so the container doesn't run as the root user
# ROOT FOR NOW FOR EASIER, MUST CHANGE IN DEPLOYMENT
# CODE BELOW DOESNT WORK
# RUN useradd app
# USER app

# make vite listen to connection port with possible external server, not just default internal port
CMD ["npm", "run", "dev", "--", "--host"]
# non list: runs within a shell. list: runs as the primary process (most priority)
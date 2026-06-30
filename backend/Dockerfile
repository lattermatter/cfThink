FROM python:3.13
WORKDIR /usr/local/backend 
# all future rel. to THIS directory. CREATED IF DNE.

# Install the application dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy in the source code
COPY . .
EXPOSE 8080
# app will listen on port 8080

# Setup an app user so the container doesn't run as the root user
# ROOT FOR NOW FOR EASIER, MUST CHANGE IN DEPLOYMENT
# CODE BELOW DOESNT WORK
# RUN useradd app
# USER app

# host uvicorn app, listens at port 080
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8080", "--reload"]
# main in root
# non list: runs within a shell. list: runs as the primary process (most priority)
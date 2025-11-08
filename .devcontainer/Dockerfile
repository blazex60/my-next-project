FROM node:20-bookworm-slim
 
 # Install Node.js and other dependencies
 RUN apt-get update && apt-get install -y \
     curl \
     git \
     && apt-get clean \
     && rm -rf /var/lib/apt/lists/*
 
 # Create a non-root user to use the container
 RUN mkdir -p /my-next-project && chown -R node:node /my-next-project
 USER node

 # Set the working directory
 WORKDIR /my-next-project
  
 # Expose the development server port
 EXPOSE 3000
FROM node:22.12.0-alpine

# Set working directory
WORKDIR /workspace

# Install git and other utilities
RUN apk add --no-cache git curl

# Create symlink for node to /usr/bin (some tools expect it)
RUN ln -s /usr/local/bin/node /usr/bin/node || true

# Set npm to use exact versions
RUN npm config set save-exact true

# Default shell
ENV SHELL=/bin/sh

# Expose port for Vite development server
EXPOSE 3000 5173

# Keep container running
CMD ["/bin/sh"]

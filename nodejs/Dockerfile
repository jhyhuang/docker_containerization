# Dockerfile example for Node.JS code
FROM node
MAINTAINER ucla oarc

# Add files to image
RUN mkdir /exp_codes
ADD js_exp_web.js /exp_codes
ADD web_data.txt /exp_codes
WORKDIR /exp_codes

# Expose port
EXPOSE 1234

# Executive commands
CMD ["node", "js_exp_web.js"]


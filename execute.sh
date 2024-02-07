#!/bin/bash
# Delete PM2 process with ID 0
sudo pm2 delete 0
# Pull latest changes from Git repository
git pull
# Start index.js with PM2
sudo pm2 start index.js
# Show logs for PM2 process with ID 0
sudo pm2 logs 0
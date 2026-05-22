#!/usr/bin/env bash
set -e
cd /var/www/tjlabs/dev
npm run build
pm2 restart tjlabs-dev

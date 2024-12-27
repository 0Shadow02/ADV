#!/bin/sh
set -e

# Run Prisma migrations
npx prisma migrate dev

# Start your application
node dist/index.js

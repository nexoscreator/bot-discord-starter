#!/bin/bash
echo " "
# Prompt user for input if environment variables are not set
if [ -z "$DISCORD_BOT_NAME" ]; then
  read -p "Enter your bot name: " DISCORD_BOT_NAME
fi

if [ -z "$DISCORD_BOT_CLIENT_ID" ]; then
  read -p "Enter your bot client ID: " DISCORD_BOT_CLIENT_ID
fi

if [ -z "$DISCORD_BOT_TOKEN" ]; then
  read -p "Enter your bot token: " DISCORD_BOT_TOKEN
fi

# Save configuration to a .env file
cat <<EOF > .env
DISCORD_BOT_NAME=$BOT_NAME
DISCORD_BOT_CLIENT_ID=$BOT_CLIENT_ID
DISCORD_BOT_TOKEN=$BOT_TOKEN
EOF
echo " "
echo "Configuration saved to .env"

# If a config.json is needed as well, you can generate it from the environment variables
# CONFIG_JSON=$(cat <<EOF
# {
#   "botName": "$BOT_NAME",
#   "clientId": "$BOT_CLIENT_ID",
#   "botToken": "$BOT_TOKEN"
# }
# 
# EOF
# )
# 
# echo "$CONFIG_JSON" > config.json
# echo "Configuration saved to config.json"

#!/bin/bash

read -p 'Database: ' db
read -p 'User ('${USER}'): ' user
read -p 'Pass (Default Password): ' pass

echo

node './modules/db/config.js' -d $db -u $user -p $pass

echo
echo /config-files/db-config.json
echo

cat config-files/db-config.json

echo
echo
echo To finish setup please run:
echo -e '\tpsql -U $user -f ./launch-scripts/database.sql'
echo

#!/bin/bash

read -p 'Database: ' db
read -p 'User ('${USER}'): ' username
read -p 'Pass (Default Password): ' pass

echo

node './lib/db/config.js' -d $db -u $username -p $pass

echo
echo /config-files/db-config.json
echo

cat config-files/db-config.json

echo
echo
echo To finish setup please run:
echo -e '\tpsql -U <<username>> -f ./launch-scripts/database.sql'
echo

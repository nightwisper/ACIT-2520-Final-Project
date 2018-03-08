#!/bin/bash

echo Running database tests
echo node ./lib/db/test.js
echo
node ./lib/db/test.js

echo Running encryption tests
echo node ./lib/encryption/test.js
echo
node ./lib/encryption/test.js

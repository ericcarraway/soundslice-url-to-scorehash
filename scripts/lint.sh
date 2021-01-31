set -e

./node_modules/eslint/bin/eslint.js ./*.js --fix
./node_modules/eslint/bin/eslint.js ./**/*.js --fix

echo "OK"

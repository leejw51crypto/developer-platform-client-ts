rm -rf ./dist/*
yarn build
cp -Rf ./dist/* $MY_DPC_CLIENT


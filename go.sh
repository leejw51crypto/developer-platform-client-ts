export NODE_ENV=development
echo $NODE_ENV
rm -rf ./dist/*
yarn build
cp -Rf ./dist/* $MY_DPC_CLIENT


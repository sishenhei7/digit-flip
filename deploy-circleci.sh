git pull
yarn build:doc
cd docs
git init
git add .
git commit -m 'deploy: build docs'
git push git@github.com:sishenhei7/digit-flip.git  master:gh-pages
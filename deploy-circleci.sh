git pull
yarn build:doc
cd docs
git init
git config --global user.email "you@example.com"
git config --global user.name "sishenhei7"
git add .
git commit -m 'deploy: build docs[ci skip]'
git push -f git@github.com:sishenhei7/digit-flip.git  master:gh-pages
cd -
# !/bin/bash

# 1.) COPY ALL FILES OVER TO THE PROPER DIRECTORY
# 2.) STORE CURRENT DIRECTORY
# 3.) DOTCLOUD PUSH


current=`pwd`

dotcloud=../dotcloud/

cp -r live/* $dotcloud

cd $dotcloud && dotcloud push

cd $current







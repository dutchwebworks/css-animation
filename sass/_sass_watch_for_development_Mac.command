#!/bin/sh
# Put this file in the same directory as the .scss files

CURRENT_DIR=$(dirname $_)
cd $CURRENT_DIR
sass --style expanded --debug-info --watch ./:../css
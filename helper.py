#!/usr/bin/python

max_height = 532
max_width = 960


divs = []

writer = open("temp/css_helper", 'a')

for i in divs:

	width = float(i[0]) / float(max_width) * 100
	height = float(i[1]) / float(max_height) * 100
	css = "\n\theight:" + str(height) + "%;"
	css += "\n\twidth:" + str(width) + "%;\n\t"

	writer.write(css)






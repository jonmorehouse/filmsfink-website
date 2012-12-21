#!/usr/bin/python

import os
from PIL import Image

def run(directory, output):

	max_width = "1280"
	max_height = "720"

	files = os.listdir(directory)

	images = []

	for file_name in files:

		insertion_data = dict()

		name = file_name.replace("_hover", "")
		insertion_data['file_name'] = directory + "/" + name
		insertion_data['tag'] = "." + name.replace(".png", "")

		flag = False
		for i in images:

			if i['file_name'] == insertion_data['file_name']:
				flag = True

		if not flag:
			images.append(insertion_data)

	# NOW GET THE PROPER HEIGHT AND WIDTH OF THE IMAGES!
	for element in images:

		img = Image.open(element['file_name'])
		element['width'], element['height'] = img.size #get the image height / width


	# CREATE THE CSS DYNAMICALLY

	with open(output, 'a') as writer:

		for element in images:

			height = float(element['height']) / float(max_height) * 100
			width = float(element['width']) / float(max_width) * 100

			css = element['tag'] +" {\n\theight:" + str(height) + "%;\n\twidth:" + str(width) + "%;\n\tleft:0;\n\ttop:0;\n}\n\n"
			writer.write(css)


directories = ['sculptors', 'surrealism', 'photographers']

for i in directories:

	images = "live/images/" + i
	output = "temp/" + i + ".less" 
	run(images, output)

import cv2
import numpy as np

# Load the image
image = cv2.imread('images/kanto-map.png')  # Replace 'your_image_path.png' with the actual path to your image

# Convert the image to grayscale
gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# Define a color threshold for white pixels in the original image
white_threshold = 200  # Adjust this value based on your image characteristics

# Create a mask for white pixels
white_mask = cv2.inRange(image, (white_threshold, white_threshold, white_threshold), (255, 255, 255))

# Invert the mask to get non-white pixels
non_white_mask = cv2.bitwise_not(white_mask)

# Bitwise AND operation to remove the white bits
result_image = cv2.bitwise_and(image, image, mask=non_white_mask)

# Save the result as a new image
cv2.imwrite('new-kanto-map.png', result_image)
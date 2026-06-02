from PIL import Image
import os

try:
    img_path = 'mzdj.jpg'
    out_path = 'mzdj_face.jpg'
    
    img = Image.open(img_path)
    width, height = img.size
    
    # We want a square crop, zoomed in.
    # Let's take a larger portion to zoom out slightly
    crop_size = min(width, height) * 0.70
    
    # Assume face is centered horizontally
    left = (width - crop_size) / 2
    right = left + crop_size
    
    # Assume face is somewhat near the top
    top = (height - crop_size) * 0.35
    bottom = top + crop_size
    
    cropped = img.crop((left, top, right, bottom))
    
    # Save the cropped image
    cropped.save(out_path, quality=95)
    print(f"Successfully cropped image and saved as {out_path}")
    
except Exception as e:
    print(f"Error: {e}")

from PIL import Image
import io
import base64
import os

img = Image.open('public/images/portrait.jpg')
img.thumbnail((32, 32))
buf = io.BytesIO()
img.save(buf, format='JPEG', quality=40)
b64 = base64.b64encode(buf.getvalue()).decode('utf-8')
data_url = f'data:image/jpeg;base64,{b64}'

os.makedirs('src/lib', exist_ok=True)
with open('src/lib/portrait-blur.ts', 'w', encoding='utf-8') as f:
    f.write(f'export const PORTRAIT_BLUR_DATA_URL = "{data_url}";\n')

print('Generated src/lib/portrait-blur.ts successfully!')

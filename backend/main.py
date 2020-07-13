from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from PIL import ImageOps, Image

driver =  webdriver.Chrome(ChromeDriverManager().install())
driver.get('http://127.0.0.1:5500/frontend/template1/index.html')
screenshot = driver.save_screenshot('screenshot.png')

size = (320, 0, 700, 600)
captura = Image.open('screenshot.png')
imagen_cortada = captura.crop(size)

imagen_cortada.save('imagen-cortada.png')
driver.quit()
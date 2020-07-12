
<p align="center">
  <img src="historygram.png" alt="historygram" width="224px" height="440px"/>
</p>

<p align="center">Generador de imagenes para <b>Instagram</b></p>

Genera imagenes random con el poder de **HTML** y **CSS** para crear diseños basados en las dimensiones de las **Redes Sociales**

### Tecnologias usadas

* HTML 5
* CSS
* Python 3

> **Screenshot** controlada con el poderoso **Python 3** y la herramienta **Selenium**

```python
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from PIL import ImageOps, Image

# EJECUTA EL NAVEGADOR
driver =  webdriver.Chrome(ChromeDriverManager().install())
driver.get('http://127.0.0.1:5501/index.html')

# TOMA CAPTURA
screenshot = driver.save_screenshot('screenshot.png')

# RECORTAMOS LA IMAGEN
size = (320, 0, 700, 600)
captura = Image.open('screenshot.png')
imagen_cortada = captura.crop(size)

imagen_cortada.save('imagen-cortada.png')

# CIERRA EL NAVEGADOR
driver.quit()
```

<p align="center">
  <img src="python-icon.svg" alt="historygram" width="224px" height="224px"/>
</p>

### Proyecto presentado en [Horchata JS](https://www.horchatajs.com/) año 2020

<p align="center">
  <img src="horchatajs-logo.svg" alt="horchatajs" width="440px" height="440px"/>
</p>

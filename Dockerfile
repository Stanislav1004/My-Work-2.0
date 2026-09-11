FROM nginx:alpine

# Копіюємо всі директорії та файли проєкту
COPY . /usr/share/nginx/html

# Перенаправляємо корінь сайту на головну сторінку з папки home
RUN cp /usr/share/nginx/html/home/index.html /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
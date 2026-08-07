# profitpilot.dz — site statique servi par nginx
FROM nginx:alpine

# Le site
COPY . /usr/share/nginx/html

# La configuration remplace celle par défaut de l'image, qui ne fait ni
# compression, ni cache, ni redirection d'hôte, ni page 404.
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Fichiers de travail qui n'ont rien à faire dans un conteneur public.
# nginx.conf y est aussi retiré : il est déjà copié à sa vraie place, et
# une configuration serveur téléchargeable est une information de trop.
RUN rm -rf /usr/share/nginx/html/.git \
           /usr/share/nginx/html/Dockerfile \
           /usr/share/nginx/html/nginx.conf \
           /usr/share/nginx/html/public_html.zip

EXPOSE 80 443

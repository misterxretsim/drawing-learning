path="`dirname \"$0\"`"
cd "$path/configuration"
sed -Ei "" "s/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}/$(ifconfig -a | grep broadcast | egrep -o '([0-9]{1,3}[\.]){3}[0-9]{1,3}\s' | sed 's/ $//')/g" nginx_dev.conf
docker run --rm -d --name=nginx_for_dl -v "$path/configuration/nginx_dev.conf":/etc/nginx/nginx.conf -p 8085:8085 nginx
docker run -d -p 127.0.0.1:27017:27017 --name=mongo_for_dl mongo
docker start mongo_for_dl
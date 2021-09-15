docker build -t bitflix-web .
docker tag bitflix-web registry.cn-hongkong.aliyuncs.com/uniarts/bitflix-web
docker login --username=jieliantech registry.cn-hongkong.aliyuncs.com
docker push registry.cn-hongkong.aliyuncs.com/uniarts/bitflix-web

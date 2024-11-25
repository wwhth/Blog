# 基础镜像为node，版本为最新
FROM node:20.11.0
# 创建容器内的项目存放目录
RUN mkdir -p /home/Blog
WORKDIR /home/Blog

#  将Dockerfile当前目录下所有文件拷贝至容器内项目目录并安装项目依赖
COPY . /home/Blog

# RUN npm config set proxy http://101.200.232.30:3001
# RUN npm config set https-proxy http://101.200.232.30:3001
RUN npm config set registry https://registry.npmmirror.com
RUN npm install pnpm -g
RUN pnpm install
RUN npm install pm2 -g
# 容器对外暴露的端口号，要和node项目配置的端口号一致
EXPOSE 3000

# 容器启动时执行的命令
CMD [ "npm","run", "started" ]
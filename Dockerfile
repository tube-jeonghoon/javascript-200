# Dockerfile
FROM ubuntu:18.04

# Ubuntu 유저 생성
RUN adduser --disabled-password --gecos "" ubuntu

# 컨테이너 실행 시 ubuntu로 실행
USER ubuntu
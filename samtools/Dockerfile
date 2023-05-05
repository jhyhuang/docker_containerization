# Dockerfile example for Samtools
FROM ubuntu
MAINTAINER ucla oarc

# set up necessary libs
RUN apt update; apt upgrade -y \
    && apt install -y build-essential \
    && apt install -y libbz2-dev zlib1g-dev libncurses5-dev libncursesw5-dev \
    && apt install -y liblzma-dev libcurl4-openssl-dev wget autoconf

# download htslib,bcftools,samtools
ENV CODE_VERSION=1.17
ADD https://github.com/samtools/htslib/releases/download/$CODE_VERSION/htslib-$CODE_VERSION.tar.bz2 /opt
ADD https://github.com/samtools/bcftools/releases/download/$CODE_VERSION/bcftools-$CODE_VERSION.tar.bz2 /opt
ADD https://github.com/samtools/samtools/releases/download/$CODE_VERSION/samtools-$CODE_VERSION.tar.bz2 /opt
RUN cd /opt \
    && tar xvf htslib-$CODE_VERSION.tar.bz2 \
    && tar xvf bcftools-$CODE_VERSION.tar.bz2 \
    && tar xvf samtools-$CODE_VERSION.tar.bz2 \
    && cd /opt/htslib-$CODE_VERSION \
    && make \
    && cd /opt/bcftools-$CODE_VERSION \
    && make \
    && cd /opt/samtools-$CODE_VERSION \
    && make \
    && make install
RUN rm /opt/*.tar.bz2

# set path
ENV PATH=/opt/htslib-$CODE_VERSION:$PATH
ENV PATH=/opt/bcftools-$CODE_VERSION:$PATH
ENV PATH=/opt/samtools-$CODE_VERSION:$PATH

# commands
CMD ["source", "/root/.bashrc"]

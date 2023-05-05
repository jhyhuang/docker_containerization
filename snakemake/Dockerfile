# Dockerfile example for Anaconda3 envs
FROM continuumio/miniconda3
MAINTAINER ucla oarc

# copy snakemake yaml file
COPY environment.yml /opt/

# create a conda env for snakemake
RUN conda config --add channels conda-forge \
    && conda config --add channels bioconda \
    && conda env create -f /opt/environment.yml \
    && conda init bash \
    && echo "conda activate snakemake" >> /root/.bashrc

# set path
ENV PATH=/opt/conda/envs/snakemake/bin:$PATH

# commands
CMD ["source", "/root/.bashrc"]


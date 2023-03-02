
# Reading compressed tar balls from `archive/extract`

```julia
using Tar, CodecZlib
tar_gz =  open("/scratch/path/to/exp/archive/extract/vobs20190818.tar.gz")
tar    = GzipDecompressor(tar_gz)
dir    = Tar.extract(tar)


```

Then read dir 
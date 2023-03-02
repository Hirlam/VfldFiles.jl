
# Distributed 


E.g. on Atos 

```julia
using Distributed, ClusterManagers, Glob
addprocs_slurm(10)  # Will use the fractional queue by default   
 
@everywhere using VfldFiles 

files = glob("vfld*", "/scratch/fai/vfld/SPP_DP")

@distributed vcat for file in files
    read_v(file,select=[:TT,:DD,:FF])
end
```

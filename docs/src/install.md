# Install 

If you have added the [Harmonie registry](https://github.com/Hirlam/HarmonieRegistry) 

```julia
pkg> registry add General
pkg> registry add https://github.com/Hirlam/HarmonieRegistry.git
```

VfldFiles can be install as  

```julia 
pkg> add VfldFiles
```


## Atos 

On Atos no need to install:  

```bash
alias julia=/perm/fars/hlam/julia-1.8.5/bin/julia
export JULIA_DEPOT_PATH=$PERM/juliadepot:/perm/fars/hlam/juliadepot
```

This will use `/perm/fars/hlam/juliadepot` as a (read only) system depot and `$PERM/juliadepot` as your user depot. The system depot contains a dev version of VfldFiles.jl. Additional packages you install that are not found in the system depot will be installed in the user depot. 

!!! note 
    Keep the user depot in `JULIA_DEPOT_PATH` on `$PERM/juliadepot` or other place with large enough quota like `HPCPERM`   Default for `JULIA_DEPOT_PATH` is `$HOME/.julia` 

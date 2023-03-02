# VfldFiles.jl

[![](https://img.shields.io/badge/docs-dev-blue.svg)](https://hirlam.github.io/VfldFiles.jl/dev/)

VfldFiles.jl is a small julia package to read vobs and vfld files  



## Installation (Atos) 

On Atos no need to install just:  

```bash
alias julia=/perm/fars/hlam/julia-1.8.5/bin/julia
export JULIA_DEPOT_PATH=$PERM/juliadepot:/perm/fars/hlam/juliadepot
```

This will use `/perm/fars/hlam/juliadepot` as a (read only) system depot and `$PERM/juliadepot` as your user depot. The system depot contains a dev version of VfldFiles.jl. Additional packages you install that are not found in the system depot will be installed in the user depot. 


If you prefer you can leave out the system depot and do (in Julia type `]` to enter "pkg" mode)

```julia
pkg> registry add General
pkg> registry add https://github.com/Hirlam/HarmonieRegistry.git
```

This will make packages from the [Harmonie registry](https://github.com/Hirlam/HarmonieRegistry) available.  Then add 

```julia 
pkg> add Vfldfiles
```

Note: keep the user depot on `$PERM/juliadepot` or other place with large enough quota like `HPCPERM`   Default for `JULIA_DEPOT_PATH` is `$HOME/.julia` 

## Usage

```julia
julia> df = read_v(filename,select=[:ID,:TT])
```

See multithreaded [example](https://hirlam.github.io/VfldFiles.jl/dev/multithreading/) how to run on a single node on Atos (reads approximately 4000 vfld files per second)  

[Documentation](https://hirlam.github.io/VfldFiles.jl/)

# Reading compressed tar balls from `archive/extract`

```
srun --qos=np --nodes=1 --ntasks-per-node=1 --cpus-per-task=256 --pty bash -i
```

```
julia --threads=256
```

```julia
julia> function untargz(dir) 
           vfldfiles = []
           for (root, dirs, files) in walkdir(dir)
               Threads.@threads  for tarfile in files 
                   tar_gz = open(joinpath(root,tarfile))
                   tar = GzipDecompressorStream(tar_gz) 
                   dir = Tar.extract(tar) 
                   push!(vfldfiles, glob("vfld*",dir) )                   
               end
           end
           return reduce(vcat,vfldfiles)
       end
```


```julia 
julia> function readall(files)
           nfiles = length(files )
           dfs = [DataFrame() for _ in 1:nfiles]
   
           Threads.@threads for i  in 1:nfiles
               dfs[i] = read_v(files[i],select=[:TT,:DD])
           end 
           return dfs 
       end 
```

```julia
julia> dir = "/scratch/fai/hm_home/SPP_DP/archive/extract/"
```

```julia 
julia> @time files = untargz(dir)
```
```julia
  2.680142 seconds (513.68 k allocations: 1.542 GiB)
6909-element Vector{String}:
 "/dev/shm/_tmpdir_.fars.37098181/jl_V3SxRT/vfldSPP_DPmbr0002022110103"
 "/dev/shm/_tmpdir_.fars.37098181/jl_V3SxRT/vfldSPP_DPmbr000202211010300"
 "/dev/shm/_tmpdir_.fars.37098181/jl_V3SxRT/vfldSPP_DPmbr000202211010301"
 ...
```

```julia 
julia> dfs = readall(files[1:2])  # Too avoid including compilation times in @time

julia> @time dfs = readall(files);
  7.783107 seconds (71.93 M allocations: 9.343 GiB, 24.83% gc time)
```

```julia
julia> reduce(vcat,dfs)
14391447×7 DataFrame
      Row │ validtime            leadtime  basetime             mbr     exp     DD        TT      
          │ DateTime             Hour      DateTime             String  String  Float64   Float64 
──────────┼───────────────────────────────────────────────────────────────────────────────────────
        1 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  147.519   276.891
        2 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  176.413   282.585
        3 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  159.275   279.699
        4 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  164.65    281.786
        5 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  177.402   281.165
        6 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  172.455   282.439
        7 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  180.331   282.312
        8 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  257.788   276.184
        9 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  200.148   280.815
       10 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  184.086   281.113
       11 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  183.168   281.106
       12 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  199.307   275.757
       13 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  243.805   275.67
       14 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  186.714   282.727
       15 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  253.355   276.834
       16 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP   37.8926  277.466
       17 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP   63.7584  278.19
       18 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  197.971   281.455
       19 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  235.966   279.095
       20 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  135.27    280.375
       21 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  236.421   281.684
       22 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  172.625   277.252
       23 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  202.278   278.667
       24 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  179.66    271.379
       25 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  123.596   276.468
       26 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  232.82    279.923
    ⋮     │          ⋮              ⋮               ⋮             ⋮       ⋮        ⋮         ⋮
 14391422 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  128.608   274.082
 14391423 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  188.909   273.579
 14391424 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP   16.401   273.043
 14391425 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP   93.5847  273.954
 14391426 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  309.237   273.661
 14391427 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  182.641   271.498
 14391428 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  351.191   271.666
 14391429 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  227.327   270.912
 14391430 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  321.095   269.722
 14391431 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  287.22    267.921
 14391432 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP   87.7101  269.221
 14391433 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  119.82    283.537
 14391434 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  196.375   277.685
 14391435 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  310.67    272.289
 14391436 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP   10.3838  273.653
 14391437 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  116.82    283.335
 14391438 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  142.703   282.335
 14391439 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  119.827   272.979
 14391440 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  351.493   273.122
 14391441 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  236.685   278.609
 14391442 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  202.424   275.526
 14391443 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  131.878   284.335
 14391444 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  182.742   273.506
 14391445 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  166.391   271.373
 14391446 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  114.608   283.882
 14391447 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  136.411   283.082
                                                                             14391395 rows omitted

```


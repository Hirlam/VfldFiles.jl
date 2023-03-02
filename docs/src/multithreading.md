
# Multi threading



```
srun --qos=np --nodes=1 --ntasks-per-node=1 --cpus-per-task=256 --pty bash -i
```

Start julia with `julia --threads=auto` or `julia --threads=N`  


```julia
julia> function readall(files) 
           dfs=DataFrame[]
           Threads.@threads for file in files
              push!(dfs, read_v(file,select=[:ID,:TT,:DD,:FF]))
           end; 
           return dfs 
       end
```

```julia 
julia> files = glob("vfld*", "/scratch/fai/vfld/SPP_DP")
julia> @benchmark dfs = readall(files)
```
```
BenchmarkTools.Trial: 5 samples with 1 evaluation.
 Range (min … max):  980.453 ms …   1.168 s  ┊ GC (min … max): 0.00% … 0.00%
 Time  (median):        1.110 s              ┊ GC (median):    0.00%
 Time  (mean ± σ):      1.092 s ± 74.973 ms  ┊ GC (mean ± σ):  0.00% ± 0.00%

  █                       █                █          █      █  
  █▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█▁▁▁▁▁▁▁▁▁▁█▁▁▁▁▁▁█ ▁
  980 ms          Histogram: frequency by time          1.17 s <

 Memory estimate: 5.14 GiB, allocs estimate: 39591794.
```


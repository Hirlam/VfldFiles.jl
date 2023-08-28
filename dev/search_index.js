var documenterSearchIndex = {"docs":
[{"location":"multithreading/#Multi-threading","page":"Multi threading","title":"Multi threading","text":"","category":"section"},{"location":"multithreading/","page":"Multi threading","title":"Multi threading","text":"srun --qos=np --nodes=1 --ntasks-per-node=1 --cpus-per-task=256 --pty bash -i","category":"page"},{"location":"multithreading/","page":"Multi threading","title":"Multi threading","text":"Start julia with julia --threads=auto or julia --threads=N  ","category":"page"},{"location":"multithreading/","page":"Multi threading","title":"Multi threading","text":"julia> function readall(files) \n           dfs=DataFrame[]\n           Threads.@threads for file in files\n              push!(dfs, read_v(file,select=[:ID,:TT,:DD,:FF]))\n           end; \n           return dfs \n       end","category":"page"},{"location":"multithreading/","page":"Multi threading","title":"Multi threading","text":"julia> files = glob(\"vfld*\", \"/scratch/fai/vfld/SPP_DP\")\njulia> @benchmark dfs = readall(files)","category":"page"},{"location":"multithreading/","page":"Multi threading","title":"Multi threading","text":"BenchmarkTools.Trial: 5 samples with 1 evaluation.\n Range (min … max):  980.453 ms …   1.168 s  ┊ GC (min … max): 0.00% … 0.00%\n Time  (median):        1.110 s              ┊ GC (median):    0.00%\n Time  (mean ± σ):      1.092 s ± 74.973 ms  ┊ GC (mean ± σ):  0.00% ± 0.00%\n\n  █                       █                █          █      █  \n  █▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█▁▁▁▁▁▁▁▁▁▁█▁▁▁▁▁▁█ ▁\n  980 ms          Histogram: frequency by time          1.17 s <\n\n Memory estimate: 5.14 GiB, allocs estimate: 39591794.","category":"page"},{"location":"sqlite/#Creating-Sqlite-databases","page":"Creating Sqlite databases","title":"Creating Sqlite databases","text":"","category":"section"},{"location":"sqlite/","page":"Creating Sqlite databases","title":"Creating Sqlite databases","text":"using Sqlite\ndb = SQLite.DB()\nread_v(file) |> SQLite.load!(db, \"synop\")","category":"page"},{"location":"read/#Read","page":"Read","title":"Read","text":"","category":"section"},{"location":"read/#Single-file","page":"Read","title":"Single file","text":"","category":"section"},{"location":"read/","page":"Read","title":"Read","text":"To read a single vobs or  vfld file (MEPS_prod is a directory with test data exported by VfldFiles)","category":"page"},{"location":"read/","page":"Read","title":"Read","text":"julia> file = joinpath(MEPS_prod,\"vfldMEPS_prodmbr000201902170000\")","category":"page"},{"location":"read/","page":"Read","title":"Read","text":"julia> df = read_v(file)","category":"page"},{"location":"read/","page":"Read","title":"Read","text":"1203×23 DataFrame\n  Row │ validtime            leadtime  basetime             mbr     exp        ID     LAT      LON      FI       NN       DD          FF       TT       RH       PSS       PS        QQ         VI         LC       TD       TX       TN       GX      \n      │ DateTime             Hour      DateTime             String  String     Int64  Float64  Float64  Float64  Float64  Float64     Float64  Float64  Float64  Float64   Float64   Float64    Float64    Float64  Float64  Float64  Float64  Float64 \n──────┼────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────\n    1 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod   1001   70.933   -8.667     36.4      8.0  240.917      4.2169  268.018  86.3429  1004.8    1009.4    0.0022307  26631.6        8.0  266.099  268.018  268.018   5.6646\n    2 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod   1010   69.307   16.131      4.1      0.0  338.16      11.9022  274.892  59.2889  1003.8    1004.2    0.002547   50000.0        0.0  267.822  274.892  274.892  16.1442\n    3 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod   1014   69.234   17.903     29.1      8.0  320.983      4.994   272.582  80.0037   999.302  1002.5    0.002922   25508.6        8.0  269.571  272.582  272.582   7.8125\n    4 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod   1015   69.601   17.837      2.6      8.0  345.419     11.2599  275.046  62.8254  1002.4    1002.3    0.0027333  50000.0        8.0  268.728  275.046  275.046  14.2696\n    5 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod   1018   69.241   16.003    151.9      6.0  333.965      9.0905  272.876  67.5597   986.023  1004.5    0.0025544  37548.3        3.0  267.623  272.876  272.876  15.9095\n    6 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod   1021   69.986   18.687     16.4      8.0    0.795415   7.4803  273.755  68.8485  1000.4    1001.5    0.0027337  48743.6        8.0  268.702  273.755  273.755   9.3063\n    7 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod   1022   70.0     18.705     39.5      8.0    1.2026     6.7692  273.36   70.2676   998.297  1001.5    0.0027176  35463.9        8.0  268.599  273.36   273.36    9.9478\n    8 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod   1023   69.059   18.54      69.1      8.0  320.234      6.4241  272.219  81.8536   989.452  1002.2    0.0029389  24650.7        8.0  269.522  272.219  272.219  10.2541\n    9 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod   1025   69.677   18.913      8.1      8.0  341.834      5.2363  272.42   85.9703   999.075  1001.5    0.0031024   6280.3        8.0  270.367  272.42   272.42    7.6994\n   10 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod   1026   69.654   18.937      5.2      8.0  348.836      4.7446  272.369  87.3452   997.18   1001.5    0.0031451   7052.3        8.0  270.524  272.369  272.369   7.5031\n   11 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod   1027   69.652   18.906      5.2      8.0  346.844      5.3174  272.801  84.9639  1000.3    1001.6    0.0031489   7052.3        8.0  270.582  272.801  272.801   7.5031\n  ⋮   │          ⋮              ⋮               ⋮             ⋮         ⋮        ⋮       ⋮        ⋮        ⋮        ⋮         ⋮          ⋮        ⋮        ⋮        ⋮         ⋮          ⋮          ⋮         ⋮        ⋮        ⋮        ⋮        ⋮\n 1194 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod  26941   53.132   25.972    186.2      3.0  249.056      3.3377  273.969  86.9213   996.189  1019.7    0.0035225   8782.4        0.0  272.048  273.969  273.969   6.2054\n 1195 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod  26951   53.053   27.552    153.7      0.0  254.325      4.6482  274.095  90.4929   999.719  1019.1    0.0036875   7309.7        0.0  272.719  274.095  274.095   8.1647\n 1196 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod  26961   53.209   29.127    154.7      0.0  254.922      4.7074  273.799  94.983    998.132  1017.7    0.0037966   4148.8        0.0  273.097  273.799  273.799   8.4064\n 1197 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod  26966   52.894   30.044    130.9      1.0  251.297      4.1394  273.846  96.0371  1001.2    1017.9    0.0038397   3103.7        1.0  273.292  273.846  273.846   6.9473\n 1198 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod  26976   53.017   31.6      135.8      0.0  250.841      4.5674  273.194  94.5566   999.02   1016.2    0.0036127   5224.7        0.0  272.426  273.194  273.194   8.2593\n 1199 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod  27008   59.404   35.911    143.6      8.0  275.915      4.7108  273.515  86.9089   976.234   993.917  0.0034769  11407.5        8.0  271.592  273.515  273.515   9.6426\n 1200 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod  33038   52.252   29.841    132.5      4.0  254.475      4.2071  274.207  97.6447  1002.8    1019.5    0.0039999   2279.5        4.0  273.877  274.207  274.207   6.9188\n 1201 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod  33041   52.402   30.963    121.5      2.0  251.701      3.4819  273.546  97.0925  1003.2    1018.5    0.0037894   2473.9        2.0  273.137  273.546  273.546   5.8978\n 1202 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod  99020   71.5     19.0       -0.8      7.0   11.1145    14.3435  273.216  64.1949  1003.1    1003.0    0.0024448  50000.0        6.0  267.274  273.216  273.216  18.8578\n 1203 │ 2019-02-17T00:00:00  0 hours   2019-02-17T00:00:00  mbr000  MEPS_prod  99090   66.0      2.0        0.1      8.0  271.694      2.7633  275.861  65.2038  1014.5    1014.5    0.002971   50000.0        8.0  269.994  275.861  275.861   4.3094\n                                                                                                                                                                                                                                         1182 rows omitted","category":"page"},{"location":"read/","page":"Read","title":"Read","text":"Default is to read all columns to select only certain columns use ","category":"page"},{"location":"read/","page":"Read","title":"Read","text":"julia> df = read_v(file,select=[:ID,:TT])","category":"page"},{"location":"read/","page":"Read","title":"Read","text":"note: Analysis files vs fc 00 files\nAnalysis dataframe has leadtime==missing forecast 00  leadtime==Hour(0) read_v(\"vfldSPP_DPmbr0002022110100\",select=[:ID,:TT])2083×7 DataFrame\n  Row │ validtime            leadtime  basetime             mbr     exp     ID       TT      \n      │ DateTime             Missing   DateTime             String  String  Int64    Float64 \n──────┼──────────────────────────────────────────────────────────────────────────────────────\n    1 │ 2022-11-01T00:00:00   missing  2022-11-01T00:00:00  mbr000  SPP_DP     1001  277.038\n    2 │ 2022-11-01T00:00:00   missing  2022-11-01T00:00:00  mbr000  SPP_DP     1010  281.141\n    3 │ 2022-11-01T00:00:00   missing  2022-11-01T00:00:00  mbr000  SPP_DP     1014  276.542\n    4 │ 2022-11-01T00:00:00   missing  2022-11-01T00:00:00  mbr000  SPP_DP     1015  279.33read_v(\"vfldSPP_DPmbr000202211010000\",select=[:ID,:TT])2083×7 DataFrame\n  Row │ validtime            leadtime  basetime             mbr     exp     ID       TT      \n      │ DateTime             Hour      DateTime             String  String  Int64    Float64 \n──────┼──────────────────────────────────────────────────────────────────────────────────────\n    1 │ 2022-11-01T00:00:00  0 hours   2022-11-01T00:00:00  mbr000  SPP_DP     1001  276.363\n    2 │ 2022-11-01T00:00:00  0 hours   2022-11-01T00:00:00  mbr000  SPP_DP     1010  281.505\n    3 │ 2022-11-01T00:00:00  0 hours   2022-11-01T00:00:00  mbr000  SPP_DP     1014  276.813\n    4 │ 2022-11-01T00:00:00  0 hours   2022-11-01T00:00:00  mbr000  SPP_DP     1015  280.019","category":"page"},{"location":"read/#Multiple-files","page":"Read","title":"Multiple files","text":"","category":"section"},{"location":"read/","page":"Read","title":"Read","text":"To read multiple files broadcast read_v over an array of files  ","category":"page"},{"location":"read/","page":"Read","title":"Read","text":"files = glob(\"vfld*\",MEPS_prod)\ndfs = read_v.(files)","category":"page"},{"location":"read/","page":"Read","title":"Read","text":"Use reduce  and vcat to vertically concatenate dataframes. ","category":"page"},{"location":"read/","page":"Read","title":"Read","text":"df = reduce(vcat, dfs)","category":"page"},{"location":"tarballs/#Reading-compressed-tar-balls-from-archive/extract","page":"Reading compressed tar balls from archive/extract","title":"Reading compressed tar balls from archive/extract","text":"","category":"section"},{"location":"tarballs/","page":"Reading compressed tar balls from archive/extract","title":"Reading compressed tar balls from archive/extract","text":"srun --qos=np --nodes=1 --ntasks-per-node=1 --cpus-per-task=256 --pty bash -i","category":"page"},{"location":"tarballs/","page":"Reading compressed tar balls from archive/extract","title":"Reading compressed tar balls from archive/extract","text":"julia --threads=256","category":"page"},{"location":"tarballs/","page":"Reading compressed tar balls from archive/extract","title":"Reading compressed tar balls from archive/extract","text":"julia> function untargz(dir) \n           vfldfiles = []\n           for (root, dirs, files) in walkdir(dir)\n               Threads.@threads  for tarfile in files \n                   tar_gz = open(joinpath(root,tarfile))\n                   tar = GzipDecompressorStream(tar_gz) \n                   dir = Tar.extract(tar) \n                   push!(vfldfiles, glob(\"vfld*\",dir) )                   \n               end\n           end\n           return reduce(vcat,vfldfiles)\n       end","category":"page"},{"location":"tarballs/","page":"Reading compressed tar balls from archive/extract","title":"Reading compressed tar balls from archive/extract","text":"julia> function readall(files)\n           nfiles = length(files )\n           dfs = [DataFrame() for _ in 1:nfiles]\n   \n           Threads.@threads for i  in 1:nfiles\n               dfs[i] = read_v(files[i],select=[:TT,:DD])\n           end \n           return dfs \n       end ","category":"page"},{"location":"tarballs/","page":"Reading compressed tar balls from archive/extract","title":"Reading compressed tar balls from archive/extract","text":"julia> dir = \"/scratch/fai/hm_home/SPP_DP/archive/extract/\"","category":"page"},{"location":"tarballs/","page":"Reading compressed tar balls from archive/extract","title":"Reading compressed tar balls from archive/extract","text":"julia> @time files = untargz(dir)","category":"page"},{"location":"tarballs/","page":"Reading compressed tar balls from archive/extract","title":"Reading compressed tar balls from archive/extract","text":"  2.680142 seconds (513.68 k allocations: 1.542 GiB)\n6909-element Vector{String}:\n \"/dev/shm/_tmpdir_.fars.37098181/jl_V3SxRT/vfldSPP_DPmbr0002022110103\"\n \"/dev/shm/_tmpdir_.fars.37098181/jl_V3SxRT/vfldSPP_DPmbr000202211010300\"\n \"/dev/shm/_tmpdir_.fars.37098181/jl_V3SxRT/vfldSPP_DPmbr000202211010301\"\n ...","category":"page"},{"location":"tarballs/","page":"Reading compressed tar balls from archive/extract","title":"Reading compressed tar balls from archive/extract","text":"julia> dfs = readall(files[1:2])  # Too avoid including compilation times in @time\n\njulia> @time dfs = readall(files);\n  7.783107 seconds (71.93 M allocations: 9.343 GiB, 24.83% gc time)","category":"page"},{"location":"tarballs/","page":"Reading compressed tar balls from archive/extract","title":"Reading compressed tar balls from archive/extract","text":"julia> reduce(vcat,dfs)\n14391447×7 DataFrame\n      Row │ validtime            leadtime  basetime             mbr     exp     DD        TT      \n          │ DateTime             Hour      DateTime             String  String  Float64   Float64 \n──────────┼───────────────────────────────────────────────────────────────────────────────────────\n        1 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  147.519   276.891\n        2 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  176.413   282.585\n        3 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  159.275   279.699\n        4 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  164.65    281.786\n        5 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  177.402   281.165\n        6 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  172.455   282.439\n        7 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  180.331   282.312\n        8 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  257.788   276.184\n        9 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  200.148   280.815\n       10 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  184.086   281.113\n       11 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  183.168   281.106\n       12 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  199.307   275.757\n       13 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  243.805   275.67\n       14 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  186.714   282.727\n       15 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  253.355   276.834\n       16 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP   37.8926  277.466\n       17 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP   63.7584  278.19\n       18 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  197.971   281.455\n       19 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  235.966   279.095\n       20 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  135.27    280.375\n       21 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  236.421   281.684\n       22 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  172.625   277.252\n       23 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  202.278   278.667\n       24 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  179.66    271.379\n       25 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  123.596   276.468\n       26 │ 2022-11-01T12:00:00  missing   2022-11-01T12:00:00  mbr000  SPP_DP  232.82    279.923\n    ⋮     │          ⋮              ⋮               ⋮             ⋮       ⋮        ⋮         ⋮\n 14391422 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  128.608   274.082\n 14391423 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  188.909   273.579\n 14391424 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP   16.401   273.043\n 14391425 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP   93.5847  273.954\n 14391426 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  309.237   273.661\n 14391427 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  182.641   271.498\n 14391428 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  351.191   271.666\n 14391429 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  227.327   270.912\n 14391430 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  321.095   269.722\n 14391431 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  287.22    267.921\n 14391432 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP   87.7101  269.221\n 14391433 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  119.82    283.537\n 14391434 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  196.375   277.685\n 14391435 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  310.67    272.289\n 14391436 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP   10.3838  273.653\n 14391437 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  116.82    283.335\n 14391438 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  142.703   282.335\n 14391439 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  119.827   272.979\n 14391440 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  351.493   273.122\n 14391441 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  236.685   278.609\n 14391442 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  202.424   275.526\n 14391443 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  131.878   284.335\n 14391444 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  182.742   273.506\n 14391445 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  166.391   271.373\n 14391446 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  114.608   283.882\n 14391447 │ 2022-11-14T12:00:00  36 hours  2022-11-13T00:00:00  mbr006  SPP_DP  136.411   283.082\n                                                                             14391395 rows omitted\n","category":"page"},{"location":"innerjoin/#Inner-joins","page":"Inner joins","title":"Inner joins","text":"","category":"section"},{"location":"innerjoin/","page":"Inner joins","title":"Inner joins","text":"\nmyshow(df) = show(df,truncate=10,show_row_number=false, display_size = (21, 90),maximum_columns_width = 15) \n\nusing VfldFiles, Glob, DataFrames\n\nvobsfiles = \"assets/vfldMEPS_prodmbr000201902170027\"\nvfldfiles = \"assets/vobs2019022015\"\nnothing #hide","category":"page"},{"location":"innerjoin/","page":"Inner joins","title":"Inner joins","text":"vobs_df =  read_v(vobsfiles,select=[:ID, :TT])\nvfld_df =  read_v(vfldfiles,select=[:ID, :TT]) \nnothing #hide","category":"page"},{"location":"innerjoin/","page":"Inner joins","title":"Inner joins","text":"df = innerjoin(vfld_df,vobs_df,on=[:ID,:validtime],makeunique=true)\nmyshow(df)  #hide","category":"page"},{"location":"install/#Install","page":"Install","title":"Install","text":"","category":"section"},{"location":"install/","page":"Install","title":"Install","text":"If you have added the Harmonie registry ","category":"page"},{"location":"install/","page":"Install","title":"Install","text":"pkg> registry add General\npkg> registry add https://github.com/Hirlam/HarmonieRegistry.git","category":"page"},{"location":"install/","page":"Install","title":"Install","text":"VfldFiles can be install as  ","category":"page"},{"location":"install/","page":"Install","title":"Install","text":"pkg> add VfldFiles","category":"page"},{"location":"install/#Atos","page":"Install","title":"Atos","text":"","category":"section"},{"location":"install/","page":"Install","title":"Install","text":"On Atos no need to install:  ","category":"page"},{"location":"install/","page":"Install","title":"Install","text":"alias julia=/perm/fars/hlam/julia-1.8.5/bin/julia\nexport JULIA_DEPOT_PATH=$PERM/juliadepot:/perm/fars/hlam/juliadepot","category":"page"},{"location":"install/","page":"Install","title":"Install","text":"This will use /perm/fars/hlam/juliadepot as a (read only) system depot and $PERM/juliadepot as your user depot. The system depot contains a dev version of VfldFiles.jl. Additional packages you install that are not found in the system depot will be installed in the user depot. ","category":"page"},{"location":"install/","page":"Install","title":"Install","text":"note: Note\nKeep the user depot in JULIA_DEPOT_PATH on $PERM/juliadepot or other place with large enough quota like HPCPERM   Default for JULIA_DEPOT_PATH is $HOME/.julia ","category":"page"},{"location":"plotting/#Plots","page":"Plots","title":"Plots","text":"","category":"section"},{"location":"plotting/","page":"Plots","title":"Plots","text":"using VfldFiles, Glob, Plots, DataFrames\n\nvobsfiles = glob(\"vobs*\",obs)\nvfldfiles = glob(\"vfld*\",MEPS_prod)\n\n\nobs_df = reduce(vcat, read_v.(vobsfiles,select=[:ID,:TT]))\nvfld_df = reduce(vcat, read_v.(vfldfiles,select=[:ID,:TT]))\n\nvobsfld = innerjoin(vfld_df,obs_df,on=[:ID,:validtime],makeunique=true)\n\ngdf=groupby(vobsfld,[:leadtime])\n\nfunction plotind(gdf,i)\n    p = scatter(gdf[i][:,:TT_1],gdf[i][:,:TT],legend=false,markersize=2);\n    title!(p,string((keys(gdf)[i]).leadtime))\n    plot!(p,[250, 300],[250, 300],linewidth=3)\n    xlabel!(p,\"obs\")\n    ylabel!(p,\"fc\")\n\n    return p \nend \n\n\nplot(plotind(gdf,1), plotind(gdf,3), plotind(gdf,5), plotind(gdf,11), layout=grid(2,2))","category":"page"},{"location":"plotting/","page":"Plots","title":"Plots","text":"(Image: )","category":"page"},{"location":"distributed/#Distributed","page":"Distributed","title":"Distributed","text":"","category":"section"},{"location":"distributed/","page":"Distributed","title":"Distributed","text":"E.g. on Atos ","category":"page"},{"location":"distributed/","page":"Distributed","title":"Distributed","text":"using Distributed, ClusterManagers, Glob\naddprocs_slurm(10)  # Will use the fractional queue by default   \n \n@everywhere using VfldFiles \n\nfiles = glob(\"vfld*\", \"/scratch/fai/vfld/SPP_DP\")\n\n@distributed vcat for file in files\n    read_v(file,select=[:TT,:DD,:FF])\nend","category":"page"},{"location":"#VfldFiles","page":"VfldFiles","title":"VfldFiles","text":"","category":"section"},{"location":"","page":"VfldFiles","title":"VfldFiles","text":"This packages exports a single function read_v which reads a vobs or vfld file and returns a dataframe  ","category":"page"},{"location":"#Installation","page":"VfldFiles","title":"Installation","text":"","category":"section"},{"location":"","page":"VfldFiles","title":"VfldFiles","text":"If you have added the Harmonie Registry","category":"page"},{"location":"","page":"VfldFiles","title":"VfldFiles","text":"pkg> add VfldFiles ","category":"page"},{"location":"vcat/#Concatenation","page":"Concatenation","title":"Concatenation","text":"","category":"section"},{"location":"vcat/","page":"Concatenation","title":"Concatenation","text":"myshow(df) = show(df,truncate=10,show_row_number=false, display_size = (21, 90),maximum_columns_width = 15) \nusing VfldFiles, Glob\n\nvfldfile = \"assets/vfldMEPS_prodmbr000201902170027\" \nvobsfile = \"assets/vobs2019022015\"\n","category":"page"},{"location":"vcat/","page":"Concatenation","title":"Concatenation","text":"To vertically concatenated dataframes use ","category":"page"},{"location":"vcat/","page":"Concatenation","title":"Concatenation","text":"vfld_df = read_v(vfldfile, select=[:ID,:TT])\nvobs_df = read_v(vobsfile, select=[:ID,:TT])\n\ndf = vcat(vfld_df,vobs_df,cols=:union)\nmyshow(df) #hide","category":"page"},{"location":"vcat/","page":"Concatenation","title":"Concatenation","text":"note: Note\nvobs dataframes have missing values for leadtime and basetime","category":"page"}]
}
# Reading 


## Single file

To read a single vobs or  vfld file 

```@setup 1
myshow(df) = show(df,truncate=10,show_row_number=false, display_size = (21, 90),maximum_columns_width = 15) 
```

```@example 1
using VfldFiles, Glob

vfldfiles = glob("vfld*",VfldFiles.MEPS_prod )

@show basename(vfldfiles[1])
df = read_v(vfldfiles[1], select=[:ID,:TT])

myshow(df) #hide
```

## Multiple files reduce vcat


Or use `reduce`  and `vcat` to vertically concatenate dataframes. 
Note in  `read_v.` the `.` will broadcast the `read_v` function over the `vfldfiles` array

```@example 1 
df = reduce(vcat, read_v.(vfldfiles,select=[:ID,:TT]))

myshow(df) #hide
```

!!! note 
    Analysis dataframe has `leadtime==missing` forecast 00  `leadtime==Hour(0)` 

    `vfldSPP_DPmbr0002022110100`

    ```
    2083×7 DataFrame
      Row │ validtime            leadtime  basetime             mbr     exp     ID       TT      
          │ DateTime             Missing   DateTime             String  String  Int64    Float64 
    ──────┼──────────────────────────────────────────────────────────────────────────────────────
        1 │ 2022-11-01T00:00:00   missing  2022-11-01T00:00:00  mbr000  SPP_DP     1001  277.038
        2 │ 2022-11-01T00:00:00   missing  2022-11-01T00:00:00  mbr000  SPP_DP     1010  281.141
        3 │ 2022-11-01T00:00:00   missing  2022-11-01T00:00:00  mbr000  SPP_DP     1014  276.542
        4 │ 2022-11-01T00:00:00   missing  2022-11-01T00:00:00  mbr000  SPP_DP     1015  279.33
    ```

    `vfldSPP_DPmbr000202211010000`

    ```
    2083×7 DataFrame
      Row │ validtime            leadtime  basetime             mbr     exp     ID       TT      
          │ DateTime             Hour      DateTime             String  String  Int64    Float64 
    ──────┼──────────────────────────────────────────────────────────────────────────────────────
        1 │ 2022-11-01T00:00:00  0 hours   2022-11-01T00:00:00  mbr000  SPP_DP     1001  276.363
        2 │ 2022-11-01T00:00:00  0 hours   2022-11-01T00:00:00  mbr000  SPP_DP     1010  281.505
        3 │ 2022-11-01T00:00:00  0 hours   2022-11-01T00:00:00  mbr000  SPP_DP     1014  276.813
        4 │ 2022-11-01T00:00:00  0 hours   2022-11-01T00:00:00  mbr000  SPP_DP     1015  280.019
    ```
